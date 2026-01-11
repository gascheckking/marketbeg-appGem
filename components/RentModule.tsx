// // components/RentModule.tsx
"use client";

export default function RentModule() {
  return (
    <div style={{
        position: "relative", overflow: "hidden", borderRadius: "28px",
        border: "1px solid rgba(29, 185, 84, 0.2)", background: "#050505",
        marginTop: "20px", height: "150px", cursor: "pointer",
        boxShadow: "0 15px 35px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
      <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9))",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(4px)", padding: "20px",
        }}>
        <div style={{
            background: "var(--karma-green)", color: "#000", fontSize: "8px",
            padding: "4px 12px", borderRadius: "12px", fontWeight: 900,
            marginBottom: "10px", letterSpacing: "1.5px",
          }}>
          RELEASE Q1 2027
        </div>
        <h3 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-1px" }}>KARMA RENT</h3>
        <p style={{ fontSize: "10px", marginTop: "8px", textAlign: "center", maxWidth: "220px", lineHeight: "1.4", opacity: 0.5, fontWeight: 700 }}>
          Hyr ut dina premium-prylar istället för att sälja. Säkrat via Karma Shield.
        </p>
      </div>
      <div style={{ display: "flex", gap: "30px", opacity: 0.1, fontSize: "35px", position: "absolute", zIndex: 1 }}>
        <span>🎸</span><span>📸</span><span>🚲</span><span>🎮</span>
      </div>
    </div>
  );
}
