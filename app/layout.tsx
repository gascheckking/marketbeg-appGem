// --- app/layout.tsx ---
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import React, { useState } from 'react';

export const metadata: Metadata = { 
  title: "KARMA", 
  description: "Nordic Loop System" 
};

export const viewport: Viewport = { 
  width: "device-width", 
  initialScale: 1, 
  maximumScale: 1, 
  userScalable: false, 
  viewportFit: "cover" 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Client-side state för snabbmenyn (måste egentligen vara i en Client Component, 
  // men jag lägger strukturen här så du ser hur det ska se ut)
  
  return (
    <html lang="sv">
      <body style={{ background: 'var(--bg-deep)', color: '#fff', margin: 0 }}>
        <SplashScreen />
        <CookieConsent />
        
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          
          <main className="main-content" style={{ 
            flex: 1, 
            paddingBottom: '100px', 
            width: '100%', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            {children}
          </main>
          
          {/* SNABBMENY (Visas när man hovrar eller trycker på +) */}
          <div className="quick-sell-overlay">
            <a href="/sell/single" className="quick-option">📸 Enstaka prylar</a>
            <a href="/sell" className="quick-option purple-glow">⚡ Mass-skanna (1-100)</a>
          </div>

          <nav className="mobile-nav">
            <a href="/" className="mobile-tab"><span>🧭</span><small>Hem</small></a>
            <a href="/auctions" className="mobile-tab"><span>🤝</span><small>Match</small></a>
            
            <div className="mobile-tab-center-wrapper">
              <button className="mobile-tab-center">
                <span>+</span>
              </button>
            </div>
            
            <a href="/rewards" className="mobile-tab"><span>💎</span><small>Karma</small></a>
            <a href="/dashboard/seller" className="mobile-tab"><span>💰</span><small>Saldo</small></a>
          </nav>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .mobile-nav {
            display: flex; position: fixed; bottom: 0; left: 0; right: 0;
            height: calc(70px + env(safe-area-inset-bottom)); 
            background: rgba(2, 4, 10, 0.95); backdrop-filter: blur(20px);
            border-top: 1px solid rgba(255,255,255,0.05); padding: 0 10px;
            padding-bottom: env(safe-area-inset-bottom);
            align-items: center; justify-content: space-around; z-index: 1000;
          }

          .mobile-tab-center-wrapper {
            position: relative;
            z-index: 1001;
          }

          .mobile-tab-center { 
            width: 58px; height: 58px; background: var(--neon-purple); 
            border-radius: 20px; display: flex; align-items: center; 
            justify-content: center; color: #fff; font-size: 32px; 
            margin-top: -35px; border: 4px solid var(--bg-deep);
            box-shadow: 0 10px 25px rgba(157, 78, 221, 0.4);
            cursor: pointer;
          }

          /* Snabbmenyn som dyker upp */
          .quick-sell-overlay {
            position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
            display: flex; flex-direction: column; gap: 10px; z-index: 999;
            opacity: 0; pointer-events: none; transition: all 0.3s ease;
          }

          /* Visa menyn när man hovrar över center-knappen (för demo) */
          .mobile-tab-center-wrapper:hover .quick-sell-overlay,
          .mobile-tab-center:focus + .quick-sell-overlay {
            opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(-10px);
          }

          .quick-option {
            background: #111; border: 1px solid #222; color: #fff;
            padding: 12px 20px; border-radius: 12px; font-size: 12px;
            font-weight: 800; text-decoration: none; white-space: nowrap;
            text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          }

          .purple-glow {
            border: 1px solid var(--neon-purple);
            box-shadow: 0 0 15px rgba(157, 78, 221, 0.3);
          }

          .mobile-tab { 
            display: flex; flex-direction: column; align-items: center; 
            text-decoration: none; color: #555; gap: 4px; flex: 1;
          }
          .mobile-tab span { font-size: 20px; }
          .mobile-tab small { font-size: 7px; font-weight: 900; text-transform: uppercase; }
        `}} />
      </body>
    </html>
  );
}
