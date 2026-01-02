"use client";

export default function Marketplace() {
  return (
    <div style={{ width: '100%' }}>
      {/* HEADER MED SÖK & RULLGARDINER */}
      <section style={{ padding: '40px', borderBottom: '1px solid #1a1a1a' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Sök efter märken, modeller eller kategorier..." 
              style={{ width: '100%', padding: '20px 60px', borderRadius: '16px', background: '#111', border: '1px solid #222', color: '#fff', fontSize: '18px' }} />
            <span style={{ position: 'absolute', left: '25px', top: '22px' }}>🔍</span>
          </div>
          <select style={{ padding: '0 20px', borderRadius: '16px', background: '#111', border: '1px solid #222', color: '#fff' }}>
            <option>Hela Sverige</option>
            <option>Stockholm</option>
            <option>Göteborg</option>
          </select>
        </div>

        {/* TABS / FLIKAR (Vinted/Blocket style) */}
        <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid #111' }}>
          <div className="tab active">Alla Annonser</div>
          <div className="tab">Mina Bevakningar</div>
          <div className="tab">Auktioner</div>
          <div className="tab">Direktköp</div>
        </div>
      </section>

      {/* PRODUKT-GRID (Täcker hela vägen) */}
      <section style={{ padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontWeight: 900 }}>Just nu i flödet 🔥</h2>
          <div style={{ color: 'var(--accent)', cursor: 'pointer' }}>Visa alla →</div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="glow-card" style={{ padding: 0, borderRadius: '12px' }}>
              <div style={{ height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>📦</div>
              <div style={{ padding: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 800 }}>98% TRUST</span>
                  <span className="muted">Stockholm</span>
                </div>
                <div style={{ fontWeight: 700 }}>Objekt Namn {i}</div>
                <div style={{ fontSize: '18px', fontWeight: 900, marginTop: '5px' }}>4 200 kr</div>
                <div style={{ fontSize: '10px', color: '#ff4444', marginTop: '5px' }}>🔥 12 BUD JUST NU</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REKLAM-BANNER */}
      <section style={{ padding: '0 40px' }}>
        <div style={{ background: 'linear-gradient(45deg, #111, #000)', padding: '40px', borderRadius: '24px', border: '1px solid #222', textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>Sälj smartare med AI.</h2>
          <p className="muted">Vi värderar dina prylar på 5 sekunder.</p>
          <button className="primary-btn" style={{ marginTop: '20px', padding: '15px 40px' }}>STARTA AI-SCAN</button>
        </div>
      </section>

      {/* FOOTER MED COOKIES & INFO */}
      <footer style={{ marginTop: '100px', padding: '60px 40px', background: '#080808', borderTop: '1px solid #1a1a1a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '20px', marginBottom: '20px' }}>KARMA/LOOP</div>
            <p className="muted" style={{ fontSize: '13px' }}>Norden ledande AI-marknadsplats för cirkulär ekonomi. Tryggt, enkelt och verifierat.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Marknad</h4>
            <div className="footer-link">Sälj prylar</div>
            <div className="footer-link">Köpskydd</div>
            <div className="footer-link">Fraktlösningar</div>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Support</h4>
            <div className="footer-link">Kundservice</div>
            <div className="footer-link">Säkerhetscenter</div>
            <div className="footer-link">BankID Guide</div>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Rättsligt</h4>
            <div className="footer-link">Användarvillkor</div>
            <div className="footer-link">Sekretesspolicy</div>
            <div className="footer-link" style={{ color: 'var(--accent)' }}>Cookie-inställningar ⚙️</div>
          </div>
        </div>
        <div style={{ marginTop: '60px', textAlign: 'center', fontSize: '12px' }} className="muted">
          © 2026 KARMA LOOP AB • Stockholm, Sweden
        </div>
      </footer>
    </div>
  );
}
