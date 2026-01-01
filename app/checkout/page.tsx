"use client";

export default function Checkout() {
  return (
    <div className="app-shell" style={{ padding: '20px' }}>
      <button onClick={() => window.history.back()} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginBottom: '20px' }}>← Tillbaka</button>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '10px' }}>Verifierad Betalning</h1>
      <p className="muted" style={{ marginBottom: '30px' }}>
        Pengarna hålls säkert i <strong>BegAI Escrow</strong> tills du har bekräftat att varan är mottagen.
      </p>

      <div className="payment-methods" style={{ display: 'grid', gap: '15px' }}>
        {/* Sverige */}
        <div className="pay-card" style={{ borderLeft: '4px solid #ff0000', background: 'rgba(255,0,0,0.02)' }}>
          <div>
            <strong style={{ display: 'block' }}>Swish</strong>
            <small className="muted">Sverige • Omedelbart</small>
          </div>
          <button className="small-pay" style={{ background: '#fff', color: '#000' }}>VÄLJ</button>
        </div>

        {/* Norge */}
        <div className="pay-card" style={{ borderLeft: '4px solid #ff5b24', background: 'rgba(255,91,36,0.02)' }}>
          <div>
            <strong style={{ display: 'block' }}>Vipps</strong>
            <small className="muted">Norge • Omedelbart</small>
          </div>
          <button className="small-pay" style={{ background: '#fff', color: '#000' }}>VÄLJ</button>
        </div>

        {/* Danmark/Finland */}
        <div className="pay-card" style={{ borderLeft: '4px solid #007aff', background: 'rgba(0,122,255,0.02)' }}>
          <div>
            <strong style={{ display: 'block' }}>MobilePay</strong>
            <small className="muted">Danmark & Finland</small>
          </div>
          <button className="small-pay" style={{ background: '#fff', color: '#000' }}>VÄLJ</button>
        </div>

        {/* Globalt */}
        <div className="pay-card" style={{ borderLeft: '4px solid #333' }}>
          <div>
            <strong style={{ display: 'block' }}>Kreditkort</strong>
            <small className="muted">Visa / Mastercard / Apple Pay</small>
          </div>
          <button className="small-pay" style={{ background: '#333', color: '#fff' }}>VÄLJ</button>
        </div>
      </div>

      <div className="bankid-box" style={{ 
        marginTop: '40px', 
        background: 'linear-gradient(135deg, #003f88 0%, #001f44 100%)', 
        padding: '35px', 
        borderRadius: '32px', 
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ fontSize: '40px', marginBottom: '15px' }}>🆔</div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.4rem' }}>BankID Verifiering</h3>
        <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '25px', lineHeight: '1.6' }}>
          Säkerställ din identitet för att aktivera köparskyddet.
        </p>
        <button className="primary-btn" style={{ background: '#fff', color: '#003f88', width: '100%', boxShadow: 'none' }}>
          ÖPPNA BANKID
        </button>
      </div>
    </div>
  );
}
