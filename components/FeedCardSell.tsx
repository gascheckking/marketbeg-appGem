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
      {/* BADGES - Nu mer kompakta för 3-kolumns layout */}
      <div className="card-header-badges">
        <div className="match-dot">{matchScore}%</div>
        {isInstant && <div className="instant-icon">⚡</div>}
      </div>
      
      <div className="card-visual">
        <div className="emoji-display">
          {title.toLowerCase().includes('phone') ? '📱' : 
           title.toLowerCase().includes('max') ? '🎧' : 
           title.toLowerCase().includes('mac') ? '💻' : 
           title.toLowerCase().includes('tee') ? '👕' : '📦'}
        </div>
      </div>
      
      <div className="card-content">
        <h4 className="item-name">{title}</h4>
        <div className="price-row">
          <PriceTag price={price} size="xs" />
        </div>
        <div className="trust-row">
          <TrustBadge score={trust} />
        </div>
      </div>

      <style jsx>{`
        .mini-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 6px;
          position: relative;
          cursor: pointer;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
        }

        .mini-card:active { transform: scale(0.96); }

        .card-header-badges {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
          z-index: 5;
        }

        .match-dot {
          background: var(--bg-deep);
          color: var(--neon-mint);
          border: 1px solid var(--neon-mint);
          font-size: 7px;
          font-weight: 900;
          padding: 1px 4px;
          border-radius: 4px;
        }

        .instant-icon {
          background: var(--neon-purple);
          color: #fff;
          font-size: 7px;
          padding: 1px 4px;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(157, 78, 221, 0.4);
        }

        .card-visual {
          width: 100%;
          aspect-ratio: 1/1;
          background: #000;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .emoji-display { font-size: 20px; }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .item-name {
          margin: 0;
          font-size: 9px;
          font-weight: 700;
          color: #ccc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .price-row {
          margin: 2px 0;
        }

        .trust-row {
          opacity: 0.8;
          transform: scale(0.85);
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}
