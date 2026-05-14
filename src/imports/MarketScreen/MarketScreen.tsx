const WITHDRAW_BTN = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 82 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.2 -4 4.7407 8.13 -0.0000024438 40)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')";

const ARROW_BTN = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 60 32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><defs><linearGradient id=\\'g\\' x1=\\'0\\' y1=\\'0\\' x2=\\'1\\' y2=\\'1\\'><stop offset=\\'0%\\' stop-color=\\'%23ABA9FF\\'/><stop offset=\\'100%\\' stop-color=\\'%236EFF46\\'/></linearGradient></defs><rect width=\\'60\\' height=\\'32\\' rx=\\'12\\' fill=\\'url(%23g)\\'/></svg>')";

import type { BoostType } from "../BoostDetail/BoostDetail";

interface MarketScreenProps {
  onBoostClick: (boost: BoostType) => void;
}

function StatusBar() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[360px]">
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
      <div className="-translate-y-1/2 absolute flex gap-[8px] items-center justify-end right-[16px] top-1/2 w-[89px]">
        {/* Bluetooth */}
        <svg className="shrink-0 size-[14px]" fill="white" viewBox="0 0 14 14"><path d="M7.64 2.22 4.5 5.36l3.14 3.14V2.22zm0 9.56 3.14-3.14-3.14-3.14v6.28zM2.5 5l5-5h1V6l3-3 1 1-3.5 3.5L12 11l-1 1-3-3v6h-1L2.5 10l3.5-3.5L2.5 5z"/></svg>
        {/* WiFi */}
        <svg className="shrink-0 h-[14px] w-[15px]" fill="none" viewBox="0 0 17 14" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="8.5" cy="12.5" r="1" fill="white" stroke="none"/><path d="M4.5 9.5c1.1-1.1 2.6-1.8 4-1.8s2.9.7 4 1.8"/><path d="M1.5 6.5c1.9-1.9 4.4-3 7-3s5.1 1.1 7 3"/></svg>
        {/* Signal */}
        <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]">
          <span className="absolute font-['Roboto:Regular',sans-serif] text-[6px] text-white" style={{ fontVariationSettings: "'wdth' 100", top: 0, left: 0 }}>5G</span>
          <svg className="absolute block inset-0 size-full" viewBox="0 0 18 16" fill="white"><rect x="0" y="10" width="3" height="6" rx="1"/><rect x="5" y="7" width="3" height="9" rx="1"/><rect x="10" y="4" width="3" height="12" rx="1"/><rect x="15" y="0" width="3" height="16" rx="1"/></svg>
        </div>
        {/* Battery */}
        <svg className="shrink-0 h-[11px] w-[18.5px]" viewBox="0 0 19.5 12" fill="none" stroke="white" strokeWidth="1"><rect x="0.5" y="0.5" width="16" height="11" rx="2"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white" stroke="none"/><path d="M17 4v4" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative shrink-0 w-full px-[16px]" style={{ top: 24 }}>
      <div className="bg-[rgba(22,22,22,0.8)] relative rounded-[20px] w-full">
        <div className="flex flex-row items-center justify-between pl-[8px] pr-[6px] py-[6px]">
          {/* Coins */}
          <div className="flex gap-[8px] items-center">
            <div className="flex gap-[4px] items-center">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/img/coin-doppy.png" />
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] text-[12px] text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>47.5</p>
            </div>
            <div className="flex gap-[4px] items-center">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/img/coin-lumy.png" />
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] text-[12px] text-white tracking-[0.12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>47.5</p>
            </div>
          </div>
          {/* Withdraw button */}
          <div
            className="flex h-[40px] items-center justify-center px-[16px] py-[12px] rounded-[16px] shrink-0 cursor-pointer"
            style={{ backgroundImage: WITHDRAW_BTN }}
          >
            <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[#161616] text-[12px] text-center tracking-[0.72px] uppercase whitespace-nowrap">Withdraw</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuaranteeBanner() {
  return (
    <div
      className="flex items-center justify-between gap-[4px] rounded-[28px] shrink-0 w-full cursor-pointer"
      style={{
        background: "rgba(174,154,255,0.15)",
        padding: "20px 6px 20px 20px",
      }}
    >
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-white tracking-[0.14px]">
          IF THE BOOST DOESN'T PAY OFF IN 28 DAYS?<br />
          WE'LL REFUND YOU 2X MORE!
        </p>
      </div>
      <div
        className="flex items-center justify-center shrink-0 size-[40px] rounded-full"
        style={{ background: "linear-gradient(135deg, #0095FF 0%, #2AC300 100%)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function WhyBoostBanner() {
  return (
    <div
      className="flex items-center justify-between rounded-[20px] shrink-0 w-full p-[16px] cursor-pointer"
      style={{ background: "linear-gradient(135deg, #0095FF 0%, #2AC300 100%)" }}
    >
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] text-[20px] text-white tracking-[0.2px] flex-1">
        Why buy an earnings boost
      </p>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-2">
        <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SegmentTitle({ onHistoryClick }: { onHistoryClick?: () => void }) {
  return (
    <div className="flex items-center justify-between shrink-0 w-full">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] text-[20px] text-white tracking-[0.2px]">Market</p>
      <div className="flex items-center gap-[2px] cursor-pointer" onClick={onHistoryClick}>
        <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-[#b9b9b9] tracking-[0.14px]">Purchase History</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="#b9b9b9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

const CHIPS = ["All", "Boosts", "Lootboxes", "Risk glasses", "Specials"];

function Chips({ active, onSelect }: { active: string; onSelect: (c: string) => void }) {
  return (
    <div className="shrink-0 w-full" style={{ overflowX: "auto", scrollbarWidth: "none" } as React.CSSProperties}>
      <div className="flex gap-[8px] items-center" style={{ width: "max-content", paddingLeft: 0, paddingRight: 16 }}>
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => onSelect(chip)}
            className="flex items-center justify-center px-[16px] py-[8px] rounded-[20px] shrink-0 cursor-pointer border-0 outline-none"
            style={{
              background: active === chip ? "#161616" : "#323232",
              border: active === chip ? "1.5px solid rgba(255,255,255,0.6)" : "1.5px solid transparent",
            }}
          >
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] text-[14px] text-white tracking-[0.14px] whitespace-nowrap">{chip}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

interface BoostCardProps {
  img: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  income: string;
  onClick: () => void;
}

function BoostCard({ img, name, price, oldPrice, discount, income, onClick }: BoostCardProps) {
  return (
    <div
      className="flex shrink-0 w-full rounded-[20px] overflow-hidden cursor-pointer"
      style={{ background: "linear-gradient(215deg, rgba(253,0,233,0.05) 0%, rgba(255,255,255,0.05) 40%, rgba(0,255,237,0.10) 80%)" }}
      onClick={onClick}
    >
      {/* Boost image */}
      <div className="relative shrink-0 rounded-[20px] overflow-hidden" style={{ width: 160, height: 160 }}>
        <img alt={name} className="absolute inset-0 object-cover size-full" src={img} />
      </div>
      {/* Info */}
      <div className="flex flex-col justify-between flex-1 p-[12px] min-w-0">
        {/* Price */}
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] text-[12px] text-[#b9b9b9] tracking-[0.06px] whitespace-nowrap">Price:</p>
          <div className="flex items-center gap-[6px]">
            <div className="flex flex-col gap-[1px]">
              <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] text-[20px] text-white tracking-[0.2px] whitespace-nowrap" style={{ color: oldPrice ? "#EE4444" : "white" }}>
                {price}
              </p>
              {oldPrice && (
                <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] text-[12px] tracking-[0.06px] whitespace-nowrap line-through" style={{ color: "#6E6E6E" }}>
                  {oldPrice}
                </p>
              )}
            </div>
            {discount && (
              <div
                className="flex items-center justify-center px-[6px] py-[2px] rounded-[6px] shrink-0 self-start"
                style={{ background: "linear-gradient(135deg, #0095FF 0%, #2AC300 100%)" }}
              >
                <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] text-[11px] text-white tracking-[0.4px] whitespace-nowrap">{discount}</p>
              </div>
            )}
          </div>
        </div>
        {/* Income description */}
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] text-[12px] text-white tracking-[0.06px]">
            Possible income in 30 days
          </p>
          <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-white tracking-[0.14px] whitespace-nowrap">
            {income}
          </p>
        </div>
        {/* Arrow button */}
        <div className="self-start">
          <div
            className="flex items-center justify-center rounded-[12px] cursor-pointer"
            style={{ width: 60, height: 32, backgroundImage: ARROW_BTN }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpFAB() {
  return (
    <div
      className="fixed bottom-[80px] right-[16px] flex items-center gap-[4px] px-[20px] h-[48px] rounded-[16px] cursor-pointer shadow-lg z-50"
      style={{ background: "linear-gradient(90deg, #0095FF 0%, #FD00E9 100%)" }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12a3 3 0 0 0-3 3h2a1 1 0 1 1 2 0c0 .6-.4 1-1 1.4-.6.4-1 1-1 1.6h2c0-.3.2-.5.4-.7.8-.5 1.6-1.3 1.6-2.3 0-1.7-1.3-3-3-3zm-1 6h2v2H9v-2z" fill="white"/>
      </svg>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] text-[16px] text-white tracking-[0.16px] whitespace-nowrap">Help</p>
    </div>
  );
}

function TabBar({ onTabClick }: { onTabClick?: (tab: string) => void }) {
  const tabs = [
    {
      label: "Watch",
      icon: (active: boolean) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3zm-2 15V10l7 4-7 4z" fill={active ? "#6EFF46" : "white"} />
        </svg>
      ),
    },
    {
      label: "Create",
      icon: (active: boolean) => (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3" y="3" width="22" height="22" rx="4" stroke={active ? "#6EFF46" : "white"} strokeWidth="2"/>
          <path d="M14 9v10M9 14h10" stroke={active ? "#6EFF46" : "white"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Earn",
      icon: (active: boolean) => (
        <svg width="20" height="23" viewBox="0 0 20 23" fill="none">
          <path d="M10 1L2 8h4v14h8V8h4L10 1z" fill={active ? "#6EFF46" : "white"}/>
          <circle cx="10" cy="13" r="2.5" fill={active ? "#161616" : "#161616"}/>
        </svg>
      ),
    },
    {
      label: "Market",
      icon: (active: boolean) => (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M3 6h18l-2 12H5L3 6z" stroke={active ? "#6EFF46" : "white"} strokeWidth="2" fill="none"/>
          <path d="M7 6V5a5 5 0 0 1 10 0v1" stroke={active ? "#6EFF46" : "white"} strokeWidth="2"/>
          <circle cx="9" cy="19" r="1.5" fill={active ? "#6EFF46" : "white"}/>
          <circle cx="16" cy="19" r="1.5" fill={active ? "#6EFF46" : "white"}/>
        </svg>
      ),
    },
    {
      label: "Profile",
      icon: (active: boolean) => (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
          <circle cx="10" cy="7" r="4" stroke={active ? "#6EFF46" : "white"} strokeWidth="2"/>
          <path d="M2 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={active ? "#6EFF46" : "white"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ backdropFilter: "blur(10px)", background: "rgba(22,22,22,0.22)", borderRadius: "28px 28px 0 0" }}
    >
      <div className="flex items-center justify-between px-[8px] pt-[8px]">
        {tabs.map(({ label, icon }) => {
          const isActive = label === "Market";
          return (
            <button
              key={label}
              onClick={() => onTabClick?.(label)}
              className="flex flex-1 flex-col gap-[2px] items-center justify-center py-[4px] border-0 bg-transparent outline-none cursor-pointer"
            >
              <div className="relative size-[28px] flex items-center justify-center">
                {icon(isActive)}
              </div>
              <p className={`font-['Montserrat:Medium',sans-serif] leading-[12px] text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isActive ? "text-[#6EFF46]" : "text-white"}`}>
                {label}
              </p>
            </button>
          );
        })}
      </div>
      <div className="h-[14px] relative w-full">
        <div className="absolute bg-white h-[2px] left-[148px] rounded-[32px] top-[8px] w-[64px]" />
      </div>
    </div>
  );
}

export default function MarketScreen({ onBoostClick }: MarketScreenProps) {
  const [activeChip, setActiveChip] = React.useState("All");

  const boosts = [
    {
      id: "standard" as BoostType,
      img: "/img/boost-standard.png",
      name: "Standard Boost",
      price: "$3.0",
      income: "up to $10",
    },
    {
      id: "prime" as BoostType,
      img: "/img/boost-prime.png",
      name: "Prime Boost",
      price: "$6.18",
      income: "$20",
    },
    {
      id: "elite" as BoostType,
      img: "/img/boost-elite.png",
      name: "Elite Boost",
      price: "$41.2",
      oldPrice: "$51.5",
      discount: "-20%",
      income: "up to $169",
    },
  ];

  return (
    <div className="bg-[#161616] overflow-clip relative size-full">
      {/* Background gradient top */}
      <div className="absolute left-0 top-0 w-full overflow-clip" style={{ height: 200 }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src="/img/bg-top.png" />
      </div>

      <StatusBar />
      <TopBar />

      {/* Scrollable content */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-x-hidden overflow-y-auto"
        style={{ top: 88, scrollbarWidth: "none" } as React.CSSProperties}
      >
        <style>{`.market-scroll::-webkit-scrollbar{display:none}`}</style>
        <div className="market-scroll flex flex-col gap-[16px] items-start px-[16px] pt-[12px] pb-[90px] w-full">
          <GuaranteeBanner />
          <WhyBoostBanner />
          <SegmentTitle />
          <Chips active={activeChip} onSelect={setActiveChip} />
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-white tracking-[0.14px] w-full">
            All items in one place. Don't miss limited-time offers on Boosts!
          </p>
          {boosts.map((boost) => (
            <BoostCard
              key={boost.id}
              img={boost.img}
              name={boost.name}
              price={boost.price}
              oldPrice={boost.oldPrice}
              discount={boost.discount}
              income={boost.income}
              onClick={() => onBoostClick(boost.id)}
            />
          ))}
        </div>
      </div>

      <TabBar />
      <HelpFAB />
    </div>
  );
}

import React from "react";
