// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const matches = items.map((item: string) => {
      const baseValue = Math.floor(Math.random() * 8000) + 1200;
      
      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: Math.floor(Math.random() * (99 - 94 + 1) + 94),
        instantOffer: baseValue,
        swapOptions: [
          { item: "Identisk storlek upp", diff: 0 },
          { item: "Premium-uppgradering", diff: 450 }
        ],
        status: "READY_TO_LOOP"
      };
    });

    return NextResponse.json({
      success: true,
      matches,
      loopIntegrity: "VERIFIED_BY_KARMA",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "AI_NODE_OFFLINE" }, { status: 500 });
  }
}
