"use client";

export default function ShippingAI({ itemWeight }: { itemWeight: string }) {
  return (
    <div style={{ 
      background: 'rgba(255,255,255,0.02)', 
      padding: '25px', 
      borderRadius: '32px', 
      border: '1px solid var(--border)', 
      marginTop: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div className="pulse-dot" style={{ background: 'var(--accent)' }}></div>
        <strong style={{ color: 'var(--accent)', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>AI Logistics Engine</strong>
      </div>

      <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '25px', lineHeight: '1.6' }}>
        Baserat på vikt ({itemWeight}) och din position föreslår jag följande optimerade rutter:
      </p>

      <div style={{ display: 'grid', gap: '12px' }}>
        <button className="pay-card" style={{ 
          width: '100%', 
          margin: 0, 
          background: '#0a0a0a', 
          border: '1px solid #222',
          textAlign: 'left',
          padding: '18px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontWeight: 700 }}>📦 Instabox</span>
              <small className="muted">Närmaste box: 200m bort</small>
            </div>
            <strong style={{ color: 'var(--accent)' }}>49 kr</strong>
          </div>
        </button>

        <button className="pay-card" style={{ 
          width: '100%', 
          margin: 0, 
          background: 'rgba(0,255,136,0.05)', 
          border: '1px solid var(--accent)',
          textAlign: 'left',
          padding: '18px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'block', fontWeight: 700 }}>⚡ BegRunner</span>
              <small style={{ color: 'var(--accent)', fontSize: '10px' }}>AI-REKOMMENDERAD</small>
            </div>
            <strong style={{ color: 'var(--accent)' }}>79 kr</strong>
          </div>
        </button>
      </div>
      
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <small className="muted" style={{ fontSize: '10px' }}>CO2-optimerad frakt beräknad av MarketBeg AI</small>
      </div>
    </div>
  );
}
