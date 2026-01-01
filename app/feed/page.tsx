const MOCK_LISTINGS = [
  {
    id: "1",
    title: "iPhone 13",
    price: 6500,
    trust: "verified",
  },
  {
    id: "2",
    title: "AirPods Pro",
    price: 1800,
    trust: "unverified",
  },
];

export default function FeedPage() {
  return (
    <main style={{ padding: 16 }}>
      <h2>Flöde</h2>

      <ul style={{ marginTop: 16 }}>
        {MOCK_LISTINGS.map((item) => (
          <li
            key={item.id}
            style={{
              padding: 12,
              marginBottom: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
            }}
          >
            <strong>{item.title}</strong>
            <div>{item.price} kr</div>
            <small>{item.trust}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
