import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Marketbeg",
  description: "Sälj och köp begagnat – tryggt, AI-stött",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <div className="app">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
