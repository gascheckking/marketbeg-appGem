// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body
        style={{
          background: "#02040a",
          color: "#fff",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}