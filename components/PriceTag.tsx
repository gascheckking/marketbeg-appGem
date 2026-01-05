// // components/PriceTag.tsx
"use client";
import { useEffect, useState } from "react";

type Props = { price: number; size?: 'xs' | 'sm' | 'md' | 'lg'; };

export default function PriceTag({ price, size = 'md' }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sizes = {
    xs: { fontSize: '10px', suffixSize: '7px' }, // Tillagd för 3-i-bredd
    sm: { fontSize: '12px', suffixSize: '9px' },
    md: { fontSize: '16px', suffixSize: '11px' },
    lg: { fontSize: '24px', suffixSize: '14px' } 
  };

  const style = sizes[size];
  if (!mounted) return <div style={{ height: style.fontSize }} />;

  return (
    <div style={{
      fontSize: style.fontSize,
      fontWeight: 900,
      color: 'var(--neon-mint)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
      letterSpacing: '-0.5px'
    }}>
      {price.toLocaleString('sv-SE')}
      <span style={{ fontSize: style.suffixSize, opacity: 0.8, fontWeight: 700 }}>kr</span>
    </div>
  );
}
