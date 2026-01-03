"use client";

type Props = {
  price: number;
  size?: 'sm' | 'md' | 'lg';
};

export default function PriceTag({ price, size = 'md' }: Props) {
  const formatted = new Intl.NumberFormat('sv-SE', { 
    style: 'currency', 
    currency: 'SEK',
    maximumFractionDigits: 0 
  }).format(price);

  // Minskade storlekar för en mer utzoomad och lyxig känsla
  const sizes = {
    sm: { fontSize: '0.85rem', glow: '8px' },
    md: { fontSize: '1.1rem', glow: '12px' },
    lg: { fontSize: '1.8rem', glow: '20px' } 
  };

  const currentStyle = sizes[size];

  return (
    <div className="price-tag" style={{
      fontSize: currentStyle.fontSize,
      fontWeight: 900,
      color: 'var(--neon-mint)',
      letterSpacing: size === 'lg' ? '-1.5px' : '-0.5px',
      textShadow: `0 0 ${currentStyle.glow} rgba(0, 255, 136, 0.25)`,
      lineHeight: 1
    }}>
      {formatted}

      <style jsx>{`
        .price-tag {
          display: inline-block;
          animation: pulse-glow 3s infinite ease-in-out;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.9; filter: brightness(1.2); }
        }
      `}</style>
    </div>
  );
}
