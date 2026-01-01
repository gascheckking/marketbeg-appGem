"use client";

import { useRouter } from "next/navigation";
import PriceTag from "./PriceTag";
import TrustBadge from "./TrustBadge";

type Props = {
  id: string;
  title: string;
  price: number;
  trust: number;
  tag?: string;
};

export default function FeedCardSell({ id, title, price, trust, tag }: Props) {
  const router = useRouter();

  return (
    <div className="card" onClick={() => router.push(`/listing/${id}`)}>
      {tag && <span className="badge">{tag}</span>}
      <h3>{title}</h3>
      <PriceTag price={price} />
      <TrustBadge score={trust} />
    </div>
  );
}
