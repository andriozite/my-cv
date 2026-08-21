import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function base(p: P) {
  const { size = 24, ...rest } = p;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    ...rest,
  };
}

/** paket kardus dengan garis lakban */
export function IconBox(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M3.5 7.5 12 3.5l8.5 4v9l-8.5 4-8.5-4v-9Z" />
      <path d="M3.5 7.5 12 11.5l8.5-4" />
      <path d="M12 11.5v9" />
      <path d="M7.75 5.5l8.5 4" />
    </svg>
  );
}

/** jalur sortasi: satu paket pecah jadi dua jalur */
export function IconSort(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="9" y="2.5" width="6" height="5" />
      <path d="M12 7.5v3.5" />
      <path d="M5 17.5v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="m3.5 16 1.5 2 1.5-2" />
      <path d="m17.5 16 1.5 2 1.5-2" />
      <path d="M5 18v3.5M19 18v3.5" />
    </svg>
  );
}

/** rak gudang dengan dus */
export function IconRack(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M3 2.5v19M21 2.5v19" />
      <path d="M3 9h18M3 15.5h18" />
      <rect x="5.5" y="4.5" width="4.5" height="4.5" />
      <rect x="13.5" y="4.5" width="4.5" height="4.5" />
      <rect x="8.5" y="11" width="4.5" height="4.5" />
      <rect x="5.5" y="17.5" width="4.5" height="4" />
      <rect x="13.5" y="17.5" width="4.5" height="4" />
    </svg>
  );
}

/** return: dus dengan panah balik */
export function IconReturn(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="8" y="9" width="12" height="11" />
      <path d="M8 12.5h12" />
      <path d="M12.5 9V5.5" />
      <path d="M9 6.5 4.5 5.5 6 9.5" />
      <path d="M4.5 5.5C4 8 4 12 6.5 14" />
    </svg>
  );
}

/** tim: dua helm proyek */
export function IconTeam(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4 13.5a5 5 0 0 1 3-4.58V7a2 2 0 0 1 4 0v1.92a5 5 0 0 1 3 4.58" />
      <path d="M3 13.5h16v2.5H3z" />
      <path d="M9 6.5v-2" />
      <path d="M17.5 16v1.5a3 3 0 0 0 3 3" />
      <path d="M14.6 10.2a4.2 4.2 0 0 1 6.9 3.3" />
    </svg>
  );
}

/** perisai K3 dengan cek */
export function IconShield(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 2.5 5 5v6.5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V5l-7-2.5Z" />
      <path d="m8.5 11.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

/** scanner PDA dengan sinar */
export function IconScanner(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="7" y="2.5" width="10" height="17" />
      <path d="M9.5 5.5h5M9.5 8h5M9.5 10.5h3" />
      <path d="M9 16.5h.01M12 16.5h.01" />
      <path d="M17 21.5h3v-4" />
      <path d="m18.5 20 4-4" />
    </svg>
  );
}

/** truk line haul */
export function IconTruck(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M2.5 6h12v10h-12z" />
      <path d="M14.5 9h4l3 3.5V16h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
      <path d="M5 9.5h5" />
    </svg>
  );
}

/** forklift kecil */
export function IconForklift(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M3 15V7h6l2 5h3v3" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="12.5" cy="17" r="1.6" />
      <path d="M14 15h6.5" />
      <path d="M20.5 4v13.5" />
      <path d="M20.5 15.5H17" />
    </svg>
  );
}

export function IconPhone(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M5 3.5h4l1.5 5-2.2 1.6a12.5 12.5 0 0 0 5.6 5.6L15.5 13.5l5 1.5v4a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3 5.6 2 2 0 0 1 5 3.5Z" />
    </svg>
  );
}

export function IconMail(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6.5L21 7" />
    </svg>
  );
}

export function IconPin(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 21.5S5 14.8 5 9.5a7 7 0 0 1 14 0c0 5.3-7 12-7 12Z" />
      <rect x="9.5" y="7" width="5" height="5" />
    </svg>
  );
}

export function IconPrint(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M7 8V2.5h10V8" />
      <rect x="3.5" y="8" width="17" height="8" />
      <path d="M7 13h10v8.5H7z" />
      <path d="M6.5 10.8h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function IconArrow(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

export function IconCheck(p: P) {
  return (
    <svg {...base(p)}>
      <path d="m4 12.5 5.5 5.5L20 6.5" />
    </svg>
  );
}

export function IconClockGear(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

/** penanda butir: persegi kecil */
export function MarkerSquare({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`mt-[0.55em] inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-safety ${className}`}
    />
  );
}
