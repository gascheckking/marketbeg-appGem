// // app/api/match/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    const matches = items.map((item: string) => {
      // Vi simulerar ett marknadsvärde baserat på efterfrågan
      const baseValue = Math.floor(Math.random() * 5000) + 80; // Startar på 80:- som dina tröjor
      const demandPressure = Math.random(); // 0 till 1
      
      let type = "SALE";
      let suggestion = "LÄGG UT TILL FÖRSÄLJNING";
      let karmaBonus = 10;

      // Logik för Direktbyte (Swap) - Om efterfrågan är hög
      if (demandPressure > 0.8) {
        type = "SWAP_MATCH";
        suggestion = "PERFEKT BYTE FUNNET 🔄";
        karmaBonus = 30;
      } 
      // Logik för Giveaway - Endast om värdet är extremt lågt (t.ex. under 50kr)
      else if (baseValue < 50) {
        type = "GIVEAWAY";
        suggestion = "GE BORT (BOOSTA TRUST)";
        karmaBonus = 50;
      }

      return {
        itemId: Math.random().toString(36).substring(2, 11).toUpperCase(),
        itemName: item,
        matchScore: Math.floor(Math.random() * (99 - 92 + 1) + 92),
        instantOffer: baseValue,
        type: type,
        suggestedAction: suggestion,
        karmaPoints: karmaBonus,
        swapOptions: [
          { item: "Liknande i stl upp", diff: 0 },
          { item: "Premium-märke", diff: Math.floor(baseValue * 0.5) }
        ],
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
