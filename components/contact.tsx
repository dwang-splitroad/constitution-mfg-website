"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const payload = new FormData()
      payload.append("name", formData.name)
      payload.append("email", formData.email)
      payload.append("company", formData.company)
      payload.append("phone", formData.phone)
      payload.append("message", formData.message)
      files.forEach((file) => payload.append("files", file))

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      })

      if (!res.ok) throw new Error("Failed to send message")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      setFiles([])
    } catch (err) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Get In Touch</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Ready to discuss your manufacturing needs? Contact us today to learn how Constitution MFG can deliver the
              precision components you require.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="George Washington"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="george@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Upload Part Files (Optional)</label>
              <div className="relative">
                <input
                  type="file"
                  id="files"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges,.stl"
                />
                <label
                  htmlFor="files"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-background border-2 border-dashed border-border rounded cursor-pointer hover:border-primary transition-colors"
                >
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {files.length > 0
                      ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                      : "Click to upload CAD files, drawings, or specifications"}
                  </span>
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-2 space-y-1">
                  {files.map((file, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {file.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded text-primary text-center">
                Thank you! We'll be in touch shortly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>© 2025 2A Constitution MFG. All rights reserved.</p>
            <p className="mt-2">Precision Manufacturing • Made in America • Quality First</p>
            <p className="mt-1">1020 South Laurel Street, Springfield, GA 31329</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
