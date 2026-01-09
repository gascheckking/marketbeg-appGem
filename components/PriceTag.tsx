// // components/PriceTag.tsx
"use client";
import { useEffect, useState } from "react";

type Props = { price: number; size?: 'xs' | 'sm' | 'md' | 'lg'; color?: string };

export default function PriceTag({ price, size = 'md', color = '#fff' }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const sizes = {
    xs: { fontSize: '12px', suffixSize: '8px', weight: '800' },
    sm: { fontSize: '16px', suffixSize: '10px', weight: '900' },
    md: { fontSize: '24px', suffixSize: '12px', weight: '900' },
    lg: { fontSize: '3.5rem', suffixSize: '1.2rem', weight: '900' } 
  };

  const current = sizes[size];
  if (!mounted) return <div style={{ height: current.fontSize, width: '60px' }} />;

  return (
    <div style={{
      fontSize: current.fontSize,
      fontWeight: current.weight,
      color: color,
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px',
      letterSpacing: size === 'lg' ? '-3px' : '-0.5px',
      lineHeight: 1
    }}>
      {price.toLocaleString('sv-SE')}
      <span style={{ 
        fontSize: current.suffixSize, 
        opacity: 0.4, 
        fontWeight: 700,
        letterSpacing: '0px'
      }}>
        SEK
      </span>
    </div>
  );
}
