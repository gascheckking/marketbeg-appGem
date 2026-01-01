"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="container center">
      <h1>Marketbeg</h1>
      <p className="muted">
        Sälj och köp begagnat – tryggt, snabbt, verifierat
      </p>

      <button
        className="primary"
        onClick={() => router.push("/feed")}
      >
        Logga in
      </button>
    </main>
  );
}
