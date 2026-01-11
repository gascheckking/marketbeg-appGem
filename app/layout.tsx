// // app/layout.tsx
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Karma",
  description: "Circular Economy Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
