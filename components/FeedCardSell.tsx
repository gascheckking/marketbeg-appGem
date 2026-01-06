// // components/FeedCardSell.tsx
"use client";
import { useRouter } from "next/navigation";

type Props = { 
  id: string; title: string; price: number; 
  trust: number; matchScore?: number; loop?: number;
};

export default function FeedCardSell({ id, title, price, trust, matchScore = 95, loop = 1 }: Props) {
  const router = useRouter();

  return (
    <div className="mini-card" onClick={() => router.push(`/listing/${id}`)}>
      {/* MATCH & LOOP TAGS */}
      <div className="badge-row">
        <div className="match-tag">{matchScore}% MATCH</div>
        <div className="loop-tag">LOOP #{loop}</div>
      </div>
      
      <div className="card-visual">
        <span className="emoji">{title.toLowerCase().includes('phone') ? '📱' : '👕'}</span>
      </div>
      
      <div className="card-content">
        <h4 className="item-name">{title}</h4>
        <div className="price">{price} KR</div>
        <div className="trust-indicator">
          <div className="trust-bar"><div style={{ width: `${trust}%` }}></div></div>
          <span>Tillit {trust}%</span>
        </div>
      </div>

      <style jsx>{`
        .mini-card { background: rgba(255,255,255,0.02); border: 1px solid #111; border-radius: 16px; padding: 8px; position: relative; }
        .badge-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .match-tag { font-size: 7px; fontWeight: 900; color: var(--neon-mint); border: 1px solid var(--neon-mint); padding: 2px 5px; border-radius: 4px; }
        .loop-tag { font-size: 7px; fontWeight: 900; opacity: 0.4; }
        .card-visual { aspect-ratio: 1/1; background: #080808; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
        .emoji { font-size: 24px; }
        .item-name { margin: 0; font-size: 9px; font-weight: 900; color: #fff; text-transform: uppercase; }
        .price { font-size: 12px; font-weight: 900; color: var(--neon-purple); margin: 2px 0; }
        .trust-indicator { display: flex; align-items: center; gap: 5px; margin-top: 4px; }
        .trust-bar { flex: 1; height: 2px; background: #222; border-radius: 1px; }
        .trust-bar div { height: 100%; background: var(--neon-mint); }
        .trust-indicator span { font-size: 7px; font-weight: 900; opacity: 0.4; }
      `}</style>
    </div>
  );
}
