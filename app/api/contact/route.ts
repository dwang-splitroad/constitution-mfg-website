import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(req: Request) {
  try {
    const form = await req.formData()

    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const company = String(form.get('company') || '')
    const phone = String(form.get('phone') || '')
    const message = String(form.get('message') || '')

    const fileEntries = form.getAll('files') as File[]

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const toEmail = 'casey@constmfg.com'
    const fromEmail = process.env.SENDGRID_FROM || 'no-reply@constmfg.com'
    const apiKey = process.env.SENDGRID_API_KEY

    if (!apiKey || !fromEmail) {
      return NextResponse.json(
        { error: 'Email service not configured. Set SENDGRID_API_KEY and SENDGRID_FROM.' },
        { status: 500 }
      )
    }

    sgMail.setApiKey(apiKey)

    const attachments = await Promise.all(
      fileEntries.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer()
        const base64 = Buffer.from(arrayBuffer).toString('base64')
        return {
          content: base64,
          filename: file.name,
          type: file.type || 'application/octet-stream',
          disposition: 'attachment',
        }
      })
    )

    const subject = `New Contact Form Submission — ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      phone ? `Phone: ${phone}` : '',
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
      text,
      attachments: attachments.length ? attachments : undefined,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}


