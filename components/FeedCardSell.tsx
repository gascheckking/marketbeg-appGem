// // components/FeedCardSell.tsx
"use client";
import { useRouter } from "next/navigation";

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
    <div className="karma-card" onClick={() => router.push(`/listing/${id}`)}>
      <div className="image-container">
        <div className="match-badge">{matchScore}% MATCH</div>
        <span className="emoji-large">
          {title.toLowerCase().includes("phone") ? "📱" : "👟"}
        </span>
      </div>

      <div className="card-info">
        <h4 className="title">{title}</h4>
        <div className="price-row">
          <span className="price">{price.toLocaleString("sv-SE")} kr</span>
          <span className="trust-dot"></span>
          <span className="trust">{trust}% Trust</span>
        </div>
      </div>

      <style jsx>{`
        .karma-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: 15px;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: 1px solid var(--border);
        }
        .karma-card:hover {
          transform: translateY(-5px);
          border-color: rgba(29, 185, 84, 0.3);
        }
        .image-container {
          aspect-ratio: 1/1;
          background: #000;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .match-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--karma-green);
          color: #000;
          font-size: 9px;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 8px;
        }
        .emoji-large { font-size: 45px; }
        .title {
          margin: 0;
          font-size: 15px;
          font-weight: 900;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }
        .price { font-size: 13px; font-weight: 800; color: #fff; opacity: 0.6; }
        .trust-dot { width: 3px; height: 3px; background: var(--karma-green); border-radius: 50%; }
        .trust { font-size: 11px; color: var(--karma-green); font-weight: 900; }
      `}</style>
    </div>
  );
}
