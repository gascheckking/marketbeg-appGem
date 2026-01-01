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
      <h3>{title}</h3>
      <PriceTag price={price} />
      <TrustBadge score={trust} />
    </div>
  );
}
