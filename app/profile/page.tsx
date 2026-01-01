export default function Profile() {
  return (
    <div className="main-container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{width: '100px', height: '100px', background: '#333', borderRadius: '50%', margin: '0 auto'}}></div>
        <h2 style={{marginTop: '15px'}}>Alex Lindgren 🛡️</h2>
        <div style={{color: 'var(--accent)', fontWeight: 800}}>LEVEL 14 MERCHANT</div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px'}}>
        <div style={{background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center'}}>
          <div style={{fontSize: '24px', fontWeight: 900}}>2 450</div>
          <div style={{fontSize: '12px', color: '#888'}}>BEGCREDITS</div>
        </div>
        <div style={{background: '#111', padding: '20px', borderRadius: '20px', textAlign: 'center'}}>
          <div style={{fontSize: '24px', fontWeight: 900}}>98.2%</div>
          <div style={{fontSize: '12px', color: '#888'}}>TRUST SCORE</div>
        </div>
      </div>

      <h3>Din On-chain Vault</h3>
      <div style={{display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '20px'}}>
        <Achievement icon="⚡" title="Quick Seller" />
        <Achievement icon="🍎" title="Apple Expert" />
        <Achievement icon="💎" title="Early Adopter" />
        <Achievement icon="🤝" title="Fair Trader" />
      </div>
    </div>
  );
}

function Achievement({ icon, title }) {
  return (
    <div style={{minWidth: '100px', background: '#111', padding: '15px', borderRadius: '20px', textAlign: 'center', border: '1px solid #222'}}>
      <div style={{fontSize: '30px'}}>{icon}</div>
      <div style={{fontSize: '10px', fontWeight: 700, marginTop: '5px'}}>{title}</div>
    </div>
  );
}
