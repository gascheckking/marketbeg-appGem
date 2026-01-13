// // app/wishlist/page.tsx
"use client";
import React from 'react';
import FeedCardSell from '@/components/FeedCardSell';

export default function WishlistPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '24px' }}>Sparat</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <FeedCardSell title="Sparad Tröja" price={120} trust={98} />
      </div>
    </div>
  );
}
