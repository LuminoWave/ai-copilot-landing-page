import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'AI Copilot for Call Centers',
  description: 'Your AI-powered assistant for modern call centers.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
