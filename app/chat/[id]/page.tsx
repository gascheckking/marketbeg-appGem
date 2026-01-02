"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '90vh' }}>
      {/* Chat Header */}
      <div className="glass-card" style={{ padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '20px', borderRadius: '24px 24px 0 0', borderBottom: 'none' }}>
        <div style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 900 }}>Erik <span style={{ color: 'var(--neon-mint)', fontSize: '10px', marginLeft: '10px', letterSpacing: '1px' }}>● VERIFIERAD SÄLJARE</span></h4>
          <small className="muted">Svarar oftast inom 5 minuter</small>
        </div>
        <button className="glass-card" style={{ padding: '10px 20px', fontSize: '12px', fontWeight: 800 }} onClick={() => router.push('/checkout')}>GÅ TILL KASSAN</button>
      </div>

      {/* Messages Area */}
      <div className="glass-card" style={{ flex: 1, borderRadius: '0', borderTop: 'none', borderBottom: 'none', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px' }}>
        <div style={{ background: 'rgba(157, 78, 221, 0.05)', padding: '20px', borderRadius: '20px', border: '1px dashed var(--neon-purple)', fontSize: '13px', textAlign: 'center', color: 'var(--neon-purple)', fontWeight: 700 }}>
          🛡️ Karma Shield Aktivt: Erik är BankID-verifierad. Betala alltid via plattformen för att behålla ditt köpskydd.
        </div>

        <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '15px 25px', borderRadius: '20px 20px 20px 4px', maxWidth: '70%', border: '1px solid var(--border)' }}>
          <p style={{ margin: 0, fontSize: '15px' }}>Hej! Kan jag hämta din iPhone 15 ikväll? Ger dig ett bra Karma-betyg efteråt! 😊</p>
        </div>

        <div style={{ alignSelf: 'flex-end', background: 'var(--neon-purple)', color: '#fff', padding: '15px 25px', borderRadius: '20px 20px 4px 20px', maxWidth: '70%', fontWeight: 600 }}>
          <p style={{ margin: 0, fontSize: '15px' }}>Absolut! Jag bjuder dessutom på Karma-frakten om du använder din välkomstbonus.</p>
        </div>
      </div>

      {/* Input Area */}
      <div className="glass-card" style={{ padding: '20px', borderRadius: '0 0 24px 24px', borderTop: 'none' }}>
        <div style={{ display: 'flex', gap: '15px', background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '18px', border: '1px solid var(--border)' }}>
          <input 
            type="text" 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv ett meddelande..." 
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', padding: '10px 20px', outline: 'none', fontSize: '15px' }}
          />
          <button className="primary-btn" style={{ padding: '10px 25px', borderRadius: '14px' }}>SKICKA</button>
        </div>
      </div>
    </div>
  );
}
