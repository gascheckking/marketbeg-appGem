// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const matches = items.map((item: string) => {
      const baseValue = Math.floor(Math.random() * 5000) + 200;
      const isHighDemand = Math.random() > 0.7; // Simulerar hög efterfrågan
      
      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: isHighDemand ? 99 : Math.floor(Math.random() * (98 - 90) + 90),
        instantOffer: baseValue,
        // AI avgör: Giveaway om lågt värde, annars Swap eller Cash
        type: baseValue < 300 ? "GIVEAWAY" : (isHighDemand ? "SWAP_MATCH" : "CASH_OFFER"),
        suggestedAction: isHighDemand ? "DIREKTBYTE TILLGÄNGLIGT" : "SÄLJ TILL VALVET",
        karmaBonus: isHighDemand ? 150 : 50
      };
    });

    return NextResponse.json({
      success: true,
      matches,
      node: "STOCKHOLM_HUB_01",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "AI_OFFLINE" }, { status: 500 });
  }
}
