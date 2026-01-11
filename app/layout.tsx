// // app/layout.tsx
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karma | Circular Economy",
  description: "Din cirkulära ekonomi, verifierad.",
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
