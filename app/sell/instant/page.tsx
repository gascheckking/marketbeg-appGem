"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Vi flyttar din logik till en intern komponent
function AISellForm() {
  const searchParams = useSearchParams();
  const isAgainMode = searchParams.get("source") === "history";
  
  const [mode, setMode] = useState("single");
  const [bulkPrice, setBulkPrice] = useState(50);
  const [minPurchase, setMinPurchase] = useState(150);
  
  const [listingData, setListingData] = useState({
    title: isAgainMode ? "iPad Air (4th Gen)" : "",
    category: isAgainMode ? "Elektronik" : "Välj automatiskt (AI)",
    price: isAgainMode ? "2 950" : "",
    condition: isAgainMode ? "Bra (använd sedan förra loopen)" : "Nyskick"
  });

  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-3px' }}>
          {isAgainMode ? "Loopa Igen" : "Snabbsälj med AI"}
        </h1>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <span className="stat-pill" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>
            K.A.R.M.A. PROTOCOL: {isAgainMode ? "REUSE MODE" : "KNOW MODE"}
          </span>
          {isAgainMode && <span className="stat-pill" style={{ borderColor: 'var(--neon-mint)', color: 'var(--neon-mint)' }}>✨ DATA ÅTERSTÄLLD</span>}
        </div>
      </header>
      
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <button 
          onClick={() => setMode("single")}
          className="glass-card" 
          style={{ flex: 1, border: mode === "single" ? '2px solid var(--neon-mint)' : '1px solid var(--border)', cursor: 'pointer', transition: '0.3s' }}
        >
          📸 <strong>{isAgainMode ? "Verifiera Objekt" : "Enskilt objekt"}</strong>
        </button>
        {!isAgainMode && (
          <button 
            onClick={() => setMode("bulk")}
            className="glass-card" 
            style={{ flex: 1, border: mode === "bulk" ? '2px solid var(--neon-mint)' : '1px solid var(--border)', cursor: 'pointer', transition: '0.3s' }}
          >
            📦 <strong>Bulk-loopen</strong>
          </button>
        )}
      </div>

      <div className="glass-card" style={{ padding: '40px', textAlign: 'center', marginBottom: '30px', border: isAgainMode ? '2px solid var(--neon-purple)' : '2px dashed #333', background: isAgainMode ? 'rgba(157, 78, 221, 0.05)' : 'transparent' }}>
        {isAgainMode ? (
          <div>
            <div style={{ fontSize: '50px' }}>📱</div>
            <p style={{ fontWeight: 800, marginTop: '15px' }}>Vi använder dina tidigare bilder.</p>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>📸</div>
            <p style={{ fontWeight: 800 }}>Fota din vara — AI fixar resten</p>
          </div>
        )}
        <button className="primary-btn" style={{ marginTop: '20px' }}>
          {isAgainMode ? "LÄGG TILL NY BILD" : "ÖPPNA KAMERA"}
        </button>
      </div>

      <div className="glass-card">
        <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>📋 Annonsdetaljer</span>
          {isAgainMode && <small style={{ fontSize: '10px', background: 'var(--neon-purple)', padding: '2px 8px', borderRadius: '10px' }}>AUTO-FYLLD</small>}
        </h3>
        
        {mode === "bulk" && (
          <div style={{ marginBottom: '30px', padding: '25px', background: 'rgba(0,255,136,0.05)', borderRadius: '20px', border: '1px solid rgba(0,255,136,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <label style={{ fontWeight: 900 }}>PRIS PER ARTIKEL: <span style={{ color: 'var(--neon-mint)' }}>{bulkPrice} kr</span></label>
            </div>
            <input 
              type="range" min="10" max="1000" step="10" 
              value={bulkPrice} 
              onChange={(e) => setBulkPrice(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--neon-mint)', cursor: 'pointer' }}
            />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div>
            <label className="muted" style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}>RUBRIK</label>
            <input 
              type="text" 
              value={listingData.title}
              onChange={(e) => setListingData({...listingData, title: e.target.value})}
              style={{ width: '100%', padding: '15px', borderRadius: '12px', background: '#080808', border: '1px solid var(--border)', color: '#fff', marginTop: '8px' }} 
            />
          </div>
          <div>
            <label className="muted" style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1px' }}>PRIS (KR)</label>
            <input 
              type="number" 
              value={listingData.price}
              style={{ width: '100%', padding: '15px', borderRadius: '12px', background: '#080808', border: '1px solid var(--border)', color: 'var(--neon-mint)', fontWeight: 800, marginTop: '8px' }} 
            />
          </div>
        </div>

        <button className="primary-btn" style={{ width: '100%', marginTop: '40px', background: isAgainMode ? 'var(--neon-purple)' : 'var(--neon-mint)', color: isAgainMode ? '#fff' : '#000' }}>
          {isAgainMode ? "SLUUTFÖR ÅTERLISTNING" : "PUBLICERA ANNONSER"}
        </button>
      </div>
    </div>
  );
}

// Huvudexporten som omsluter allt i Suspense
export default function AISellPage() {
  return (
    <Suspense fallback={<div className="page-wrapper">Initialiserar K.A.R.M.A Protocol...</div>}>
      <AISellForm />
    </Suspense>
  );
}
