"use client";
import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = {
  id: string;
  title: string;
  price: number;
  trust: number;
  matchScore?: number; // Tillagt för din roadmap
};

export default function FeedCardSell({ id, title, price, trust, matchScore = 95 }: Props) {
  const router = useRouter();

  return (
    <div className="glass-card" 
      onClick={() => router.push(`/listing/${id}`)}
      style={{ cursor: 'pointer', transition: 'transform 0.2s ease', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 5 }}>
        <div style={{ 
          background: 'rgba(0,255,136,0.1)', color: 'var(--neon-mint)', 
          padding: '4px 8px', borderRadius: '8px', fontSize: '10px', fontWeight: 900 
        }}>
          {matchScore}% MATCH
        </div>
      </div>

      <div style={{ 
        height: '200px', background: '#0a0a0a', borderRadius: '16px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px',
        marginBottom: '15px', border: '1px solid rgba(255,255,255,0.03)'
      }}>
        📦
      </div>
      
      <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{title}</h3>
      <PriceTag price={price} />
      
      <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
        <TrustBadge score={trust} />
      </div>
    </div>
  );
}
