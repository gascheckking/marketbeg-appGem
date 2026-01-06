// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', padding: '10px' }}>
      
      {/* HEADER */}
      <div style={{ padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', marginBottom: '15px' }}>
        <div style={{ width: '40px', height: '40px', background: '#222', borderRadius: '50%', border: '1px solid var(--neon-mint)' }}></div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: '5px' }}><h4 style={{ margin: 0, fontSize: '13px' }}>ERIK S.</h4><span style={{ fontSize: '8px', color: 'var(--neon-mint)' }}>TILLIT 92%</span></div>
          <small style={{ fontSize: '8px', opacity: 0.4 }}>BANKID VERIFIERAD</small>
        </div>
        <button onClick={() => router.push('/checkout')} style={{ background: '#fff', color: '#000', border: 'none', padding: '8px 15px', borderRadius: '10px', fontSize: '10px', fontWeight: 900 }}>KÖP NU</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        <div style={{ background: 'rgba(157, 78, 221, 0.05)', padding: '10px', borderRadius: '12px', textAlign: 'center', marginBottom: '15px', border: '1px dashed var(--neon-purple)' }}>
          <p style={{ margin: 0, fontSize: '9px', fontWeight: 900 }}>🛡️ SÄKER AFFÄR. Pengar hålls tills båda är nöjda.</p>
        </div>
        
        <div className="bubble-them">Tjena! Redo för snabb affär? ⚡</div>
        <div className="bubble-me">Absolut, kör vi!</div>
      </div>

      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Skriv..." style={{ flex: 1, background: '#111', border: 'none', borderRadius: '15px', padding: '12px', color: '#fff' }} />
        <button className="send-btn">➔</button>
      </div>

      <style jsx>{`
        .bubble-them { align-self: flex-start; background: #222; padding: 12px; borderRadius: 15px 15px 15px 5px; font-size: 13px; margin-bottom: 10px; max-width: 80%; }
        .bubble-me { align-self: flex-end; background: var(--neon-purple); padding: 12px; borderRadius: 15px 15px 5px 15px; font-size: 13px; margin-bottom: 10px; max-width: 80%; margin-left: auto; }
        .send-btn { width: 45px; background: var(--neon-purple); border: none; border-radius: 15px; color: #fff; }
      `}</style>
    </div>
  );
}
