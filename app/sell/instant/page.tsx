"use client";
import { useState } from "react";

export default function AISellPage() {
  const [mode, setMode] = useState("single"); 
  const [bulkPrice, setBulkPrice] = useState(50);
  const [minPurchase, setMinPurchase] = useState(150);

  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px' }}>Sälj med AI</h1>
      
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <button 
          onClick={() => setMode("single")}
          className="glass-card" 
          style={{ flex: 1, border: mode === "single" ? '2px solid var(--neon-mint)' : '1px solid var(--border)', cursor: 'pointer' }}
        >
          📸 <strong>Enskilt objekt</strong>
        </button>
        <button 
          onClick={() => setMode("bulk")}
          className="glass-card" 
          style={{ flex: 1, border: mode === "bulk" ? '2px solid var(--neon-mint)' : '1px solid var(--border)', cursor: 'pointer' }}
        >
          📦 <strong>Bulk-loopen</strong>
        </button>
      </div>

      <div className="glass-card" style={{ padding: '40px', textAlign: 'center', marginBottom: '30px', border: '2px dashed #333' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>📸</div>
        <p style={{ fontWeight: 800 }}>Fota din vara — AI fixar resten</p>
        <button className="primary-btn" style={{ marginTop: '20px' }}>ÖPPNA KAMERA</button>
      </div>

      <div className="glass-card">
        <h3 style={{ marginBottom: '20px' }}>{mode === "single" ? "Objektsdetaljer" : "Bulk-inställningar"}</h3>
        
        {mode === "bulk" && (
          <div style={{ marginBottom: '30px', padding: '20px', background: 'rgba(0,255,136,0.05)', borderRadius: '15px' }}>
            <label style={{ display: 'block', fontWeight: 900, marginBottom: '10px' }}>PRIS PER ARTIKEL: {bulkPrice} kr</label>
            <input 
              type="range" min="10" max="1000" step="10" 
              value={bulkPrice} 
              onChange={(e) => setBulkPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--neon-mint)', marginBottom: '20px' }}
            />
            
            <label style={{ display: 'block', fontWeight: 900, marginBottom: '10px' }}>KÖP MINST FÖR: {minPurchase} kr</label>
            <input 
              type="range" min="50" max="2000" step="50" 
              value={minPurchase} 
              onChange={(e) => setMinPurchase(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--neon-purple)' }}
            />
            <p className="muted" style={{ fontSize: '11px', marginTop: '10px' }}>Hjälper till att täcka fraktkostnader vid låga styckpris.</p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label className="muted" style={{ fontSize: '12px', fontWeight: 800 }}>RUBRIK (MANUELL)</label>
            <input type="text" placeholder="T.ex. Nike Air Max" style={{ width: '100%', padding: '15px', borderRadius: '12px', background: '#000', border: '1px solid var(--border)', color: '#fff', marginTop: '5px' }} />
          </div>
          <div>
            <label className="muted" style={{ fontSize: '12px', fontWeight: 800 }}>KATEGORI</label>
            <select style={{ width: '100%', padding: '15px', borderRadius: '12px', background: '#000', border: '1px solid var(--border)', color: '#fff', marginTop: '5px' }}>
              <option>Välj automatiskt (AI)</option>
              <option>Elektronik</option>
              <option>Mode</option>
              <option>Samlarobjekt</option>
            </select>
          </div>
        </div>

        <button className="primary-btn" style={{ width: '100%', marginTop: '30px' }}>PUBLICERA ANNONSER</button>
      </div>
    </div>
  );
}
