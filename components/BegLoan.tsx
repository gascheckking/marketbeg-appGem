"use client";

export default function BegLoan({ price }: { price: number }) {
  return (
    <div className="glow-card" style={{ 
      marginTop: '20px', padding: '25px', borderRadius: '24px', 
      background: 'linear-gradient(135deg, #000 0%, #051005 100%)',
      border: '1px solid rgba(0,255,136,0.3)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong style={{ color: 'var(--accent)' }}>BegAI Instant Loan</strong>
          <p className="muted" style={{ fontSize: '12px', margin: '5px 0' }}>Baserat på din Trust Score (98.2%) kan du låna:</p>
        </div>
        <span style={{ fontSize: '24px' }}>🏦</span>
      </div>
      
      <div style={{ fontSize: '24px', fontWeight: 900, margin: '15px 0' }}>
        {price} kr <span style={{ fontSize: '12px', color: 'var(--accent)' }}>0% RÄNTA</span>
      </div>
      
      <button className="primary-btn" style={{ width: '100%', padding: '12px', fontSize: '14px' }}>
        ANSÖK PÅ 1 SEKUND
      </button>
    </div>
  );
}
