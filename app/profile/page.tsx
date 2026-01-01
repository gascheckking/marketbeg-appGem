export default function ProfilePage() {
  return (
    <main className="container">
      <h2>Min profil</h2>

      <div className="grid">
        <div className="card">
          <h3>Verifiering</h3>
          <p className="muted">BankID-verifierad användare</p>
        </div>

        <div className="card">
          <h3>Mina annonser</h3>
          <p className="muted">Du har 2 aktiva annonser</p>
        </div>

        <div className="card">
          <h3>Trust score</h3>
          <p className="price">92 / 100</p>
        </div>
      </div>
    </main>
  );
}
