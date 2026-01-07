// components/MatchFoundOverlay.tsx
"use client";
import React from "react";
import TrustBadge from "@/components/TrustBadge";

type Props = {
  price: number;
  trust: number;
  demand: string;
  onAccept: () => void;
  onClose: () => void;
};

export default function MatchFoundOverlay({
  price,
  trust,
  demand,
  onAccept,
  onClose,
}: Props) {
  return (
    <div className="overlay-backdrop">
      <div className="overlay-card">
        <div className="overlay-eyebrow">MATCH HITTAD</div>

        <div className="overlay-price">
          {price.toLocaleString("sv-SE")} kr
        </div>

        <div className="overlay-meta">
          <TrustBadge score={trust} />
          <span className="overlay-demand">{demand}</span>
        </div>

        <p className="overlay-copy">
          En köpare med hög tillit är redo att genomföra affären direkt.
          Pengar hålls säkert tills köparen godkänt.
        </p>

        <button className="overlay-primary" onClick={onAccept}>
          Acceptera affär
        </button>

        <button className="overlay-secondary" onClick={onClose}>
          Inte nu
        </button>
      </div>

      <style jsx>{`
        .overlay-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(2, 4, 10, 0.75);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.25s ease;
        }

        .overlay-card {
          width: 100%;
          max-width: 340px;
          background: #0b0f1a;
          border-radius: 28px;
          padding: 28px 22px 24px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          animation: popIn 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.2);
        }

        .overlay-eyebrow {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--neon-purple);
          opacity: 0.9;
          margin-bottom: 12px;
        }

        .overlay-price {
          font-size: 2.4rem;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }

        .overlay-meta {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .overlay-demand {
          font-size: 9px;
          font-weight: 800;
          opacity: 0.6;
        }

        .overlay-copy {
          font-size: 11px;
          line-height: 1.6;
          opacity: 0.65;
          margin-bottom: 22px;
        }

        .overlay-primary {
          width: 100%;
          background: #fff;
          color: #000;
          border: none;
          padding: 16px;
          border-radius: 16px;
          font-weight: 900;
          font-size: 12px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .overlay-secondary {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}