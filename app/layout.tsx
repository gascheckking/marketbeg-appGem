// // app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: '#000' }}>
        <main>{children}</main>
      </body>
    </html>
  )
}
