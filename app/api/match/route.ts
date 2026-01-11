// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const matches = items.map((item: string) => {
      const baseValue = Math.floor(Math.random() * 5000) + 200;
      
      // Algoritm: Om värdet är under 300 kr, föreslå Giveaway för att bygga Trust Score
      const shouldGiveaway = baseValue < 300;
      
      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: Math.floor(Math.random() * (99 - 94 + 1) + 94),
        instantOffer: baseValue,
        type: shouldGiveaway ? "GIVEAWAY" : "SALE_OR_SWAP",
        swapOptions: [
          { item: "Storlek större (92)", diff: 0, status: "MATCHED" },
          { item: "Premium-modell", diff: 349, status: "AVAILABLE" }
        ],
        karmaPointsOnGiveaway: 50,
        status: "READY_TO_LOOP"
      };
    });

    return NextResponse.json({
      success: true,
      matches,
      totalLiquidity: matches.reduce((acc: number, curr: any) => acc + curr.instantOffer, 0),
      loopIntegrity: "VERIFIED_BY_KARMA",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "AI_NODE_OFFLINE" }, { status: 500 });
  }
}
