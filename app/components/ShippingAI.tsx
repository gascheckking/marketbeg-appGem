"use client";

export default function ShippingAI({ itemWeight }: { itemWeight: string }) {
  return (
    <div style={{ 
      background: 'rgba(157, 78, 221, 0.05)', 
      padding: '30px', 
      borderRadius: '32px', 
      border: '1px solid rgba(157, 78, 221, 0.2)', 
      marginTop: '25px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{ width: '8px', height: '8px', background: '#9d4edd', borderRadius: '50%' }}></div>
        <strong style={{ color: '#9d4edd', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Karma Logistics</strong>
      </div>

      <p style={{ fontSize: '15px', color: '#ccc', marginBottom: '25px' }}>
        Vi har hittat de smidigaste sätten att skicka din vara:
      </p>

      <div style={{ display: 'grid', gap: '15px' }}>
        <button className="glow-card" style={{ padding: '20px', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <div>
            <span style={{ display: 'block', fontWeight: 700 }}>📦 Skåp-till-skåp</span>
            <small className="muted">Billigast & Klimatsmart</small>
          </div>
          <strong style={{ color: '#00ff88' }}>49 kr</strong>
        </button>

        <button className="glow-card" style={{ padding: '20px', background: 'rgba(157, 78, 221, 0.1)', border: '1px solid #9d4edd', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <div>
            <span style={{ display: 'block', fontWeight: 700 }}>⚡ Karma Express</span>
            <small style={{ color: '#9d4edd', fontWeight: 'bold' }}>Hämtas vid dörren</small>
          </div>
          <strong style={{ color: '#9d4edd' }}>79 kr</strong>
        </button>
      </div>
    </div>
  );
}
