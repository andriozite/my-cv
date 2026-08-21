import { useMemo, type ReactNode } from "react";
import { useInView, useCountUp, usePRM } from "../lib/hooks";
import type { Stat } from "../lib/data";

/* ---------------- Reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal-base ${inView ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Barcode ---------------- */
export function Barcode({
  seed,
  height = 46,
  className = "",
  withScan = false,
}: {
  seed: string;
  height?: number;
  className?: string;
  withScan?: boolean;
}) {
  const bars = useMemo(() => {
    const out: { x: number; w: number }[] = [];
    let x = 0;
    const s = seed.repeat(3);
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      const w = (c % 3) + 1;
      if (i % 2 === 0) out.push({ x, w });
      x += w + ((c >> 2) % 2) + 1;
    }
    return { out, width: x };
  }, [seed]);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${bars.width} ${height}`}
        preserveAspectRatio="none"
        className="block h-full w-full"
        aria-hidden
      >
        {bars.out.map((b, i) => (
          <rect key={i} x={b.x} y={0} width={b.w} height={height} fill="currentColor" />
        ))}
      </svg>
      {withScan && (
        <span
          aria-hidden
          className="animate-scan pointer-events-none absolute top-[-6px] bottom-[-6px] w-[2px] bg-laser shadow-[0_0_10px_2px_rgba(255,46,46,0.65)]"
        />
      )}
    </div>
  );
}

/* ---------------- Section header (plang dock) ---------------- */
export function SectionHeader({
  dock,
  title,
  meta,
  dark = true,
}: {
  dock: string;
  title: string;
  meta: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="hazard-strip h-[10px] w-14 shrink-0" aria-hidden />
        <span
          className={`font-mono text-[11px] font-semibold tracking-[0.25em] ${
            dark ? "text-safety" : "text-safetydim"
          }`}
        >
          {dock}
        </span>
        <span
          className={`h-px flex-1 ${dark ? "bg-rim" : "bg-ink/20"}`}
          aria-hidden
        />
        <span
          className={`font-mono text-[10px] tracking-[0.2em] ${
            dark ? "text-fog" : "text-inksoft"
          }`}
        >
          {meta}
        </span>
      </div>
      <h2
        className={`font-display mt-4 text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

/* ---------------- Stat ---------------- */
export function StatBlock({ stat, index }: { stat: Stat; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const val = useCountUp(stat.value, inView);
  const reduced = usePRM();
  const shown = reduced || inView ? val : 0;
  const text =
    stat.decimals != null
      ? shown.toLocaleString("id-ID", {
          minimumFractionDigits: stat.decimals,
          maximumFractionDigits: stat.decimals,
        })
      : Math.round(shown).toLocaleString("id-ID");

  return (
    <div
      ref={ref}
      className={`group relative border-rim px-5 py-7 transition-colors duration-300 hover:bg-plate sm:px-7 ${
        index < 5 ? "border-b" : ""
      } ${index % 2 === 0 ? "sm:border-r" : ""} ${
        index < 4 ? "sm:border-b" : "sm:border-b-0"
      } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"} ${
        index < 3 ? "lg:border-b" : "lg:border-b-0"
      }`}
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-safety transition-transform duration-300 group-hover:scale-y-100"
      />
      <p className="font-display text-5xl font-black leading-none text-paper transition-colors duration-300 group-hover:text-safety md:text-6xl">
        {stat.prefix ?? ""}
        {text}
        <span className="text-safety">{stat.suffix ?? ""}</span>
      </p>
      <p className="font-mono mt-3 text-[11px] font-semibold tracking-[0.22em] text-hazard">
        {stat.label}
      </p>
      <p className="mt-1 text-sm text-fog">{stat.sub}</p>
    </div>
  );
}

/* ---------------- Meter bar ---------------- */
export function Meter({
  name,
  level,
  active,
  delay = 0,
}: {
  name: string;
  level: number;
  active: boolean;
  delay?: number;
}) {
  return (
    <div className="group/meter">
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <span className="text-[15px] font-medium text-paper transition-colors group-hover/meter:text-hazard">
          {name}
        </span>
        <span className="font-mono text-xs font-semibold text-safety">
          {level}%
        </span>
      </div>
      <div className="relative h-[9px] w-full overflow-hidden border border-rim bg-coal">
        {/* takaran grid di track */}
        <span
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 calc(10% - 1px), #34383f calc(10% - 1px) 10%)",
          }}
        />
        <span
          className="bar-fill absolute inset-y-0 left-0 bg-safety"
          style={{
            width: active ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
