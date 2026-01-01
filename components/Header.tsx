"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <strong onClick={() => router.push("/")}>Marketbeg</strong>

      <nav>
        <button onClick={() => router.push("/feed")}>Flöde</button>
        <button onClick={() => router.push("/sell")}>Sälj</button>
        <button onClick={() => router.push("/profile")}>Profil</button>
      </nav>
    </header>
  );
}
