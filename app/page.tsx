"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="container center">
      <div style={{ maxWidth: '600px' }}>
        <h1>Framtidens begagnat.</h1>
        <p className="muted" style={{ marginBottom: '40px', fontSize: '20px' }}>
          Ta en bild. AI skapar annonsen. Vi garanterar tryggheten med BankID och TrustScore.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="primary" onClick={() => router.push("/feed")}>
            Utforska marknaden
          </button>
          <button className="secondary" onClick={() => router.push("/sell")}>
            Prova sälj med AI
          </button>
        </div>
      </div>
    </main>
  );
}
