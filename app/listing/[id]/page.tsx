"use client";

export default function ListingPage({ params }: { params: { id: string } }) {
  return (
    <div className="app-shell" style={{ padding: '0 0 100px 0' }}>
      {/* Produktbild Hero */}
      <div style={{ 
        width: '100%', height: '40vh', background: '#111', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '80px', borderBottom: '1px solid var(--border)' 
      }}>
        📱
      </div>

      <div style={{ padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span className="stat-pill" style={{ fontSize: '10px' }}>ID: {params.id}</span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '10px 0' }}>iPhone 15 Pro</h1>
            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <span style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 800 }}>● NYSKICK</span>
              <span style={{ color: '#888', fontSize: '12px' }}>● STOCKHOLM</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900 }}>9 200 kr</div>
            <div style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 800 }}>LÄGSTA PRIS PÅ 30 DAGAR</div>
          </div>
        </div>

        <div className="pay-card" style={{ margin: '30px 0', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛡️</div>
            <div>
              <strong style={{ fontSize: '14px' }}>Säljare: Alex L.</strong>
              <div style={{ fontSize: '11px', color: 'var(--accent)' }}>98.2% Trust Score (BankID Verifierad)</div>
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>AI Beskrivning</h3>
        <p className="muted" style={{ lineHeight: '1.7', fontSize: '15px' }}>
          Denna iPhone 15 Pro i Titanium har genomgått vår AI-validering. Inga repor på skärmen, 100% batterihälsa. 
          Säljaren är känd för snabba leveranser.
        </p>

        {/* Action Buttons */}
        <div style={{ 
          position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
          width: '90%', maxWidth: '560px', display: 'flex', gap: '15px', zIndex: 100
        }}>
          <button className="primary-btn" style={{ flex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} onClick={() => window.location.href='/checkout'}>
            KÖP MED GARANTI
          </button>
          <button className="primary-btn" style={{ flex: 1, background: '#111', color: '#fff', border: '1px solid #333' }}>
            BUD
          </button>
        </div>
      </div>
    </div>
  );
}
