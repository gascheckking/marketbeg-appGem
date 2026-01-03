"use client";
import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = {
  id: string;
  title: string;
  price: number;
  trust: number;
  matchScore?: number;
};

export default function FeedCardSell({ id, title, price, trust, matchScore = 95 }: Props) {
  const router = useRouter();

  return (
    <div 
      className="feed-card" 
      onClick={() => router.push(`/listing/${id}`)}
      style={{ 
        cursor: 'pointer', 
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '24px',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div style={{ 
        position: 'absolute', top: '12px', right: '12px', zIndex: 5,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        padding: '4px 8px', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.2)'
      }}>
        <div style={{ color: 'var(--neon-mint)', fontSize: '10px', fontWeight: 900 }}>
          {matchScore}% <span style={{fontSize: '7px', opacity: 0.7}}>MATCH</span>
        </div>
      </div>

      <div className="card-image-area" style={{ 
        aspectRatio: '16/11', 
        background: 'radial-gradient(circle at center, #111 0%, #000 100%)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px'
      }}>
        📦
      </div>
      
      <div style={{ padding: '16px' }}>
        <h3 style={{ 
          margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 800,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          letterSpacing: '-0.3px'
        }}>
          {title}
        </h3>
        
        <PriceTag price={price} size="sm" />
        
        <div style={{ 
          marginTop: '12px', paddingTop: '12px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center'
        }}>
          <TrustBadge score={trust} />
        </div>
      </div>

      <style jsx>{`
        .feed-card:hover {
          transform: translateY(-6px);
          border-color: var(--neon-purple);
          background: rgba(157, 78, 221, 0.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.6);
        }
        .feed-card:hover :global(.price-tag) {
          filter: brightness(1.2);
        }
      `}</style>
    </div>
  );
}
