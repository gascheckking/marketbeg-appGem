"use client";
import React, { useState } from 'react';

export default function SellPage() {
  return (
    <div style={{ padding: '60px', width: '100%' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '10px', letterSpacing: '-2px' }}>Skapa Annons</h1>
      <p className="muted" style={{ marginBottom: '40px' }}>Ladda upp en bild, vår AI sköter rubrik och beskrivning.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Upload Box */}
        <div className="glass-card" style={{ 
          height: '450px', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', border: '2px dashed rgba(157, 78, 221, 0.3)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '60px' }}>📸</div>
          <p style={{ marginTop: '20px', fontWeight: 700 }}>Klicka för att fota eller välja fil</p>
          <p className="muted" style={{ fontSize: '12px' }}>Max 10MB (JPG, PNG)</p>
        </div>

        {/* AI Estimation Panel */}
        <div className="glass-card" style={{ background: 'rgba(0,255,136,0.02)' }}>
          <h3 style={{ color: '#00ff88', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>🤖</span> AI Värderings-prognos
          </h3>
          
          <div style={{ marginTop: '40px' }}>
            <p className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>ESTIMERAT PRIS</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }}>4 500 - 5 200 kr</div>
            <p className="success-text" style={{ fontSize: '12px', color: '#00ff88' }}>● Baserat på 14 liknande försäljningar i år</p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <p className="muted" style={{ fontSize: '10px', fontWeight: 800 }}>EFTERFRÅGAN</p>
            <div style={{ color: '#9d4edd', fontWeight: 900, fontSize: '1.5rem' }}>MYCKET HÖG (94%)</div>
          </div>

          <button className="primary-btn" style={{ width: '100%', marginTop: '60px' }}>
            PUBLICERA NU 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
