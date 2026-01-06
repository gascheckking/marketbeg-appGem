// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { items } = body;

  const matches = items.map((item: string) => {
    const baseValue = Math.floor(Math.random() * 5000) + 500;
    return {
      itemId: Math.random().toString(36).substr(2, 9),
      itemName: item,
      matchScore: Math.floor(Math.random() * (99 - 92 + 1) + 92),
      instantOffer: baseValue,
      buyerId: "buyer_" + Math.random().toString(36).substr(2, 5),
      fee: Math.floor(baseValue * 0.05)
    };
  });

  return NextResponse.json({
    success: true,
    matches,
    totalLiquidity: matches.reduce((acc: number, curr: any) => acc + curr.instantOffer, 0),
    timestamp: new Date().toISOString()
  });
}
