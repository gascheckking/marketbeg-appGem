// --- components/FeedCardSell.tsx ---
"use client";
import { useRouter } from "next/navigation";

type Props = { id: string; title: string; price: number; trust: number; matchScore?: number; };

export default function FeedCardSell({ id, title, price, trust }: Props) {
  const router = useRouter();

  return (
    <div className="mini-card" onClick={() => router.push(`/listing/${id}`)}>
      <div className="status-dots">
        <div className="dot purple"></div>
        <div className="dot mint"></div>
      </div>
      
      <div className="card-visual">
        {title.toLowerCase().includes('phone') ? '📱' : 
         title.toLowerCase().includes('max') ? '🎧' : 
         title.toLowerCase().includes('tee') ? '👕' : '📦'}
      </div>
      
      <div className="card-info">
        <h4 className="card-title">{title}</h4>
        <div className="card-price">{price} kr</div>
        <div className="card-trust">● TRUST {trust}%</div>
      </div>

      <style jsx>{`
        .mini-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px;
          position: relative;
          cursor: pointer;
        }
        .status-dots {
          position: absolute; top: 5px; left: 5px; display: flex; gap: 3px;
        }
        .dot { width: 4px; height: 4px; border-radius: 50%; }
        .purple { background: var(--neon-purple); }
        .mint { background: var(--neon-mint); }
        .card-visual {
          aspect-ratio: 1/1;
          display: flex; align-items: center; justifyContent: center;
          font-size: 20px; background: rgba(0,0,0,0.2); border-radius: 4px;
        }
        .card-info { marginTop: 6px; }
        .card-title {
          margin: 0; font-size: 8px; font-weight: 800; color: #eee;
          white-space: nowrap; overflow: hidden; textOverflow: ellipsis;
        }
        .card-price { font-size: 10px; font-weight: 900; color: #fff; margin: 2px 0; }
        .card-trust { font-size: 6px; font-weight: 900; color: var(--neon-mint); opacity: 0.6; }
      `}</style>
    </div>
  );
}
