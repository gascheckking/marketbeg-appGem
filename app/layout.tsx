import type { Metadata, Viewport } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";

export const metadata: Metadata = { title: "KARMA", description: "Nordic Loop System" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0 }}>
        <SplashScreen />
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <main className="main-content" style={{ flex: 1, paddingBottom: '90px', width: '100%', maxWidth: '450px', margin: '0 auto' }}>
            {children}
          </main>
          
          <nav className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            <a href="/sell" className="mobile-tab-center"><span>+</span></a>
            <a href="/my-karma" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Saldo</small></a>
          </nav>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            height: calc(60px + env(safe-area-inset-bottom));
            background: rgba(2, 4, 10, 0.9); backdrop-filter: blur(20px);
            border-top: 1px solid var(--border); padding-bottom: env(safe-area-inset-bottom); z-index: 1000;
          }
          .mobile-tab { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: #555; flex: 1; justify-content: center; }
          .mobile-tab span { font-size: 18px; }
          .mobile-tab small { font-size: 8px; font-weight: 800; text-transform: uppercase; margin-top: 2px; }
          .mobile-tab-center { 
            width: 48px; height: 48px; background: var(--neon-purple); border-radius: 14px; 
            display: flex; align-items: center; justify-content: center; color: #fff; 
            font-size: 24px; text-decoration: none; margin-top: -15px; border: 3px solid var(--bg-deep);
          }
        `}} />
      </body>
    </html>
  );
}
