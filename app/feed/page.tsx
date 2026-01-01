import FeedCardSell from "../../components/FeedCardSell";

const LISTINGS = [
  {
    id: "1",
    title: "iPhone 13",
    price: 6500,
    trust: 92,
  },
  {
    id: "2",
    title: "IKEA Stol",
    price: 400,
    trust: 78,
  },
];

export default function FeedPage() {
  return (
    <main className="container">
      <h2>Flöde</h2>

      {LISTINGS.map((item) => (
        <FeedCardSell key={item.id} {...item} />
      ))}
    </main>
  );
}
