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
        borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', transition: '0.2s'
      }}>
      
      {/* AI Match Badge */}
      <div style={{ 
        position: 'absolute', top: '6px', right: '6px', zIndex: 5,
        background: 'rgba(0,0,0,0.85)', padding: '2px 5px', borderRadius: '5px', border: '1px solid rgba(0,255,136,0.3)'
      }}>
        <div style={{ color: 'var(--neon-mint)', fontSize: '7px', fontWeight: 900 }}>
          {matchScore}% <span style={{fontSize: '5px', opacity: 0.7}}>MATCH</span>
        </div>
      </div>

      <div style={{ aspectRatio: '1/1', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
        📦
      </div>
      
      <div style={{ padding: '8px' }}>
        <h3 style={{ margin: '0 0 2px 0', fontSize: '0.75rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <PriceTag price={price} size="sm" />
        <div style={{ marginTop: '6px', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <div style={{ transform: 'scale(0.8)', transformOrigin: 'left' }}>
            <TrustBadge score={trust} />
          </div>
        </div>
      </div>
    </div>
  );
}
