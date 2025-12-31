"use client";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Marketbeg</h1>
      <p>UI-only. Stabil grund.</p>

      <button
        onClick={() => alert("Login kommer senare")}
        style={{ padding: 16, width: "100%" }}
      >
        Logga in
      </button>
    </main>
  );
}