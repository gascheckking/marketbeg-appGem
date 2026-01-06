// // app/chat/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage({ params }: { params: { id: string } }) {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  
  return (
    <div className="page-wrapper" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: 'calc(100vh - 120px)', // Justerat för nya navbarens höjd
      padding: '10px' 
    }}>
      
      {/* 1. CHAT HEADER - Identitet & Handling */}
      <div className="glass-card" style={{ 
        padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '12px', 
        borderRadius: '20px', marginBottom: '15px', border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.02)'
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            width: '42px', height: '42px', 
            background: 'linear-gradient(135deg, #111, #222)', 
            borderRadius: '50%', border: '1px solid var(--neon-mint)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
          }}>👤</div>
          <div style={{ position: 'absolute', bottom: '2px', right: '2px', background: 'var(--neon-mint)', width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #000' }}></div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 900, letterSpacing: '-0.3px' }}>ERIK S.</h4>
            <span style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', background: 'rgba(0,255,136,0.1)', padding: '2px 6px', borderRadius: '5px' }}>TILLIT 98%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
             <span style={{ fontSize: '8px', opacity: 0.5, fontWeight: 800 }}>BANKID VERIFIERAD</span>
             <span style={{ fontSize: '8px', color: 'var(--neon-purple)', fontWeight: 800 }}>• AKTIV NU</span>
          </div>
        </div>

        <button 
          className="primary-btn" 
          onClick={() => router.push('/checkout')}
          style={{ 
            width: 'auto', padding: '10px 16px', fontSize: '11px', fontWeight: 900,
            background: '#fff', color: '#000', borderRadius: '12px' 
          }}
        >
          KÖP NU
        </button>
      </div>

      {/* 2. SYSTEM-MEDDELANDE (Säkerhet) */}
      <div style={{ 
        background: 'rgba(157, 78, 221, 0.05)', padding: '12px', borderRadius: '16px', 
        border: '1px solid rgba(157, 78, 221, 0.2)', textAlign: 'center', marginBottom: '20px'
      }}>
        <p style={{ margin: 0, fontSize: '10px', color: '#fff', fontWeight: 800 }}>
          🛡️ SÄKER AFFÄR AKTIVERAD
        </p>
        <p style={{ margin: '4px 0 0 0', fontSize: '9px', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
          Pengarna hålls säkert tills båda parter är nöjda.
        </p>
      </div>

      {/* 3. MESSAGES AREA */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', padding: '0 5px' }}>
        
        {/* Motpartens bubbla */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '18px 18px 18px 5px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#eee' }}>
              Tjena! AI:n matchade oss. Mina AirPods Max är redo för en smidig affär. Intresserad? ⚡
            </p>
          </div>
          <span style={{ fontSize: '8px', opacity: 0.3, fontWeight: 800, marginLeft: '5px', marginTop: '4px', display: 'block' }}>14:02</span>
        </div>

        {/* Din bubbla */}
        <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
          <div style={{ background: 'var(--neon-purple)', color: '#fff', padding: '12px 16px', borderRadius: '18px 18px 5px 18px', boxShadow: '0 4px 15px rgba(157, 78, 221, 0.2)' }}>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, fontWeight: 500 }}>
              Taget! Om skicket är Grade A+ som utlovat så kör vi. Betalar direkt via BankID.
            </p>
          </div>
          <span style={{ fontSize: '8px', opacity: 0.3, fontWeight: 800, marginRight: '5px', marginTop: '4px', display: 'block', textAlign: 'right' }}>14:05 • LÄST</span>
        </div>

      </div>

      {/* 4. INPUT AREA (Kompakt & Smal) */}
      <div style={{ padding: '15px 0 5px 0' }}>
        <div style={{ 
          display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.03)', 
          padding: '8px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)',
          alignItems: 'center'
        }}>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', padding: '0 5px' }}>📸</button>
          <input 
            type="text" 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv ett meddelande..." 
            style={{ 
              flex: 1, background: 'none', border: 'none', color: '#fff', 
              padding: '8px 5px', outline: 'none', fontSize: '14px', fontWeight: 500 
            }}
          />
          <button 
            style={{ 
              background: 'var(--neon-purple)', border: 'none', color: '#fff', 
              width: '35px', height: '35px', borderRadius: '50%', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', fontWeight: 900 
            }}
          >
            ↑
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: '8px', opacity: 0.3, marginTop: '10px', fontWeight: 800, letterSpacing: '0.5px' }}>
          TÄNK PÅ ATT HÅLLA EN GOD TON I LOOPEN.
        </p>
      </div>

      <style jsx>{`
        .page-wrapper {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
