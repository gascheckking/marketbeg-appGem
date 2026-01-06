// // components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '60px', 
      padding: '40px 20px 120px 20px', 
      borderTop: '1px solid rgba(255,255,255,0.03)', 
      textAlign: 'center',
      background: 'linear-gradient(to bottom, transparent, rgba(157, 78, 221, 0.02))'
    }}>
      <h3 style={{ fontWeight: 900, letterSpacing: '2px', fontSize: '16px', margin: 0 }}>
        KARMA<span style={{color: 'var(--neon-purple)'}}>∞</span>
      </h3>
      <p style={{ 
        fontSize: '8px', 
        color: '#444', 
        fontWeight: 900, 
        marginTop: '8px',
        letterSpacing: '1px'
      }}>
        NORDIC PROTOCOL FOR CIRCULAR VALUE.
      </p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px', opacity: 0.3, fontSize: '10px' }}>
        <span>VILLKOR</span>
        <span>INTEGRITET</span>
        <span>SUPPORT</span>
      </div>
    </footer>
  );
}
