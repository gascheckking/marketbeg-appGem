import CameraBatch from "../../components/CameraBatch";

export default function SellPage() {
  return (
    <main className="container">
      <h2>Sälj med AI</h2>
      <p className="muted">
        Ta bilder – vi analyserar, föreslår pris och kategori.
      </p>

      <CameraBatch />
    </main>
  );
}
