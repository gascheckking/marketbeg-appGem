// // components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '80px', 
      padding: '60px 20px 120px 20px', 
      borderTop: '1px solid #111', 
      textAlign: 'center',
      background: '#000'
    }}>
      <h3 style={{ fontWeight: 900, letterSpacing: '4px', fontSize: '14px', margin: 0, color: '#fff' }}>
        KARMA<span style={{color: '#1DB954'}}>∞</span>
      </h3>
      <p style={{ 
        fontSize: '9px', 
        color: '#444', 
        fontWeight: 800, 
        marginTop: '12px',
        letterSpacing: '2px'
      }}>
        FUTURE OF COMMERCE.
      </p>
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '25px', opacity: 0.2, fontSize: '10px', fontWeight: 900 }}>
        <span>VILLKOR</span>
        <span>INTEGRITET</span>
        <span>SUPPORT</span>
      </div>
    </footer>
  );
}
