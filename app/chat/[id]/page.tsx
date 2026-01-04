// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)', padding: '10px 15px' }}>
      
      {/* CHAT HEADER */}
      <div className="glass-card" style={{ 
        padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', 
        borderRadius: '20px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '42px', height: '42px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--neon-mint)', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #000' }}></div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 900 }}>Erik S.</h4>
            <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.1)', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.5px' }}>98% MATCH</span>
          </div>
          <small style={{ fontSize: '9px', opacity: 0.5, fontWeight: 800 }}>VERIFIERAD SÄLJARE • BANKID</small>
        </div>

        <button 
          className="primary-btn" 
          onClick={() => router.push('/checkout')}
          style={{ width: 'auto', padding: '10px 16px', fontSize: '10px', background: 'var(--neon-mint)', color: '#000' }}
        >
          KÖP NU
        </button>
      </div>

      {/* MESSAGES AREA */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px 5px' }}>
        
        <div style={{ 
          background: 'rgba(157, 78, 221, 0.05)', padding: '12px', borderRadius: '15px', 
          border: '1px dashed rgba(157, 78, 221, 0.2)', textAlign: 'center' 
        }}>
          <p style={{ margin: 0, fontSize: '9px', color: 'var(--neon-purple)', fontWeight: 900 }}>
            🛡️ KARMA SHIELD AKTIVERAT <br/>
            <span style={{ opacity: 0.6, fontWeight: 600 }}>Betala i chatten för att aktivera ditt 100% köpskydd.</span>
          </p>
        </div>

        {/* Inkommande */}
        <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '18px 18px 18px 4px', maxWidth: '85%', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Tjena! AI:n sa att vi har en 98% match på mina AirPods Max. Intresserad av en snabb affär? ⚡
          </p>
          <small style={{ fontSize: '8px', opacity: 0.3, marginTop: '6px', display: 'block' }}>14:02</small>
        </div>

        {/* Utgående */}
        <div style={{ alignSelf: 'flex-end', background: 'var(--neon-purple)', color: '#fff', padding: '12px 16px', borderRadius: '18px 18px 4px 18px', maxWidth: '85%' }}>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, fontWeight: 500 }}>
            Absolut! Om skicket är Grade A+ som i skanningen så tar jag dem direkt. Kan du skicka idag?
          </p>
          <small style={{ fontSize: '8px', opacity: 0.7, marginTop: '6px', display: 'block', textAlign: 'right' }}>14:05</small>
        </div>
      </div>

      {/* INPUT AREA */}
      <div style={{ padding: '15px 0' }}>
        <div style={{ 
          display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.02)', 
          padding: '8px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.05)' 
        }}>
          <input 
            type="text" 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv meddelande..." 
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', padding: '8px 12px', outline: 'none', fontSize: '14px' }}
          />
          <button className="primary-btn" style={{ width: '42px', height: '42px', borderRadius: '14px', padding: 0 }}>➔</button>
        </div>
      </div>
    </div>
  );
}
