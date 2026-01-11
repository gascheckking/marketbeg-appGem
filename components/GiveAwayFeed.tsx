// // components/GiveawayFeed.tsx
"use client";
export default function GiveawayFeed() {
  const giveaways = [
    { id: 1, item: "Barnstolar (IKEA)", location: "Södermalm", method: "HÄMTAS" },
    { id: 2, item: "Vinterstövlar stl 24", location: "Frakt 49kr", method: "FRAKT" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <span style={{ fontSize: '20px' }}>🎁</span>
        <h2 style={{ fontSize: '18px', fontWeight: 900, margin: 0 }}>KARMA GIVEAWAY</h2>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {giveaways.map(g => (
          <div key={g.id} style={{ background: '#111', padding: '20px', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #222' }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: '14px' }}>{g.item}</div>
              <div style={{ fontSize: '10px', color: 'var(--karma-green)', fontWeight: 900, marginTop: '4px' }}>{g.location.toUpperCase()}</div>
            </div>
            
            <button style={{ 
              background: g.method === "FRAKT" ? "var(--karma-green)" : "#fff", 
              color: "#000", border: 'none', padding: '10px 18px', borderRadius: '12px', fontSize: '11px', fontWeight: 900 
            }}>
              {g.method === "FRAKT" ? "BETALA FRAKT" : "BOKA HÄMTNING"}
            </button>
          </div>
        ))}
      </div>
      
      <p style={{ fontSize: '10px', opacity: 0.3, textAlign: 'center', marginTop: '30px', fontWeight: 700 }}>
        Varje giveaway ger +50 Karma Trust poäng.
      </p>
    </div>
  );
}
