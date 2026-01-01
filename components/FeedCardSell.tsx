"use client";

import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = {
  id: string;
  title: string;
  price: number;
  trust: number;
};

export default function FeedCardSell({ id, title, price, trust }: Props) {
  const router = useRouter();

  return (
    <div className="card" onClick={() => router.push(`/listing/${id}`)}>
      {/* Placeholder för produktbild */}
      <div className="card-image-placeholder">
        📷
      </div>
      
      <h3>{title}</h3>
      <PriceTag price={price} />
      
      <div style={{ marginTop: '12px' }}>
        <TrustBadge score={trust} />
      </div>
    </div>
  );
}
