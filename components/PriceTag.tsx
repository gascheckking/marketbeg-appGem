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

  // Definierar storlekar för att matcha olika vyer
  const sizes = {
    sm: { fontSize: '1.1rem', glow: '10px' },
    md: { fontSize: '1.4rem', glow: '15px' },
    lg: { fontSize: '2.4rem', glow: '30px' } // För produktsidan
  };

  const currentStyle = sizes[size];

  return (
    <div className="price-tag" style={{
      fontSize: currentStyle.fontSize,
      fontWeight: 900,
      color: 'var(--neon-mint)',
      letterSpacing: size === 'lg' ? '-2px' : '-1px',
      textShadow: `0 0 ${currentStyle.glow} rgba(0, 255, 136, 0.3)`,
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
