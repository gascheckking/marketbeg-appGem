// components/FeedCardSell.tsx
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
    <div className="mini-card" onClick={() => router.push(`/listing/${id}`)}>
      <div className="badge-row">
        <span className="match-tag">{matchScore}% match</span>
      </div>

      <div className="card-visual">
        <span className="emoji">
          {title.toLowerCase().includes("phone") ? "📱" : "👕"}
        </span>
      </div>

      <div className="card-content">
        <h4 className="item-name">{title}</h4>
        <div className="price">{price.toLocaleString("sv-SE")} kr</div>
        <div className="trust">Hög tillit · {trust}%</div>
      </div>

      <style jsx>{`
        .mini-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 10px;
          cursor: pointer;
        }

        .badge-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 6px;
        }

        .match-tag {
          font-size: 7px;
          font-weight: 800;
          opacity: 0.5;
          color: var(--neon-mint);
        }

        .card-visual {
          aspect-ratio: 1/1;
          background: #080808;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .emoji {
          font-size: 22px;
        }

        .item-name {
          margin: 0;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .price {
          font-size: 13px;
          font-weight: 900;
          margin: 4px 0;
        }

        .trust {
          font-size: 8px;
          opacity: 0.45;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
