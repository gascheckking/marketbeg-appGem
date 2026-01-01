export default function TrustBadge({ score }: { score: number }) {
  return (
    <div className="trust">
      Trust {score} · BankID-verifierad
    </div>
  );
}
