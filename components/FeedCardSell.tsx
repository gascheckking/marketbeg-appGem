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
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mini-card:active { transform: scale(0.94); background: rgba(255, 255, 255, 0.05); }

        .card-header-badges {
          position: absolute; top: 8px; left: 8px; right: 8px;
          display: flex; justify-content: space-between; z-index: 5;
        }

        .match-dot {
          background: #000; color: var(--neon-mint);
          border: 1px solid var(--neon-mint);
          font-size: 6px; font-weight: 900;
          padding: 1px 3px; border-radius: 3px;
        }

        .instant-icon {
          background: var(--neon-purple); color: #fff;
          font-size: 6px; padding: 1px 3px; border-radius: 3px;
          box-shadow: 0 0 8px rgba(157, 78, 221, 0.5);
        }

        .card-visual {
          width: 100%; aspect-ratio: 1/1;
          background: linear-gradient(180deg, #050505 0%, #111 100%);
          border-radius: 8px; display: flex;
          align-items: center; justify-content: center; margin-bottom: 6px;
        }

        .emoji-display { font-size: 22px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5)); }

        .card-content { display: flex; flex-direction: column; gap: 1px; }

        .item-name {
          margin: 0; font-size: 8px; font-weight: 800;
          color: #eee; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
          text-transform: uppercase; letter-spacing: 0.2px;
        }

        .price-row { margin: 1px 0; }

        .trust-row {
          opacity: 0.7; transform: scale(0.75);
          transform-origin: left; margin-top: -2px;
        }
      `}</style>
    </div>
  );
}
