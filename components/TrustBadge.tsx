export default function TrustBadge({ score }: { score: number }) {
  return (
    <div className="trust-badge">
      <span>🛡️</span>
      <span>Trust {score}% · Verifierad</span>
    </div>
  );
}
