/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/AS9100%20Purchase%20Order%20Terms%20and%20Conditions.docx',
        destination: '/AS9100_Purchase_Order_Terms_and_Conditions.docx',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
