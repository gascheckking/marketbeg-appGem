export default function ShippingAI({ itemWeight }: { itemWeight: string }) {
  return (
    <div style={{background: '#111', padding: '25px', borderRadius: '24px', border: '1px solid #222', marginTop: '20px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
        <div className="pulse-dot"></div>
        <strong style={{color: 'var(--accent)'}}>AI LOGISTICS ACTIVE</strong>
      </div>
      <p style={{fontSize: '14px', margin: '0 0 20px 0'}}>
        Baserat på produktens storlek föreslår jag <strong>Instabox</strong> eller <strong>Hemleverans med BegRunner</strong>.
      </p>
      <div style={{display: 'grid', gap: '10px'}}>
        <button style={{background: '#222', border: 'none', color: '#fff', padding: '15px', borderRadius: '12px', textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}>
          <span>📦 Instabox (Närmaste box: 200m)</span>
          <strong>49 kr</strong>
        </button>
        <button style={{background: '#222', border: 'none', color: '#fff', padding: '15px', borderRadius: '12px', textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}>
          <span>⚡ BegRunner (Hämtas vid dörren)</span>
          <strong>79 kr</strong>
        </button>
      </div>
    </div>
  );
}
