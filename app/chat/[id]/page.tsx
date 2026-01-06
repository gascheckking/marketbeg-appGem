// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', padding: '10px' }}>
      
      {/* CHAT HEADER - Mer kompakt */}
      <div className="glass-card" style={{ 
        padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', 
        borderRadius: '16px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(45deg, var(--neon-purple), var(--neon-mint))', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--neon-mint)', width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #000' }}></div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 900 }}>ERIK S.</h4>
            <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.1)', padding: '1px 5px', borderRadius: '4px' }}>98% MATCH</span>
          </div>
          <small style={{ fontSize: '8px', opacity: 0.4, fontWeight: 800 }}>VERIFIERAD • BANKID</small>
        </div>

        <button 
          className="primary-btn" 
          onClick={() => router.push('/checkout')}
          style={{ width: 'auto', padding: '8px 14px', fontSize: '10px', background: 'var(--neon-mint)', color: '#000', borderRadius: '8px' }}
        >
          KÖP NU
        </button>
      </div>

      {/* MESSAGES AREA */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', padding: '5px' }}>
        
        <div style={{ 
          background: 'rgba(157, 78, 221, 0.05)', padding: '10px', borderRadius: '12px', 
          border: '1px dashed rgba(157, 78, 221, 0.2)', textAlign: 'center' 
        }}>
          <p style={{ margin: 0, fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 900, letterSpacing: '0.5px' }}>
            🛡️ KARMA SHIELD AKTIVERAT (ESCROW)
          </p>
        </div>

        <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', maxWidth: '85%', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.4 }}>
            Tjena! AI:n matchade oss. Mina AirPods Max är redo för snabb affär ⚡
          </p>
        </div>

        <div style={{ alignSelf: 'flex-end', background: 'var(--neon-purple)', color: '#fff', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', maxWidth: '85%' }}>
          <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.4, fontWeight: 500 }}>
            Taget! Om skicket är Grade A+ tar jag dem direkt.
          </p>
        </div>
      </div>

      {/* INPUT AREA */}
      <div style={{ padding: '10px 0' }}>
        <div style={{ 
          display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.02)', 
          padding: '6px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' 
        }}>
          <input 
            type="text" 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv..." 
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', padding: '6px 10px', outline: 'none', fontSize: '13px' }}
          />
          <button className="primary-btn" style={{ width: '36px', height: '36px', borderRadius: '10px', padding: 0 }}>➔</button>
        </div>
      </div>
    </div>
  );
}
