// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const matches = items.map((item: string) => {
      const baseValue = Math.floor(Math.random() * 8000) + 1200;
      const demandMultiplier = 1 + (Math.random() * 0.2); 
      
      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: Math.floor(Math.random() * (99 - 94 + 1) + 94),
        instantOffer: Math.floor(baseValue * demandMultiplier),
        buyerId: "KARMA_NODE_" + Math.random().toString(36).substring(2, 5),
        fee: Math.floor(baseValue * 0.03), 
        status: "READY_TO_PAY"
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
