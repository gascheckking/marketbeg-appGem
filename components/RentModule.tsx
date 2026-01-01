"use client";

export default function RentModule() {
  return (
    <div className="bento-item rent-locked" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)',
      position: 'relative',
      overflow: 'hidden',
      border: '1px dashed #333'
    }}>
      {/* Glas-overlay för "Låst" känsla */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 10
      }}>
        <span style={{fontSize: '12px', fontWeight: 800, letterSpacing: '2px', color: 'var(--accent)'}}>COMING SOON</span>
        <h3 style={{margin: '5px 0'}}>BegAI Rent</h3>
      </div>

      <div style={{opacity: 0.3}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Borrhammare</span>
          <strong>150kr/dag</strong>
        </div>
        <div style={{marginTop: '10px', height: '4px', background: '#333', borderRadius: '2px'}}></div>
      </div>
    </div>
  );
}
