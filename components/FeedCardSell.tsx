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

export default function FeedCardSell({
  id,
  title,
  price,
  trust,
  matchScore = 95
}: Props) {
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
          background: #121212;
          border-radius: 12px;
          padding: 12px;
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .karma-card:hover {
          background: #181818;
        }
        .image-container {
          aspect-ratio: 1/1;
          background: #282828;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .match-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #1DB954;
          color: #000;
          font-size: 8px;
          font-weight: 900;
          padding: 4px 8px;
          border-radius: 10px;
        }
        .emoji-large {
          font-size: 40px;
        }
        .title {
          margin: 0;
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }
        .price {
          font-size: 12px;
          font-weight: 700;
          color: #b3b3b3;
        }
        .trust-dot {
          width: 3px;
          height: 3px;
          background: #b3b3b3;
          border-radius: 50%;
        }
        .trust {
          font-size: 11px;
          color: #b3b3b3;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
