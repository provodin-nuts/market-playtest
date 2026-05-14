import { useState } from "react";
import type { BoostType } from "../BoostDetail/BoostDetail";

interface BoostPurchaseConfig {
  name: string;
  img: string;
  price: number;
  discount?: number;
  description: string;
}

const BOOST_DATA: Record<BoostType, BoostPurchaseConfig> = {
  standard: {
    name: "Standard Boost",
    img: "/img/boost-standard.png",
    price: 3.0,
    description: "Watch 40 min / day · Up to $10 / month",
  },
  prime: {
    name: "Prime Boost",
    img: "/img/boost-prime.png",
    price: 6.18,
    description: "Watch 40 min / day · Up to $20 / month",
  },
  elite: {
    name: "Elite Boost",
    img: "/img/boost-elite.png",
    price: 51.5,
    discount: 20,
    description: "Watch 40 min / day · Up to $169 / month",
  },
};

const PAY_BTN_BG =
  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 328 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23g)\\'/><defs><radialGradient id=\\'g\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(32.8 -5.2 10 12 0 52)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')";

const CHECKOUT_BG =
  "linear-gradient(135deg, #FFB3C6 0%, #FFFFFF 35%, #B3E8FF 70%, #C3FFC3 100%)";

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
        className="flex items-center pl-[16px] w-[64px] bg-transparent border-0 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[14px] text-white text-center tracking-[0.14px] whitespace-nowrap">
        Purchase
      </p>
      <div className="flex items-center justify-end pr-[16px] w-[64px]">
        <div
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 32, height: 32, background: "rgba(255,255,255,0.1)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />
            <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface PurchaseScreenProps {
  boost: BoostType;
  onBack: () => void;
}

export default function PurchaseScreen({ boost, onBack }: PurchaseScreenProps) {
  const cfg = BOOST_DATA[boost];
  const [promoCode, setPromoCode] = useState("");

  const discountAmount = cfg.discount ? (cfg.price * cfg.discount) / 100 : 0;
  const total = cfg.price - discountAmount;

  return (
    <div className="bg-[#161616] relative size-full overflow-hidden">
      <StatusBar />
      <NavBar onBack={onBack} />

      {/* Scrollable content */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden"
        style={{ top: 88, scrollbarWidth: "none", paddingBottom: 140 } as React.CSSProperties}
      >
        <div className="flex flex-col gap-[16px] px-[16px] pt-[4px]">

          {/* Checkout card */}
          <div
            className="flex items-center rounded-[20px] overflow-hidden"
            style={{ background: CHECKOUT_BG, minHeight: 100, padding: "0 0 0 0" }}
          >
            <img
              src={cfg.img}
              alt={cfg.name}
              className="shrink-0 object-cover rounded-[20px]"
              style={{ width: 100, height: 100 }}
            />
            <div className="flex flex-col justify-center px-[16px] py-[12px] flex-1">
              <p className="font-['Russo_One:Regular',sans-serif] text-[16px] leading-[20px] text-[#161616] tracking-[0.16px]">
                {cfg.name}
              </p>
              <p className="font-['Russo_One:Regular',sans-serif] text-[20px] leading-[24px] text-[#161616] tracking-[0.2px] mt-[4px]">
                ${total.toFixed(2)}
              </p>
              <p
                className="font-['Montserrat:Medium',sans-serif] font-medium text-[11px] leading-[14px] mt-[4px]"
                style={{ color: "rgba(22,22,22,0.6)" }}
              >
                {cfg.description}
              </p>
            </div>
          </div>

          {/* Payment by section */}
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Russo_One:Regular',sans-serif] text-[14px] leading-[20px] text-white tracking-[0.14px]">
              Payment by
            </p>
            {/* Currency cell */}
            <div
              className="flex items-center justify-between rounded-[16px] px-[16px]"
              style={{ background: "#242424", height: 56 }}
            >
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-white">
                Currency
              </p>
              <div className="flex items-center gap-[8px]">
                <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  USD
                </p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Method cell */}
            <div
              className="flex items-center justify-between rounded-[16px] px-[16px]"
              style={{ background: "#242424", height: 56 }}
            >
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-white">
                Method
              </p>
              <div className="flex items-center gap-[8px]">
                <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Card
                </p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* OR divider */}
          <div className="flex items-center gap-[12px]">
            <div className="flex-1 h-[1px]" style={{ background: "rgba(255,255,255,0.12)" }} />
            <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[12px] leading-[16px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              OR
            </p>
            <div className="flex-1 h-[1px]" style={{ background: "rgba(255,255,255,0.12)" }} />
          </div>

          {/* Payment chips */}
          <div className="flex gap-[8px]">
            {[
              { label: "USDT", img: "/img/chip-usdt.png" },
              { label: "Binance", img: "/img/chip-binance.png" },
              { label: "LEE", img: "/img/chip-lee.png" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center justify-center rounded-[16px] cursor-pointer flex-1"
                style={{ background: "#323232", height: 52 }}
              >
                <img src={chip.img} alt={chip.label} style={{ width: 52, height: 26, objectFit: "contain" }} />
              </div>
            ))}
          </div>

          {/* Risk-free guarantee banner */}
          <div
            className="rounded-[16px] overflow-hidden"
            style={{ height: 70 }}
          >
            <img src="/img/banner-risk.png" alt="Risk-free guarantee" className="w-full h-full object-cover" />
          </div>

          {/* Promo code input */}
          <div
            className="flex items-center rounded-[20px] px-[16px]"
            style={{ background: "#323232", height: 56 }}
          >
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter a promo code"
              className="flex-1 bg-transparent border-0 outline-none font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-white placeholder:text-[rgba(255,255,255,0.35)]"
            />
            {promoCode && (
              <button
                onClick={() => setPromoCode("")}
                className="bg-transparent border-0 cursor-pointer p-0 ml-[8px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Details section */}
          <div className="flex flex-col gap-[0px]">
            <p className="font-['Russo_One:Regular',sans-serif] text-[14px] leading-[20px] text-white tracking-[0.14px] mb-[12px]">
              Details
            </p>

            {/* Price row */}
            <div className="flex items-center justify-between py-[10px]">
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                Price
              </p>
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-white">
                ${cfg.price.toFixed(2)}
              </p>
            </div>
            <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Discount row (Elite only) */}
            {cfg.discount && (
              <>
                <div className="flex items-center justify-between py-[10px]">
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Discount
                  </p>
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "#6EFF46" }}>
                    -{cfg.discount}% (-${discountAmount.toFixed(2)})
                  </p>
                </div>
                <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              </>
            )}

            {/* Fee row */}
            <div className="flex items-center justify-between py-[10px]">
              <div className="flex items-center gap-[6px]">
                <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Fee
                </p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" />
                  <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-white">
                $0
              </p>
            </div>
            <div className="w-full h-[1px]" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Total row */}
            <div className="flex items-center justify-between py-[10px]">
              <p className="font-['Montserrat:Medium',sans-serif] font-medium text-[14px] leading-[20px]" style={{ color: "rgba(255,255,255,0.7)" }}>
                Total
              </p>
              <p className="font-['Russo_One:Regular',sans-serif] text-[16px] leading-[20px] tracking-[0.16px]" style={{ color: "#6EFF46" }}>
                ${total.toFixed(2)} USD
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Fixed bottom PAY button */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col gap-[12px] justify-end"
        style={{
          background: "linear-gradient(to bottom, rgba(22,22,22,0) 0%, rgba(22,22,22,1) 30%)",
          padding: "40px 16px 32px",
          pointerEvents: "none",
        }}
      >
        <div
          className="flex items-center justify-center rounded-[20px] cursor-pointer"
          style={{ height: 52, backgroundImage: PAY_BTN_BG, pointerEvents: "auto" }}
          onClick={() => {
            window.location.href = `https://earn-v2-combined.pages.dev?activated=true&boost=${boost}`;
          }}
        >
          <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] text-[#161616] text-[16px] text-center tracking-[0.96px] uppercase">
            Pay ${total.toFixed(2)}
          </p>
        </div>
        <p
          className="font-['Montserrat:Medium',sans-serif] font-medium text-[10px] leading-[14px] text-center"
          style={{ color: "rgba(255,255,255,0.35)", pointerEvents: "auto" }}
        >
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer" style={{ color: "rgba(255,255,255,0.55)" }}>Terms of Service</span>
          {" "}and{" "}
          <span className="underline cursor-pointer" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
