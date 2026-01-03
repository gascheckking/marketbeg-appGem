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
        background: 'var(--glass)',
        borderRadius: '20px',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        transition: 'all 0.2s ease'
      }}
    >
      {/* Match Score - Nu mindre och mer diskret i hörnet */}
      <div style={{ 
        position: 'absolute', top: '10px', right: '10px', zIndex: 5,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
        padding: '3px 7px', borderRadius: '6px', border: '1px solid rgba(0,255,136,0.3)'
      }}>
        <div style={{ color: 'var(--neon-mint)', fontSize: '9px', fontWeight: 900 }}>
          {matchScore}%
        </div>
      </div>

      {/* Bildyta - Ändrad till 16:9 ratio för att ta mindre vertikal plats */}
      <div style={{ 
        aspectRatio: '16/10', 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)', 
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
        borderBottom: '1px solid rgba(255,255,255,0.03)'
      }}>
        📦
      </div>
      
      {/* Textinnehåll - Tätare layout */}
      <div style={{ padding: '12px 15px' }}>
        <h3 style={{ 
          margin: '0 0 4px 0', 
          fontSize: '0.95rem', 
          fontWeight: 700,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis' 
        }}>
          {title}
        </h3>
        
        <div style={{ transform: 'scale(0.9)', transformOrigin: 'left' }}>
          <PriceTag price={price} size="sm" />
        </div>
        
        <div style={{ 
          marginTop: '10px', 
          paddingTop: '10px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          transform: 'scale(0.85)',
          transformOrigin: 'left'
        }}>
          <TrustBadge score={trust} />
        </div>
      </div>

      <style jsx>{`
        .feed-card:hover {
          transform: translateY(-4px);
          border-color: rgba(157, 78, 221, 0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}
