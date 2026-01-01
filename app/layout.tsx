import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Marketbeg",
  description: "Sälj och köp begagnat – snabbt och tryggt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
