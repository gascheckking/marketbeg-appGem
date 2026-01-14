// // app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: '#000' }}>
        <div style={{ maxWidth: '450px', margin: '0 auto', minHeight: '100vh', borderLeft: '1px solid #111', borderRight: '1px solid #111' }}>
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  )
}
