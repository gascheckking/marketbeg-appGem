"use client";

export default function BegLoan({ price }: { price: number }) {
  return (
    <div className="glow-card" style={{ 
      marginTop: '25px', padding: '30px', borderRadius: '32px', 
      background: 'linear-gradient(145deg, #050505 0%, #0a1510 100%)',
      border: '1px solid rgba(0, 255, 136, 0.15)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ 
            fontSize: '10px', fontWeight: 900, color: 'var(--neon-mint)', 
            letterSpacing: '2px', marginBottom: '8px', textTransform: 'uppercase' 
          }}>
            Liquidity Engine
          </div>
          <strong style={{ fontSize: '1.2rem', color: '#fff' }}>BegAI Instant Loan</strong>
          <p className="muted" style={{ fontSize: '12px', marginTop: '6px' }}>
            Baserat på din **98.2% Trust Score** kan du låna:
          </p>
        </div>
        <div style={{ 
          width: '50px', height: '50px', background: 'rgba(0,255,136,0.05)', 
          borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' 
        }}>
          🏦
        </div>
      </div>
      
      <div style={{ margin: '25px 0' }}>
        <div style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>
          {price.toLocaleString('sv-SE')} kr
        </div>
        <div style={{ 
          display: 'inline-block', padding: '4px 10px', background: 'rgba(0,255,136,0.1)', 
          borderRadius: '8px', fontSize: '11px', color: 'var(--neon-mint)', fontWeight: 900, marginTop: '5px' 
        }}>
          0% RÄNTA · UTBETALNING DIREKT
        </div>
      </div>
      
      <button className="primary-btn" style={{ 
        width: '100%', padding: '16px', fontSize: '14px', 
        background: 'var(--neon-mint)', color: '#000', 
        boxShadow: '0 10px 20px rgba(0, 255, 136, 0.2)' 
      }}>
        ANSÖK PÅ 1 SEKUND
      </button>
    </div>
  );
}
