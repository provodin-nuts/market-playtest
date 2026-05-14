import { useState, useEffect } from "react";

export type BoostType = "standard" | "prime" | "elite";

interface BoostConfig {
  name: string;
  img: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  hasTimer?: boolean;
  income: string;
  rarity: string;
  paidViewing: string;
  incomePerMonth: string;
}

const BOOSTS: Record<BoostType, BoostConfig> = {
  standard: {
    name: "Standard Boost",
    img: "/img/boost-standard.png",
    price: "$3.0",
    income: "up to $10",
    rarity: "STANDARD",
    paidViewing: "40 min / day",
    incomePerMonth: "Up to $10 / month",
  },
  prime: {
    name: "Prime Boost",
    img: "/img/boost-prime.png",
    price: "$6.18",
    income: "up to $20",
    rarity: "PRIME",
    paidViewing: "40 min / day",
    incomePerMonth: "Up to $20 / month",
  },
  elite: {
    name: "Elite Boost",
    img: "/img/boost-elite.png",
    price: "$41.2",
    oldPrice: "$51.5",
    discount: "-20%",
    hasTimer: true,
    income: "up to $169",
    rarity: "ELITE",
    paidViewing: "40 min / day",
    incomePerMonth: "Up to $169 / month",
  },
};

const OTHER_BOOSTS: Record<BoostType, BoostType[]> = {
  standard: ["prime", "elite", "standard"],
  prime: ["standard", "elite", "prime"],
  elite: ["standard", "prime", "elite"],
};

function useCountdown(initial = 5079) {
  const [secs, setSecs] = useState(initial);
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(secs / 3600).toString().padStart(2, "0");
  const m = Math.floor((secs % 3600) / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

const BUY_BTN_BG = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 328 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23g)\\'/><defs><radialGradient id=\\'g\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(32.8 -5.2 10 12 0 52)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')";

function StatusBar() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-full z-10">
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
        <span className="ml-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
      </div>
      <div className="-translate-y-1/2 absolute flex gap-[8px] items-center justify-end right-[16px] top-1/2 w-[89px]">
        <svg className="shrink-0 size-[14px]" fill="white" viewBox="0 0 14 14"><path d="M7.64 2.22 4.5 5.36l3.14 3.14V2.22zm0 9.56 3.14-3.14-3.14-3.14v6.28zM2.5 5l5-5h1V6l3-3 1 1-3.5 3.5L12 11l-1 1-3-3v6h-1L2.5 10l3.5-3.5L2.5 5z"/></svg>
        <svg className="shrink-0 h-[14px] w-[15px]" fill="none" viewBox="0 0 17 14" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="8.5" cy="12.5" r="1" fill="white" stroke="none"/><path d="M4.5 9.5c1.1-1.1 2.6-1.8 4-1.8s2.9.7 4 1.8"/><path d="M1.5 6.5c1.9-1.9 4.4-3 7-3s5.1 1.1 7 3"/></svg>
        <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]">
          <span className="absolute font-['Roboto:Regular',sans-serif] text-[6px] text-white" style={{ fontVariationSettings: "'wdth' 100", top: 0, left: 0 }}>5G</span>
          <svg className="absolute block inset-0 size-full" viewBox="0 0 18 16" fill="white"><rect x="0" y="10" width="3" height="6" rx="1"/><rect x="5" y="7" width="3" height="9" rx="1"/><rect x="10" y="4" width="3" height="12" rx="1"/><rect x="15" y="0" width="3" height="16" rx="1"/></svg>
        </div>
        <svg className="shrink-0 h-[11px] w-[18.5px]" viewBox="0 0 19.5 12" fill="none" stroke="white" strokeWidth="1"><rect x="0.5" y="0.5" width="16" height="11" rx="2"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white" stroke="none"/><path d="M17 4v4" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
    </div>
  );
}

function NavBar({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute left-0 top-[24px] w-full h-[64px] flex items-center justify-between z-10 px-[0px]">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center pl-[16px] w-[128px] bg-transparent border-0 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {/* Title */}
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-white text-center tracking-[0.14px] whitespace-nowrap">
        Boost
      </p>
      {/* Share button */}
      <div className="flex items-center justify-end pr-[16px] w-[128px]">
        <div
          className="flex items-center justify-center rounded-[16px] cursor-pointer"
          style={{ width: 40, height: 40, background: "rgba(22,22,22,0.95)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98M21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RaffleBanner() {
  return (
    <div
      className="flex items-center justify-between shrink-0 w-full cursor-pointer"
      style={{
        background: "linear-gradient(90deg, #6206F9 0%, #AB9BFD 100%)",
        borderRadius: 100,
        padding: "4px 4px 4px 67px",
        height: 46,
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Ticket images (left overflow) */}
      <div className="absolute" style={{ left: 0, top: "50%", transform: "translateY(-50%)", width: 72, height: 68, pointerEvents: "none" }}>
        <img src="/img/ticket-large.png" alt="" className="absolute" style={{ width: 55, height: 55, left: 4, top: "50%", transform: "translateY(-50%)" }} />
        <img src="/img/ticket-small.png" alt="" className="absolute" style={{ width: 43, height: 43, left: 28, top: "50%", transform: "translateY(-50%) translateY(4px)" }} />
        <div className="absolute flex items-center justify-center rounded-full" style={{ background: "white", width: 32, height: 14, right: 0, bottom: 6 }}>
          <p className="font-['Russo_One:Regular',sans-serif] text-[10px] leading-none" style={{ color: "#140132" }}>100</p>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[0px]" style={{ lineHeight: 1.2 }}>
        <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[13px] text-white leading-[16px]">Buy and join</p>
        <p className="font-['Russo_One:Regular',sans-serif] text-[16px] text-white leading-[20px] tracking-[0.16px]">the raffle!</p>
      </div>

      {/* Arrow */}
      <div
        className="flex items-center justify-center shrink-0 rounded-full ml-auto"
        style={{ width: 38, height: 38, background: "#140132" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

interface MiniCardProps {
  boost: BoostType;
  onClick: () => void;
}

function MiniCard({ boost, onClick }: MiniCardProps) {
  const cfg = BOOSTS[boost];
  return (
    <div
      className="shrink-0 rounded-[16px] overflow-hidden cursor-pointer flex flex-col"
      style={{ width: 160, background: "rgba(53,39,102,0.5)" }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative" style={{ height: 160 }}>
        <img src={cfg.img} alt={cfg.name} className="w-full h-full object-cover" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[45px]"
          style={{ background: "linear-gradient(to top, rgba(20,1,50,0.7) 0%, rgba(20,1,50,0.7) 50%, rgba(20,1,50,0) 100%)" }}
        />
        <p className="absolute bottom-[4px] left-[8px] font-['Montserrat:Medium',sans-serif] text-[11px] text-white">{cfg.rarity}</p>
      </div>

      {/* Price row */}
      <div className="flex items-center justify-between px-[8px] py-[6px]">
        <div className="flex items-center gap-[4px]">
          <p className="font-['Russo_One:Regular',sans-serif] text-[14px] text-white leading-[16px]">{cfg.price}</p>
          {cfg.oldPrice && (
            <p className="font-['Montserrat:Medium',sans-serif] text-[11px] line-through" style={{ color: "#6E6E6E" }}>{cfg.oldPrice}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-[2px] px-[8px] pb-[8px]">
        <p className="font-['Montserrat:Medium',sans-serif] text-[11px] text-white leading-[13px]">Buy and get</p>
        <p className="font-['Russo_One:Regular',sans-serif] text-[13px] text-white leading-[15px]">{cfg.income}</p>
      </div>

      {/* Buy button */}
      <div className="px-[8px] pb-[10px] mt-auto">
        <div
          className="flex items-center justify-center rounded-[12px] w-full h-[32px]"
          style={{ backgroundImage: BUY_BTN_BG }}
        >
          <p className="font-['Russo_One:Regular',sans-serif] text-[11px] text-[#161616] tracking-[0.6px] uppercase">buy now</p>
        </div>
      </div>
    </div>
  );
}

interface BoostDetailProps {
  boost: BoostType;
  onBack: () => void;
  onBoostClick: (b: BoostType) => void;
}

export default function BoostDetail({ boost, onBack, onBoostClick }: BoostDetailProps) {
  const cfg = BOOSTS[boost];
  const timer = useCountdown(5079);
  const [specsExpanded, setSpecsExpanded] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);
  const otherBoosts = OTHER_BOOSTS[boost];

  const specs = [
    { label: "Rarity", value: cfg.rarity },
    { label: "Paid viewing", value: cfg.paidViewing },
    { label: "Income", value: cfg.incomePerMonth },
    { label: "Lifetime", value: "30 days" },
  ];

  return (
    <div className="bg-[#161616] relative size-full overflow-hidden">
      {/* Top background gradient */}
      <div className="absolute left-0 top-0 w-full overflow-hidden" style={{ height: 200, zIndex: 0 }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/img/bg-top.png" />
      </div>

      <StatusBar />
      <NavBar onBack={onBack} />

      {/* Scrollable content */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden"
        style={{ top: 88, scrollbarWidth: "none", paddingBottom: 100 } as React.CSSProperties}
      >
        <style>{`.detail-scroll::-webkit-scrollbar{display:none}`}</style>
        <div className="detail-scroll flex flex-col gap-[16px] px-[16px] pt-[4px]">

          {/* === Main boost card === */}
          <div className="flex flex-col gap-[16px]">

            {/* Hero image */}
            <div className="relative rounded-[24px] overflow-hidden w-full" style={{ aspectRatio: "1/1" }}>
              <img src={cfg.img} alt={cfg.name} className="w-full h-full object-cover" />
            </div>

            {/* Name */}
            <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] text-[18px] text-white tracking-[0.18px]">
              {cfg.name}
            </p>

            {/* Price + Tags row */}
            <div className="flex flex-col gap-[8px]">
              {/* Price */}
              <div className="flex items-center gap-[8px]">
                <p
                  className="font-['Russo_One:Regular',sans-serif] leading-[28px] text-[24px] tracking-[0.24px] whitespace-nowrap"
                  style={{ color: cfg.oldPrice ? "#EE4444" : "white" }}
                >
                  {cfg.price}
                </p>
                {cfg.oldPrice && (
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] text-[12px] line-through self-end mb-[4px]" style={{ color: "#6E6E6E" }}>
                    {cfg.oldPrice}
                  </p>
                )}
                {cfg.discount && cfg.hasTimer && (
                  <div
                    className="flex items-center gap-[4px] px-[8px] py-[2px] rounded-[6px]"
                    style={{ background: "rgba(238,68,68,1)" }}
                  >
                    <p className="font-['Russo_One:Regular',sans-serif] text-white text-[13px] leading-[16px] whitespace-nowrap">
                      {cfg.discount} | {timer}
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-[6px]">
                {/* Raffle tag */}
                <div
                  className="flex items-center gap-[4px] px-[8px] py-[2px] rounded-full"
                  style={{ background: "#6EFF46" }}
                >
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M2 6h10M2 6L5 3M2 6l3 3" stroke="#140132" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="10" y="2" width="2" height="8" rx="1" fill="#140132"/>
                  </svg>
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[12px] leading-[14px] tracking-[0.06px]" style={{ color: "#140132" }}>
                    raffle
                  </p>
                </div>
                {/* 99 left tag */}
                <div
                  className="flex items-center px-[8px] py-[2px] rounded-[6px]"
                  style={{ background: "linear-gradient(90deg, #0094FF 0%, #9E0091 100%)" }}
                >
                  <p className="font-['Russo_One:Regular',sans-serif] text-white text-[12px] leading-[16px]">99 left</p>
                </div>
              </div>
            </div>

            {/* Raffle banner */}
            <RaffleBanner />

            {/* Possible income */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-['Russo_One:Regular',sans-serif] text-white leading-[24px] text-[20px] tracking-[0.2px]">
                Possible income {cfg.income}
              </p>
              <p
                className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[13px] tracking-[0.8px] uppercase"
                style={{ color: "#6EFF46" }}
              >
                IN 20 MINUTES A DAY
              </p>
            </div>

            {/* Description */}
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white tracking-[0.14px]">
              Boost your earnings with this boost. Earn by watching short videos for just 20 minutes a day and receive{" "}
              <span style={{ color: "#6EFF46" }}>{cfg.income}</span> over 30 days.
            </p>

            {/* Specs table */}
            <div
              className="flex flex-col rounded-[16px] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {specs.map((spec, i) => {
                const isLast = i === specs.length - 1;
                const isLifetime = spec.label === "Lifetime";
                if (isLifetime && !specsExpanded) {
                  return (
                    <div key={spec.label} className="flex flex-col px-[16px] py-[10px]">
                      <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[12px] leading-[14px]" style={{ color: "#b9b9b9" }}>
                        {spec.label}
                      </p>
                      <div className="flex items-center justify-between">
                        <p
                          className="font-['Russo_One:Regular',sans-serif] text-[14px] leading-[20px] text-white"
                          style={{
                            background: "linear-gradient(90deg, #fff 70%, rgba(255,255,255,0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {spec.value}
                        </p>
                        <button
                          onClick={() => setSpecsExpanded(true)}
                          className="font-['Montserrat:Medium',sans-serif] font-medium text-[13px] bg-transparent border-0 cursor-pointer whitespace-nowrap"
                          style={{ color: "#6EFF46" }}
                        >
                          expand
                        </button>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={spec.label}>
                    <div className="flex flex-col px-[16px] py-[10px]">
                      <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[12px] leading-[14px]" style={{ color: "#b9b9b9" }}>
                        {spec.label}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-['Russo_One:Regular',sans-serif] text-[14px] leading-[20px] text-white">{spec.value}</p>
                        {isLifetime && specsExpanded && (
                          <button
                            onClick={() => setSpecsExpanded(false)}
                            className="font-['Montserrat:Medium',sans-serif] font-medium text-[13px] bg-transparent border-0 cursor-pointer whitespace-nowrap"
                            style={{ color: "#6EFF46" }}
                          >
                            collapse
                          </button>
                        )}
                      </div>
                    </div>
                    {!isLast && <div className="mx-[16px] h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* === Mini Market section === */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] text-[16px] text-white tracking-[0.16px]">
              Want to earn even more? Choose these boosts 👇
            </p>
            {/* Horizontal scroll */}
            <div
              className="w-full"
              style={{ overflowX: "auto", scrollbarWidth: "none" } as React.CSSProperties}
              onScroll={(e) => {
                const el = e.currentTarget;
                const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth);
                setCurrentDot(Math.round(pct * 2));
              }}
            >
              <style>{`.mini-market::-webkit-scrollbar{display:none}`}</style>
              <div className="mini-market flex gap-[8px]" style={{ width: "max-content" }}>
                {otherBoosts.map((b, i) => (
                  <MiniCard key={i} boost={b} onClick={() => onBoostClick(b)} />
                ))}
              </div>
            </div>
            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-[4px]">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full transition-all"
                  style={{
                    width: currentDot === i ? 8 : 6,
                    height: currentDot === i ? 8 : 6,
                    background: currentDot === i ? "white" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom Buy button */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
        style={{
          background: "linear-gradient(to bottom, rgba(22,22,22,0) 0%, rgba(22,22,22,1) 33%)",
          padding: "80px 16px 40px",
          pointerEvents: "none",
        }}
      >
        <div
          className="flex items-center justify-center rounded-[20px] cursor-pointer"
          style={{
            height: 52,
            backgroundImage: BUY_BTN_BG,
            pointerEvents: "auto",
          }}
        >
          <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[#161616] text-[14px] text-center tracking-[0.84px] uppercase">
            Buy
          </p>
        </div>
      </div>
    </div>
  );
}
