// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    // Här simulerar vi Karma-motorn som matchar dina objekt mot "Wanted"-listan
    const matches = items.map((item: string) => {
      // 1. Generera ett AI-värde
      const baseValue = Math.floor(Math.random() * 5000) + 150;
      
      // 2. Kolla efterfrågan (Wanted-pressure)
      const isHighDemand = Math.random() > 0.7; 
      
      // 3. Bestäm transaktionstyp
      let type = "SALE";
      let suggestion = "SÄLJ DIREKT";
      let karmaPoints = 10;

      if (baseValue < 300) {
        // Om värdet är för lågt för att säljas med vinst -> Ge bort det!
        type = "GIVEAWAY";
        suggestion = "GE BORT (BOOSTA TRUST)";
        karmaPoints = 50; // Högre poäng för att man är snäll
      } else if (isHighDemand) {
        // Om folk letar efter just detta (Wanted) -> Föreslå Byte
        type = "SWAP_MATCH";
        suggestion = "PERFEKT BYTE FUNNET";
        karmaPoints = 25;
      }

      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: isHighDemand ? 99 : Math.floor(Math.random() * (98 - 92) + 92),
        instantOffer: baseValue,
        type: type,
        suggestedAction: suggestion,
        karmaPoints: karmaPoints,
        // Vi simulerar vad man kan byta till sig i loopen
        swapOptions: [
          { item: "Storlek större", diff: 0 },
          { item: "Premium-version", diff: baseValue * 0.2 }
        ],
        status: "READY_TO_LOOP"
      };
    });

    return NextResponse.json({
      success: true,
      matches,
      node: "KARMA_STOCKHOLM_HUB",
      totalValue: matches.reduce((acc: number, curr: any) => acc + curr.instantOffer, 0),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "AI_NODE_OFFLINE" }, { status: 500 });
  }
}
