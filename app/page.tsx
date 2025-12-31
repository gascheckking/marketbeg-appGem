"use client";

import Header from "../components/Header";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <Header />
      <h1>Marketbeg</h1>
      <p>UI-only. Stabil grund.</p>

      <button
        style={{ padding: 16, width: "100%", marginTop: 16 }}
        onClick={() => alert("Backend kommer senare")}
      >
        Logga in
      </button>
    </main>
  );
}
