// // components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer style={{ marginTop: '80px', padding: '60px 20px', background: '#000', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '15px' }}>KARMA<span style={{color: 'var(--neon-purple)'}}>∞</span></h3>
          <p style={{ fontSize: '11px', color: '#555', maxWidth: '300px', lineHeight: '1.6' }}>
            NORDIC PROTOCOL FOR CIRCULAR VALUE. <br/>
            Framtidens handel är cirkulär, AI-driven och omedelbar.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px' }}>
            <div style={{ width: '6px', height: '6px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-mint)' }}></div>
            <span style={{ fontSize: '8px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>GRID ONLINE • 2.4ms MATCH SPEED</span>
          </div>
        </div>
        {/* ... Länkar (System/Säkerhet) ... */}
      </div>
    </footer>
  );
}
