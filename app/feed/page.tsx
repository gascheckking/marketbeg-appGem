export default function FeedPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <h2>Live Feed</h2>
        <div className="tabs">
          <button className="active">Alla</button>
          <button>Elektronik</button>
          <button>Design</button>
        </div>
      </div>

      <div className="grid">
        {/* Här mappar du dina MOCK_LISTINGS men med nya bento-item klasser */}
        <div className="bento-item">
          <div className="badge-ai">Värderad av AI</div>
          <h3>iPhone 15 Pro</h3>
          <p className="price-tag">9 500 kr</p>
          <div className="trust-badge">🛡️ Trust 99%</div>
        </div>
        {/* Fler kort här... */}
      </div>
    </div>
  );
}
