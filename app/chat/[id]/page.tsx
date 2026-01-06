// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', padding: '15px' }}>
      
      {/* HEADER - Fokus på person, inte teknik */}
      <div style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ width: '45px', height: '45px', background: '#111', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>👤</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 900 }}>ERIK S.</h4>
            <span style={{ fontSize: '9px', color: 'var(--neon-mint)', fontWeight: 900 }}>92% TILLIT</span>
          </div>
          <small style={{ fontSize: '8px', opacity: 0.4, fontWeight: 800 }}>BANKID VERIFIERAD • STOCKHOLM</small>
        </div>
        <button onClick={() => router.push('/checkout')} style={{ background: '#fff', color: '#000', border: 'none', padding: '10px 18px', borderRadius: '12px', fontSize: '11px', fontWeight: 900 }}>KÖP NU</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 0' }}>
        {/* Systemmeddelande - Låst Copy */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '15px', textAlign: 'center', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ margin: 0, fontSize: '9px', fontWeight: 800, opacity: 0.6 }}>
            🛡️ DIN BETALNING ÄR SÄKER. Pengarna hålls i escrow tills ni båda har bekräftat att affären är klar.
          </p>
        </div>
        
        <div className="bubble-them">Tjena! Redo för snabb affär? ⚡</div>
        <div className="bubble-me">Absolut, kör vi!</div>
      </div>

      <div style={{ display: 'flex', gap: '10px', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Skriv ett meddelande..." style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '18px', padding: '15px', color: '#fff', fontSize: '13px' }} />
        <button style={{ width: '50px', background: 'var(--neon-purple)', border: 'none', borderRadius: '18px', color: '#fff', fontSize: '18px' }}>➔</button>
      </div>

      <style jsx>{`
        .bubble-them { align-self: flex-start; background: rgba(255,255,255,0.05); padding: 14px; border-radius: 20px 20px 20px 5px; font-size: 13px; font-weight: 500; margin-bottom: 12px; max-width: 80%; }
        .bubble-me { align-self: flex-end; background: var(--neon-purple); padding: 14px; border-radius: 20px 20px 5px 20px; font-size: 13px; font-weight: 500; margin-bottom: 12px; max-width: 80%; margin-left: auto; }
      `}</style>
    </div>
  );
}
