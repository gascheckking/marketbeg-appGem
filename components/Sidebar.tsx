{/* Quick-Toggle mellan Köp och Sälj */}
<div style={{ 
  display: 'flex', 
  background: '#111', 
  borderRadius: '12px', 
  padding: '4px', 
  marginBottom: '20px' 
}}>
  <button style={{ flex: 1, padding: '8px', borderRadius: '8px', background: 'var(--neon-purple)', border: 'none', color: '#fff', fontWeight: 800, cursor: 'pointer', fontSize: '12px' }}>KÖP</button>
  <button 
    onClick={() => window.location.href='/sell/instant'}
    style={{ flex: 1, padding: '8px', borderRadius: '8px', background: 'transparent', border: 'none', color: '#555', fontWeight: 800, cursor: 'pointer', fontSize: '12px' }}
  >SÄLJ</button>
</div>
