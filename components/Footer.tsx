export const Footer = () => (
  <footer style={{ 
    marginTop: '100px', padding: '80px 60px', background: 'rgba(2,4,10,0.8)', 
    borderTop: '1px solid #1a1a1a', width: '100%' 
  }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px' }}>
      <div>
        <h3 style={{ color: '#fff' }}>KARMA/LOOP</h3>
        <p className="muted">The future of circular commerce, powered by AI and secured by BankID.</p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>Navigation</h4>
        <p className="footer-link">Marketplace</p>
        <p className="footer-link">Auctions</p>
        <p className="footer-link">Top Traders</p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>Legal</h4>
        <p className="footer-link">Terms of Service</p>
        <p className="footer-link">Privacy Policy</p>
        <p className="footer-link" style={{ color: 'var(--neon-purple)', cursor: 'pointer' }}>Cookie Settings ⚙️</p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>Connect</h4>
        <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
          <span>📱</span> <span>🐦</span> <span>📸</span>
        </div>
      </div>
    </div>
  </footer>
);
