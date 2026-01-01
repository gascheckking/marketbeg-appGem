"use client";

export default function Admin() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <header style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h1 className="logo">SYSTEM <span className="ai-text">CONTROL</span></h1>
        <p className="muted" style={{ fontSize: '12px' }}>Realtidsövervakning av nordiska noder.</p>
      </header>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        <div className="glow-card" style={{ background: '#000', padding: '30px' }}>
          <span className="muted" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Volym (24h)</span>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', marginTop: '5px' }}>
            1.254.800 <span style={{ fontSize: '1rem', color: 'var(--accent)' }}>SEK</span>
          </div>
        </div>
        
        <div style={{ 
          background: '#0a0a0a', 
          padding: '25px', 
          borderRadius: '32px', 
          border: '1px solid #1a1a1a',
          fontFamily: 'monospace'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontSize: '14px', color: 'var(--accent)' }}>LIVE_TRANSACTION_FEED</h3>
            <div className="pulse-dot"></div>
          </div>
          
          <div style={{ fontSize: '12px', display: 'grid', gap: '10px', color: '#ccc' }}>
            <p style={{ margin: 0, paddingBottom: '8px', borderBottom: '1px solid #111' }}>
              <span style={{ color: '#555' }}>[20:54]</span> <span style={{ color: 'var(--swish)' }}>SE:</span> iPhone 15 {"->"} <span style={{ color: 'var(--accent)' }}>SÅLD</span> (Swish)
            </p>
            <p style={{ margin: 0, paddingBottom: '8px', borderBottom: '1px solid #111' }}>
              <span style={{ color: '#555' }}>[20:52]</span> <span style={{ color: 'var(--vipps)' }}>NO:</span> Rolex Sub {"->"} <span style={{ color: '#007aff' }}>VERIFIERAD</span> (BankID)
            </p>
            <p style={{ margin: 0, paddingBottom: '8px', borderBottom: '1px solid #111' }}>
              <span style={{ color: '#555' }}>[20:50]</span> <span style={{ color: '#fff'
