"use client";
import { useState } from "react";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  
  return (
    <div className="main-container" style={{display: 'flex', flexDirection: 'column', height: '90vh'}}>
      <div className="chat-header" style={{padding: '20px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', gap: '15px'}}>
        <div style={{width: '40px', height: '40px', background: '#333', borderRadius: '50%'}}></div>
        <div>
          <h4 style={{margin: 0}}>Erik (99% Trust)</h4>
          <small style={{color: 'var(--accent)'}}>Svarar vanligtvis inom 5 min</small>
        </div>
      </div>

      <div className="chat-messages" style={{flex: 1, padding: '20px', overflowY: 'auto'}}>
        <div className="msg-ai" style={{background: 'rgba(0, 255, 136, 0.1)', padding: '15px', borderRadius: '15px', marginBottom: '20px', border: '1px solid var(--accent)'}}>
          🤖 <strong>BegAI Assist:</strong> Jag har verifierat att Erik har varan hemma. Ni kan tryggt genomföra köpet via vår escrow-tjänst.
        </div>
        <div className="msg-them" style={{background: '#222', padding: '12px', borderRadius: '15px', maxWidth: '80%', marginBottom: '10px'}}>
          Hej! Är priset prutbart vid snabb affär?
        </div>
      </div>

      <div className="chat-input" style={{padding: '20px', background: '#000', borderTop: '1px solid #222', display: 'flex', gap: '10px'}}>
        <input 
          type="text" 
          placeholder="Skriv meddelande..." 
          style={{flex: 1, background: '#111', border: '1px solid #333', color: '#fff', padding: '15px', borderRadius: '12px'}}
        />
        <button style={{background: 'var(--accent)', border: 'none', padding: '15px 25px', borderRadius: '12px', fontWeight: 900}}>SKICKA</button>
      </div>
    </div>
  );
}
