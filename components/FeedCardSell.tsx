// // components/FeedCardSell.tsx
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
  isInstant?: boolean; 
};

export default function FeedCardSell({ id, title, price, trust, matchScore = 95, isInstant = true }: Props) {
  const router = useRouter();

  return (
    <div className="mini-card" onClick={() => router.push(`/listing/${id}`)}>
      {/* Topp-badges som i bilden */}
      <div className="card-badges">
        {isInstant && <div className="badge-instant">INSTANT ⚡</div>}
        <div className="badge-match">{matchScore}% MATCH</div>
      </div>
      
      <div className="card-visual">
        <div className="emoji-wrapper">
          {title.toLowerCase().includes('phone') ? '📱' : 
           title.toLowerCase().includes('max') ? '🎧' : 
           title.toLowerCase().includes('mac') ? '💻' : '📦'}
        </div>
      </div>
      
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <PriceTag price={price} size="sm" />
        <div style={{ marginTop: '4px' }}>
          <TrustBadge score={trust} />
        </div>
      </div>

      <style jsx>{`
        .mini-card {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 10px;
          position: relative;
          cursor: pointer;
          transition: transform 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mini-card:active { transform: scale(0.96); }
        
        .card-badges {
          display: flex;
          justify-content: space-between;
          width: 100%;
          position: absolute;
          top: 8px;
          left: 0;
          padding: 0 8px;
          z-index: 2;
        }

        .badge-instant {
          background: var(--neon-purple);
          color: #fff;
          font-size: 6px;
          font-weight: 900;
          padding: 2px 5px;
          border-radius: 4px;
        }

        .badge-match {
          background: rgba(0, 255, 136, 0.1);
          color: var(--neon-mint);
          border: 1px solid var(--neon-mint);
          font-size: 6px;
          font-weight: 900;
          padding: 1px 4px;
          border-radius: 4px;
        }

        .card-visual {
          aspect-ratio: 1/1;
          display: flex; 
          align-items: center; 
          justify-content: center;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
        }
        .emoji-wrapper { font-size: 24px; }
        
        .card-info { display: flex; flex-direction: column; gap: 2px; }
        .card-title {
          margin: 0; font-size: 9px; font-weight: 800; color: #fff;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
