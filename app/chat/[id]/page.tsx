"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="web-container">
      <div className="content-wrapper" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Chat Header */}
        <div style={{ padding: '30px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, #5e2583, #9d4edd)', borderRadius: '50%' }}></div>
          <div>
            <h4 style={{ margin: 0, fontSize: '18px' }}>Erik <span style={{ color: '#9d4edd', fontSize: '12px', marginLeft: '10px' }}>● KARMA LINK VERIFIERAD</span></h4>
            <small className="muted">Topprankad säljare i din stad</small>
          </div>
        </div>

        {/* Messages Area */}
        <div style={{ flex: 1, padding: '30px 0', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'rgba(157, 78, 221, 0.05)', padding: '20px', borderRadius: '24px', border: '1px dashed #9d4edd', fontSize: '14px', textAlign: 'center' }}>
            🛡️ <strong>Karma Shield:</strong> Erik är BankID-verifierad. Du kan tryggt använda vår fraktlösning för denna affär.
          </div>

          <div style={{ alignSelf: 'flex-start', background: 'var(--glass)', padding: '15px 25px', borderRadius: '24px 24px 24px 4px', maxWidth: '70%' }}>
            <p style={{ margin: 0 }}>Hej! Kan jag hämta den ikväll? Ger dig ett bra Karma-betyg efteråt! 😊</p>
          </div>

          <div style={{ alignSelf: 'flex-end', background: '#fff', color: '#000', padding: '15px 25px', borderRadius: '24px 24px 4px 24px', maxWidth: '70%', fontWeight: 600 }}>
            <p style={{ margin: 0 }}>Absolut! Jag bjuder dessutom på Karma-frakten om du använder dina poäng.</p>
          </div>
        </div>

        {/* Input Area */}
        <div style={{ padding: '20px 0 40px 0' }}>
          <div style={{ display: 'flex', gap: '10px', background: '#111', padding: '10px', borderRadius: '20px', border: '1px solid #222' }}>
            <input 
              type="text" 
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Skriv till Erik..." 
              style={{ flex: 1, background: 'none', border: 'none', color: '#fff', padding: '10px 20px', outline: 'none', fontSize: '16px' }}
            />
            <button style={{ background: '#9d4edd', border: 'none', color: '#fff', padding: '10px 25px', borderRadius: '14px', fontWeight: 700, cursor: 'pointer' }}>SKICKA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
