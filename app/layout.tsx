// --- app/layout.tsx ---
// (Inuti din style-tagg i layouten, ersätt .mobile-nav och .mobile-tab med detta)

.mobile-nav {
  display: flex; position: fixed; bottom: 0; left: 0; right: 0;
  height: 80px; background: rgba(0,0,0,0.9); backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255,255,255,0.05); padding: 0 10px;
  align-items: center; justify-content: space-around; z-index: 1000;
}
.mobile-tab { 
  display: flex; flex-direction: column; align-items: center; 
  text-decoration: none; color: #444; gap: 4px;
}
.mobile-tab.active { color: #fff; }
.mobile-tab span { font-size: 20px; }
.mobile-tab small { font-size: 7px; font-weight: 900; text-transform: uppercase; }

.mobile-tab-center { 
  width: 56px; height: 56px; background: var(--neon-purple); border-radius: 18px; 
  display: flex; align-items: center; justify-content: center; color: #fff; 
  font-size: 30px; text-decoration: none; margin-top: -30px;
  box-shadow: 0 10px 25px rgba(157, 78, 221, 0.5);
  border: 4px solid #000;
}
