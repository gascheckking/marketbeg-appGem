import "../styles/globals.css";

export const metadata = {
  title: "Marketbeg",
  description: "Köp & sälj begagnat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
