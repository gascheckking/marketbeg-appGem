"use client";
import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = { id: string; title: string; price: number; trust: number; matchScore?: number; instant?: boolean; };

export default function FeedCardSell({ id, title, price, trust, matchScore = 95, instant = true }: Props) {
  const router = useRouter();

  return (
    <div className="feed-card" onClick={() => router.push(`/listing/${id}`)}
      style={{ 
        cursor: 'pointer', position: 'relative', background: 'var(--glass)',
        borderRadius: '16px', border: '1px solid var(--border)', overflow: 'hidden'
      }}>
      
      {/* Top Badges */}
      <div style={{ position: 'absolute', top: '8px', left: '8px', right: '8px', display: 'flex', justifyContent: 'space-between', zIndex: 5 }}>
        {/* Instant Sell Badge */}
        {instant && (
          <div style={{ background: 'var(--neon-purple)', padding: '2px 6px', borderRadius: '4px', fontSize: '6px', fontWeight: 900, color: '#fff' }}>
            INSTANT ⚡
          </div>
        )}
        {/* Match Score */}
        <div style={{ background: 'rgba(0,0,0,0.7)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--neon-mint)', color: 'var(--neon-mint)', fontSize: '6px', fontWeight: 900 }}>
          {matchScore}% MATCH
        </div>
      </div>

      <div style={{ aspectRatio: '1/1.1', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
        {title.toLowerCase().includes('phone') ? '📱' : '📦'}
      </div>
      
      <div style={{ padding: '10px' }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '11px', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <PriceTag price={price} size="sm" />
        <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'left' }}>
            <TrustBadge score={trust} />
          </div>
        </div>
      </div>
    </div>
  );
}
