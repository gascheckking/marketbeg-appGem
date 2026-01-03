"use client";
import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = { id: string; title: string; price: number; trust: number; matchScore?: number; };

export default function FeedCardSell({ id, title, price, trust, matchScore = 95 }: Props) {
  const router = useRouter();

  return (
    <div className="feed-card" onClick={() => router.push(`/listing/${id}`)}
      style={{ 
        cursor: 'pointer', position: 'relative', background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden', transition: '0.2s'
      }}>
      <div style={{ 
        position: 'absolute', top: '8px', right: '8px', zIndex: 5,
        background: 'rgba(0,0,0,0.8)', padding: '3px 6px', borderRadius: '6px', border: '1px solid rgba(0,255,136,0.2)'
      }}>
        <div style={{ color: 'var(--neon-mint)', fontSize: '8px', fontWeight: 900 }}>
          {matchScore}% <span style={{fontSize: '6px', opacity: 0.7}}>MATCH</span>
        </div>
      </div>

      <div style={{ aspectRatio: '1/1', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
        📦
      </div>
      
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <PriceTag price={price} size="sm" />
        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <TrustBadge score={trust} />
        </div>
      </div>
    </div>
  );
}
