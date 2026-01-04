// --- components/PriceTag.tsx ---
"use client";

type Props = {
  price: number;
  size?: 'sm' | 'md' | 'lg';
};

export default function PriceTag({ price, size = 'md' }: Props) {
  // Vi skippar Intl.NumberFormat för 'sm' för att få bort "SEK" och bara köra "kr" för att spara plats
  const sizes = {
    sm: { fontSize: '10px', glow: '4px', suffix: ' kr' },
    md: { fontSize: '14px', glow: '8px', suffix: ' kr' },
    lg: { fontSize: '24px', glow: '15px', suffix: ' KR' } 
  };

  const currentStyle = sizes[size];

  return (
    <div className="price-tag" style={{
      fontSize: currentStyle.fontSize,
      fontWeight: 900,
      color: '#fff', // Vit text för priser som i bilden
      letterSpacing: '-0.2px',
      textShadow: `0 0 ${currentStyle.glow} rgba(0, 255, 136, 0.4)`,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'baseline'
    }}>
      {price}
      <span style={{ fontSize: '0.7em', marginLeft: '2px', opacity: 0.8 }}>
        {currentStyle.suffix}
      </span>

      <style jsx>{`
        .price-tag {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
