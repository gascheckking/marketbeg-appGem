// // components/PriceTag.tsx
"use client";
import { useEffect, useState } from "react";

type Props = { price: number; size?: 'sm' | 'md' | 'lg'; };

export default function PriceTag({ price, size = 'md' }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sizes = {
    sm: { fontSize: '12px', suffixSize: '9px' },
    md: { fontSize: '16px', suffixSize: '11px' },
    lg: { fontSize: '24px', suffixSize: '14px' } 
  };

  const style = sizes[size];
  if (!mounted) return <div style={{ height: '20px' }} />;

  return (
    <div style={{
      fontSize: style.fontSize,
      fontWeight: 900,
      color: 'var(--neon-mint)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px'
    }}>
      {price.toLocaleString('sv-SE')}
      <span style={{ fontSize: style.suffixSize, opacity: 0.9 }}>kr</span>
    </div>
  );
}
