export default function Checkout() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Verifierad Betalning</h1>
      <p className="muted">Pengarna hålls säkert tills köparen mottagit varan.</p>

      <div className="payment-methods">
        {/* Sverige */}
        <div className="pay-card" style={{borderLeft: '5px solid #ff0000'}}>
          <div>
            <strong>Swish</strong>
            <div style={{fontSize: '12px', color: '#888'}}>Sverige (Direkt)</div>
          </div>
          <button className="small-pay">VÄLJ</button>
        </div>

        {/* Norge */}
        <div className="pay-card" style={{borderLeft: '5px solid #ff5b24'}}>
          <div>
            <strong>Vipps</strong>
            <div style={{fontSize: '12px', color: '#888'}}>Norge (Direkt)</div>
          </div>
          <button className="small-pay">VÄLJ</button>
        </div>

        {/* Danmark/Finland */}
        <div className="pay-card" style={{borderLeft: '5px solid #007aff'}}>
          <div>
            <strong>MobilePay</strong>
            <div style={{fontSize: '12px', color: '#888'}}>Danmark & Finland</div>
          </div>
          <button className="small-pay">VÄLJ</button>
        </div>

        {/* Globalt Kort */}
        <div className="pay-card">
          <div>
            <strong>Kreditkort</strong>
            <div style={{fontSize: '12px', color: '#888'}}>Visa / Mastercard</div>
          </div>
          <button className="small-pay">VÄLJ</button>
        </div>
      </div>

      <div className="bankid-box" style={{marginTop: '40px', background: '#003f88', padding: '30px', borderRadius: '24px', textAlign: 'center'}}>
        <span style={{fontSize: '30px'}}>🆔</span>
        <h3>BankID Verifiering</h3>
        <p style={{fontSize: '14px'}}>För att slutföra transaktionen krävs verifiering via BankID eller MitID.</p>
        <button style={{background: 'white', color: '#003f88', border: 'none', padding: '15px 30px', borderRadius: '12px', fontWeight: 800}}>ÖPPNA BANKID</button>
      </div>
    </div>
  );
}
