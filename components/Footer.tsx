"use client";

export default function Footer() {
  return (
    <footer style={{ 
      marginTop: '60px', padding: '40px 20px', background: '#000', 
      borderTop: '1px solid var(--border)', width: '100%' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px' }}>
        
        {/* BRAND COLUMN */}
        <div style={{ gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '1px', marginBottom: '10px' }}>
            KARMA<span style={{color: 'var(--neon-purple)'}}>∞</span>
          </h3>
          <p style={{ fontSize: '10px', lineHeight: '1.6', color: '#666', maxWidth: '240px' }}>
            Nordic Protocol for Circular Value. <br/>
            AI-driven likviditet för nästa generations cirkulära handel.
          </p>
          
          {/* SYSTEM STATUS INDICATOR */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '15px' }}>
            <div style={{ width: '4px', height: '4px', background: 'var(--neon-mint)', borderRadius: '50%', boxShadow: '0 0 8px var(--neon-mint)' }}></div>
            <span style={{ fontSize: '7px', fontWeight: 900, color: 'var(--neon-mint)', letterSpacing: '1px' }}>AI GRID ONLINE • 2.4ms MATCH SPEED</span>
          </div>
        </div>

        {/* LINKS: SYSTEM */}
        <div>
          <h4 style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', color: '#444', fontWeight: 900 }}>System</h4>
          <div style={{ display: 'grid', gap: '6px', fontSize: '10px', fontWeight: 700, color: '#888' }}>
            <span style={{ cursor: 'pointer' }}>Marknadsplats</span>
            <span style={{ cursor: 'pointer' }}>Live Matchningar</span>
            <span style={{ cursor: 'pointer' }}>Karma Score</span>
            <span style={{ cursor: 'pointer' }}>Likviditets-pooler</span>
          </div>
        </div>

        {/* LINKS: SÄKERHET */}
        <div>
          <h4 style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', color: '#444', fontWeight: 900 }}>Säkerhet</h4>
          <div style={{ display: 'grid', gap: '6px', fontSize: '10px', fontWeight: 700, color: '#888' }}>
            <span style={{ cursor: 'pointer' }}>BankID Verifiering</span>
            <span style={{ cursor: 'pointer' }}>Karma Shield 🛡️</span>
            <span style={{ cursor: 'pointer' }}>Tvister & Support</span>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', margin: '40px auto 0 auto', paddingTop: '15px', 
        borderTop: '1px solid rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
      }}>
        <p style={{ fontSize: '8px', fontWeight: 800, color: '#333' }}>© 2026 KARMA PROTOCOL. ALL RIGHTS RESERVED.</p>
        <div style={{ display: 'flex', gap: '15px', fontSize: '8px', fontWeight: 800, color: '#333' }}>
          <span>PRIVACY</span>
          <span>TERMS</span>
        </div>
      </div>
    </footer>
  );
}
