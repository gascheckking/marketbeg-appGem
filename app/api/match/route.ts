import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { items, sellerTrust } = body;

  // Simulerad AI-matchningslogik
  // I en riktig miljö görs här en vektor-sökning mot databasen "Wanted"
  const matches = items.map((item: string) => ({
    itemId: Math.random().toString(36).substr(2, 9),
    itemName: item,
    matchScore: Math.floor(Math.random() * (99 - 85 + 1) + 85),
    instantOffer: Math.floor(Math.random() * 10000),
    buyerId: "user_" + Math.random().toString(36).substr(2, 5)
  }));

  return NextResponse.json({
    success: true,
    matches,
    totalLiquidity: matches.reduce((acc: number, curr: any) => acc + curr.instantOffer, 0),
    timestamp: new Date().toISOString()
  });
}
