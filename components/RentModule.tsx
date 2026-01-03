"use client";

export default function RentModule() {
  return (
    <div className="rent-module-container" style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '24px',
      border: '1px solid rgba(157, 78, 221, 0.15)',
      background: '#050505',
      marginTop: '10px'
    }}>
      {/* Overlay: Mer sofistikerat och mindre "blockerande" */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)',
        backdropFilter: 'blur(6px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, textAlign: 'center', padding: '15px'
      }}>
        <div style={{
          background: 'var(--neon-purple)', 
          color: '#fff', 
          fontSize: '8px', 
          padding: '3px 8px',
          borderRadius: '6px',
          fontWeight: 900,
          marginBottom: '8px',
          letterSpacing: '1px'
        }}>COMING Q4 2026</div>
        
        <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px'}}>KARMA Rent</h3>
        <p className="muted" style={{fontSize: '11px', marginTop: '4px', maxWidth: '200px', lineHeight: '1.3'}}>
          Passiv inkomst med AI-försäkring och BankID-skydd.
        </p>
      </div>

      {/* Bakgrundsinnehåll (det som visas svagt under blur) */}
      <div style={{ padding: '20px', opacity: 0.1, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700 }}>Kamerautrustning</span>
          <strong style={{ color: 'var(--neon-mint)', fontSize: '12px' }}>499 kr/dag</strong>
        </div>
        <div style={{ 
          height: '60px', 
          background: 'linear-gradient(90deg, #111 0%, #0a0a0a 100%)', 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px'
        }}>📸</div>
      </div>

      <style jsx>{`
        .rent-module-container {
          transition: transform 0.3s ease;
        }
        .rent-module-container:hover {
          transform: scale(0.99);
        }
      `}</style>
    </div>
  );
}
