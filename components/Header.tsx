"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => router.push("/")}>
          Marketbeg
        </div>
        <nav className="nav-links">
          <button onClick={() => router.push("/feed")}>Annonser</button>
          <button onClick={() => router.push("/sell")}>Sälj</button>
          <button onClick={() => router.push("/profile")}>Profil</button>
        </nav>
      </div>
    </header>
  );
}
