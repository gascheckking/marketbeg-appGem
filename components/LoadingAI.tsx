export default function LoadingAI() {
  return <p className="muted">AI analyserar objekt…</p>;
}

app/profile/page.tsx
import TrustBadge from "../../components/TrustBadge";

export default function ProfilePage() {
  return (
    <main className="container">
      <h2>Min profil</h2>
      <p>Verifierad användare</p>
      <TrustBadge score={87} />
    </main>
  );
}
