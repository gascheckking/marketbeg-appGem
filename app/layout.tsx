// app/layout.tsx
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "KARMA",
  description: "Snabb, trygg och intelligent marknadsplats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}