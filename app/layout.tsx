import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'KYM DYNEXIS SOLUTIONS - Smart Electric Scooters for Modern India',
  description: 'KYM DYNEXIS SOLUTIONS offers powerful performance, stylish design, and eco-friendly rides. Experience the future of electric mobility in India with our premium electric scooters.',
  keywords: ['electric scooter', 'EV', 'KYM DYNEXIS SOLUTIONS', 'electric vehicle', 'eco-friendly', 'India', 'sustainable transport'],
  authors: [{ name: 'KYM DYNEXIS SOLUTIONS' }],
  openGraph: {
    title: 'KYM DYNEXIS SOLUTIONS - Go Electric. Go Green.',
    description: 'Smart Electric Scooters for Modern India. Powerful performance, stylish design, and eco-friendly rides.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#39FF14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
