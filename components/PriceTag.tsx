// // components/PriceTag.tsx
"use client";
import { useEffect, useState } from "react";

type Props = { price: number; size?: 'xs' | 'sm' | 'md' | 'lg'; color?: string };

export default function PriceTag({ price, size = 'md', color = 'var(--neon-mint)' }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sizes = {
    xs: { fontSize: '10px', suffixSize: '7px' },
    sm: { fontSize: '12px', suffixSize: '9px' },
    md: { fontSize: '18px', suffixSize: '11px' },
    lg: { fontSize: '28px', suffixSize: '16px' } 
  };

  const style = sizes[size];
  if (!mounted) return <div style={{ height: style.fontSize, width: '40px' }} />;

  return (
    <div style={{
      fontSize: style.fontSize,
      fontWeight: 900,
      color: color,
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px',
      letterSpacing: '-0.5px'
    }}>
      {price.toLocaleString('sv-SE')}
      <span style={{ fontSize: style.suffixSize, opacity: 0.6, fontWeight: 800 }}>SEK</span>
    </div>
  );
}
