import { useClock, useActiveSection } from "../lib/hooks";
import { NAV_ITEMS, PROFILE, TICKER_ITEMS } from "../lib/data";
import { IconBox } from "./Icons";

/* ---------------- Top bar: status WMS ---------------- */
export function TopBar() {
  const { time, date } = useClock();
  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-rim bg-steel/95 backdrop-blur-sm">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#profil" className="flex items-center gap-2.5" aria-label="Kembali ke atas">
          <span className="grid h-6 w-6 place-items-center bg-safety text-coal">
            <IconBox size={15} />
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-paper">
            WMS://ANDRIAN-PERMANA<span className="hidden text-fog sm:inline">.CV</span>
          </span>
        </a>
        <div className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-fog md:flex">
          <span className="animate-led inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_8px_rgba(95,214,138,0.9)]" />
          <span className="text-mint">SISTEM ONLINE</span>
          <span aria-hidden>·</span>
          <span>SIAP KERJA — SHIFT BERIKUTNYA</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em]">
          <span className="hidden text-fog sm:inline">{date}</span>
          <span className="bg-plate px-2 py-0.5 font-semibold text-hazard tabular-nums">
            {time} WIB
          </span>
        </div>
      </div>
      <div className="hazard-strip h-[5px] w-full opacity-90" aria-hidden />
    </header>
  );
}

/* ---------------- Rail navigasi dock ---------------- */
export function SideRail() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));
  return (
    <nav
      aria-label="Navigasi bagian"
      className="no-print fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col xl:flex"
    >
      {NAV_ITEMS.map((item, i) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex items-center gap-0 border-l-2 py-2.5 pl-3 pr-4 font-mono text-[10px] font-semibold tracking-[0.22em] transition-all duration-300 ${
              isActive
                ? "border-safety bg-plate text-safety"
                : "border-rim text-fog hover:border-fog hover:text-paper"
            }`}
          >
            <span className={isActive ? "text-hazard" : "text-fog"}>
              0{i + 1}
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "ml-2 max-w-[130px] opacity-100"
                  : "ml-0 max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[130px] group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

/* ---------------- Conveyor ticker ---------------- */
export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="no-print relative overflow-hidden border-y border-rim bg-steel">
      <div className="flex h-[38px] items-center" aria-hidden>
        <div className="animate-marquee marquee-hover flex w-max items-center">
          {items.map((it, i) => (
            <span
              key={i}
              className="flex items-center font-mono text-[12px] font-semibold tracking-[0.28em] text-paper/85"
            >
              <span className="px-5">{it}</span>
              <span className="text-safety">
                <IconBox size={13} />
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="animate-belt h-[6px] w-full border-t border-rim bg-plate" aria-hidden />
    </div>
  );
}

/* ---------------- Footer kecil di atas dock ---------------- */
export function ManifestFooter() {
  return (
    <footer className="border-t border-rim bg-coal">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 font-mono text-[10px] tracking-[0.18em] text-fog sm:flex-row sm:px-6">
        <p>
          MANIFEST <span className="text-safety">{PROFILE.manifestNo}</span> — DITERBITKAN DARI
          GUDANG PRIBADI
        </p>
        <p className="flex items-center gap-2">
          <span className="animate-led inline-block h-1.5 w-1.5 rounded-full bg-mint" />
          © 2026 ANDRIAN PERMANA DIHARJA — {PROFILE.coordinates}
        </p>
      </div>
    </footer>
  );
}
