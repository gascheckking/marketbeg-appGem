export default function PriceTag({ price }: { price: number }) {
  // Formaterar priset snyggt (t.ex. 6 500 kr)
  const formatted = new Intl.NumberFormat('sv-SE', { 
    style: 'currency', 
    currency: 'SEK',
    maximumFractionDigits: 0 
  }).format(price);

  return <div className="price-tag">{formatted}</div>;
}
