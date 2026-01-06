// // app/wishlist/page.tsx
export default function Wishlist() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900 }}>LETAR EFTER</h1>
      <p style={{ opacity: 0.6, fontSize: '12px' }}>Här hamnar objekt som inte matchades direkt.</p>
      <div style={{ marginTop: '40px', textAlign: 'center', padding: '40px', border: '1px dashed #333', borderRadius: '20px' }}>
        <span style={{ fontSize: '40px' }}>🔍</span>
        <p style={{ fontWeight: 800 }}>Din lista är tom</p>
      </div>
    </div>
  );
}
