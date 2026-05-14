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
  description: string;
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
    description:
      "Boost your earnings with Standard. Watch short videos for just 20 minutes a day and receive up to $10 over 30 days.",
  },
  prime: {
    name: "Prime Boost",
    img: "/img/boost-prime.png",
    price: "$6.18",
    income: "up to $20",
    rarity: "PRIME",
    paidViewing: "40 min / day",
    incomePerMonth: "Up to $20 / month",
    description:
      "Step up your game with Prime Boost. Earn up to $20 per month with the same daily 20-minute viewing habit.",
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
    description:
      "The most powerful boost available. Earn up to $169 per month by watching content for just 20 minutes a day.",
  },
};

const BUY_BTN_BG =
  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 328 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23g)\\'/><defs><radialGradient id=\\'g\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(32.8 -5.2 10 12 0 52)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')";

function useCountdown(initial = 5079) {
  const [secs, setSecs] = useState(initial);
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(secs / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((secs % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

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
        <svg className="shrink-0 size-[14px]" fill="white" viewBox="0 0 14 14">
          <path d="M7.64 2.22 4.5 5.36l3.14 3.14V2.22zm0 9.56 3.14-3.14-3.14-3.14v6.28zM2.5 5l5-5h1V6l3-3 1 1-3.5 3.5L12 11l-1 1-3-3v6h-1L2.5 10l3.5-3.5L2.5 5z" />
        </svg>
        <svg className="shrink-0 h-[14px] w-[15px]" fill="none" viewBox="0 0 17 14" stroke="white" strokeWidth="2" strokeLinecap="round">
          <circle cx="8.5" cy="12.5" r="1" fill="white" stroke="none" />
          <path d="M4.5 9.5c1.1-1.1 2.6-1.8 4-1.8s2.9.7 4 1.8" />
          <path d="M1.5 6.5c1.9-1.9 4.4-3 7-3s5.1 1.1 7 3" />
        </svg>
        <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]">
          <span className="absolute font-['Roboto:Regular',sans-serif] text-[6px] text-white" style={{ fontVariationSettings: "'wdth' 100", top: 0, left: 0 }}>5G</span>
          <svg className="absolute block inset-0 size-full" viewBox="0 0 18 16" fill="white">
            <rect x="0" y="10" width="3" height="6" rx="1" />
            <rect x="5" y="7" width="3" height="9" rx="1" />
            <rect x="10" y="4" width="3" height="12" rx="1" />
            <rect x="15" y="0" width="3" height="16" rx="1" />
          </svg>
        </div>
        <svg className="shrink-0 h-[11px] w-[18.5px]" viewBox="0 0 19.5 12" fill="none" stroke="white" strokeWidth="1">
          <rect x="0.5" y="0.5" width="16" height="11" rx="2" />
          <rect x="2" y="2" width="12" height="8" rx="1" fill="white" stroke="none" />
          <path d="M17 4v4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function NavBar({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute left-0 top-[24px] w-full h-[64px] flex items-center justify-between z-10">
      <button
        onClick={onBack}
        className="flex items-center pl-[16px] w-[128px] bg-transparent border-0 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-white text-center tracking-[0.14px] whitespace-nowrap">
        Boost
      </p>
      <div className="flex items-center justify-end pr-[16px] w-[128px]">
        <div
          className="flex items-center justify-center rounded-[16px] cursor-pointer"
          style={{ width: 40, height: 40, background: "rgba(22,22,22,0.95)" }}
        >
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M14 2l6 7-6 7M20 9H8M8 9a5 5 0 0 0-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface BoostDetailProps {
  boost: BoostType;
  onBack: () => void;
  onBoostClick?: (b: BoostType) => void;
}

export default function BoostDetail({ boost, onBack }: BoostDetailProps) {
  const cfg = BOOSTS[boost];
  const timer = useCountdown(5079);
  const [specsExpanded, setSpecsExpanded] = useState(false);

  const specs = [
    { label: "Rarity", value: cfg.rarity },
    { label: "Paid viewing", value: cfg.paidViewing },
    { label: "Income", value: cfg.incomePerMonth },
    { label: "Lifetime", value: "30 days" },
  ];

  return (
    <div className="bg-[#161616] relative size-full overflow-hidden">
      {/* Top background */}
      <div className="absolute left-0 top-0 w-full overflow-hidden" style={{ height: 200, zIndex: 0 }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/img/bg-top.png" />
      </div>

      <StatusBar />
      <NavBar onBack={onBack} />

      {/* Scrollable content */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden"
        style={{ top: 88, scrollbarWidth: "none", paddingBottom: 110 } as React.CSSProperties}
      >
        <style>{`.boost-detail-scroll::-webkit-scrollbar{display:none}`}</style>
        <div className="boost-detail-scroll flex flex-col gap-[20px] px-[16px] pt-[4px]">

          {/* Hero image */}
          <div className="relative rounded-[24px] overflow-hidden w-full" style={{ aspectRatio: "1/1" }}>
            <img src={cfg.img} alt={cfg.name} className="w-full h-full object-cover" />
          </div>

          {/* Name */}
          <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] text-[16px] text-white tracking-[0.16px]">
            {cfg.name}
          </p>

          {/* Price row */}
          <div className="flex items-center gap-[8px] flex-wrap">
            <p
              className="font-['Russo_One:Regular',sans-serif] leading-[28px] text-[24px] tracking-[0.24px] whitespace-nowrap"
              style={{ color: "white" }}
            >
              {cfg.price}
            </p>
            {cfg.oldPrice && (
              <p
                className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] text-[14px] line-through"
                style={{ color: "#6E6E6E" }}
              >
                {cfg.oldPrice}
              </p>
            )}
            {cfg.discount && cfg.hasTimer && (
              <div
                className="flex items-center px-[8px] py-[3px] rounded-[6px]"
                style={{ background: "rgba(238,68,68,1)" }}
              >
                <p className="font-['Russo_One:Regular',sans-serif] text-white text-[13px] leading-[16px] whitespace-nowrap">
                  {cfg.discount} | {timer}
                </p>
              </div>
            )}
          </div>

          {/* Big income heading */}
          <p className="font-['Russo_One:Regular',sans-serif] leading-[32px] text-[28px] text-white tracking-[0.28px]">
            Possible income {cfg.income}
          </p>

          {/* Description */}
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] text-[14px] tracking-[0.14px]" style={{ color: "rgba(255,255,255,0.8)" }}>
            {cfg.description}
          </p>

          {/* Specs list */}
          <div className="flex flex-col">
            {specs.map((spec, i) => {
              const isLast = i === specs.length - 1;
              const isLifetime = spec.label === "Lifetime";
              return (
                <div key={spec.label}>
                  <div className="flex flex-col gap-[4px] py-[12px]">
                    <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] text-[16px] text-white tracking-[0.16px]">
                      {spec.label}
                    </p>
                    <div className="flex items-center justify-between">
                      {isLifetime && !specsExpanded ? (
                        <p
                          className="font-['Montserrat:Medium',sans-serif] font-medium leading-[18px] text-[14px]"
                          style={{
                            color: "transparent",
                            background: "linear-gradient(90deg, #fff 60%, rgba(255,255,255,0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {spec.value}
                        </p>
                      ) : (
                        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[18px] text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                          {spec.value}
                        </p>
                      )}
                      {isLifetime && (
                        <button
                          onClick={() => setSpecsExpanded((v) => !v)}
                          className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] bg-transparent border-0 cursor-pointer whitespace-nowrap underline"
                          style={{ color: "#6EFF46" }}
                        >
                          {specsExpanded ? "collapse" : "expand"}
                        </button>
                      )}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.1)" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed bottom BUY button */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
        style={{
          background: "linear-gradient(to bottom, rgba(22,22,22,0) 0%, rgba(22,22,22,1) 40%)",
          padding: "60px 16px 40px",
          pointerEvents: "none",
        }}
      >
        <div
          className="flex items-center justify-center rounded-[20px] cursor-pointer"
          style={{ height: 52, backgroundImage: BUY_BTN_BG, pointerEvents: "auto" }}
        >
          <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[#161616] text-[16px] text-center tracking-[0.96px] uppercase">
            Buy
          </p>
        </div>
      </div>
    </div>
  );
}
