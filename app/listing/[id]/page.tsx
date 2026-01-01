export default function ListingPage({ params }: { params: { id: string } }) {
  return (
    <main className="container">
      <h2>Annons #{params.id}</h2>
      <p>Detaljvy för annons.</p>

      <button className="primary" disabled>
        Köp (kommer snart)
      </button>
    </main>
  );
}
