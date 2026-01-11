// // components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '100px', 
      padding: '80px 20px 140px 20px', 
      borderTop: '1px solid var(--border)', 
      textAlign: 'center',
      background: '#000'
    }}>
      <h3 style={{ fontWeight: 900, letterSpacing: '5px', fontSize: '16px', margin: 0, color: '#fff' }}>
        KARMA<span style={{color: 'var(--karma-green)'}}>∞</span>
      </h3>
      <p style={{ 
        fontSize: '10px', 
        color: '#444', 
        fontWeight: 900, 
        marginTop: '15px',
        letterSpacing: '2.5px'
      }}>
        THE FUTURE OF COMMERCE.
      </p>
      <div style={{ 
        marginTop: '40px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        opacity: 0.3, 
        fontSize: '10px', 
        fontWeight: 900,
        letterSpacing: '1px'
      }}>
        <span>VILLKOR</span>
        <span>INTEGRITET</span>
        <span>SUPPORT</span>
      </div>
      <div style={{ marginTop: '40px', fontSize: '8px', fontWeight: 900, opacity: 0.1, letterSpacing: '1px' }}>
        © 2026 KARMA TECH LABS INC.
      </div>
    </footer>
  );
}
