"use client";
import { useState } from "react";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  
  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Chat Header */}
      <div style={{ padding: '30px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>
        <div style={{ width: '45px', height: '45px', background: 'linear-gradient(45deg, #222, #444)', borderRadius: '50%', border: '1px solid var(--accent)' }}></div>
        <div>
          <h4 style={{ margin: 0, fontSize: '16px' }}>Erik <span style={{ color: 'var(--accent)', fontSize: '10px', marginLeft: '5px' }}>● 99% TRUST</span></h4>
          <small className="muted">Svarar vanligtvis inom 5 min</small>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ 
          background: 'rgba(0, 255, 136, 0.05)', 
          padding: '20px', 
          borderRadius: '24px', 
          border: '1px dashed var(--accent)',
          fontSize: '13px',
          lineHeight: '1.5'
        }}>
          🤖 <strong>BegAI Assist:</strong> Jag har skannat Eriks historik och verifierat varans metadata. Ni kan tryggt använda vår Escrow-tjänst för denna affär.
        </div>

        <div style={{ alignSelf: 'flex-start', background: 'var(--glass)', padding: '15px 20px', borderRadius: '20px 20px 20px 4px', maxWidth: '80%', border: '1px solid var(--border)' }}>
          <p style={{ margin: 0, fontSize: '15px' }}>Hej! Är priset prutbart vid snabb affär? Kan hämta ikväll.</p>
        </div>

        <div style={{ alignSelf: 'flex-end', background: 'var(--accent)', color: '#000', padding: '15px 20px', borderRadius: '20px 20px 4px 20px', maxWidth: '80%', fontWeight: 600 }}>
          <p style={{ margin: 0, fontSize: '15px' }}>Hej Erik! Priset är fast men jag bjuder på BegRunner-frakten!</p>
        </div>
      </div>

      {/* Input Area */}
      <div style={{ padding: '20px 20px 40px 20px', background: '#000', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Skriv meddelande..." 
            style={{ flex: 1, background: '#111', border: '1px solid #222', color: '#fff', padding: '18px', borderRadius: '16px', outline: 'none' }}
          />
          <button style={{ background: 'var(--accent)', border: 'none', width: '60px', borderRadius: '16px', fontSize: '20px', cursor: 'pointer' }}>🚀</button>
        </div>
      </div>
    </div>
  );
}
