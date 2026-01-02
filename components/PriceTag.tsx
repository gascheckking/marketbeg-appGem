"use client";

export default function PriceTag({ price }: { price: number }) {
  const formatted = new Intl.NumberFormat('sv-SE', { 
    style: 'currency', 
    currency: 'SEK',
    maximumFractionDigits: 0 
  }).format(price);

  return (
    <div className="price-tag" style={{
      fontSize: '1.4rem',
      fontWeight: 900,
      color: 'var(--neon-mint)',
      letterSpacing: '-1px',
      textShadow: '0 0 15px rgba(0, 255, 136, 0.2)'
    }}>
      {formatted}
    </div>
  );
}
