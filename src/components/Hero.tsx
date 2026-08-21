import { PROFILE, STATS } from "../lib/data";
import { useScramble } from "../lib/hooks";
import { Barcode, StatBlock } from "./ui";
import {
  IconArrow,
  IconBox,
  IconForklift,
  IconMail,
  IconPhone,
  IconPin,
  IconPrint,
  IconTruck,
} from "./Icons";

export function Hero() {
  const l1 = useScramble(PROFILE.firstName, 150, 850);
  const l2 = useScramble(PROFILE.lastName, 420, 850);
  const l3 = useScramble(PROFILE.thirdName, 690, 850);

  return (
    <section
      id="profil"
      className="bg-grid-dark relative overflow-hidden bg-coal pb-16 pt-28 scroll-mt-14 sm:pt-32"
    >
      {/* watermark raksasa */}
      <span
        aria-hidden
        className="text-outline-paper font-display pointer-events-none absolute -right-10 top-16 select-none text-[24rem] font-black leading-none opacity-70"
      >
        AP
      </span>

      {/* dus melayang */}
      <span aria-hidden className="animate-floaty absolute left-[6%] top-40 text-rim [--tilt:-8deg]" style={{ animationDelay: "0.4s" }}>
        <IconBox size={44} />
      </span>
      <span aria-hidden className="animate-floaty absolute right-[30%] top-28 hidden text-rim [--tilt:10deg] lg:block" style={{ animationDelay: "1.4s" }}>
        <IconForklift size={52} />
      </span>
      <span aria-hidden className="animate-floaty absolute bottom-24 left-[38%] hidden text-rim [--tilt:6deg] lg:block" style={{ animationDelay: "2.2s" }}>
        <IconTruck size={46} />
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ------- kiri: identitas ------- */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.24em] text-fog">
              <span className="hazard-strip h-[8px] w-12" aria-hidden />
              <span>MANIFEST NO. {PROFILE.manifestNo}</span>
              <span aria-hidden className="text-safety">//</span>
              <span className="text-hazard">MUATAN: 1 OPERATOR LOGISTIK</span>
            </div>

            <h1 className="font-display mt-6 font-black uppercase leading-[0.86] tracking-tight">
              <span className="block text-[clamp(3.6rem,10vw,8.6rem)] text-paper">{l1}</span>
              <span className="block text-[clamp(3.6rem,10vw,8.6rem)] text-paper">
                {l2}
                <span className="text-safety">.</span>
              </span>
              <span className="block text-[clamp(3.6rem,10vw,8.6rem)] text-safety">{l3}</span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="border border-safety bg-safety/10 px-3.5 py-2 font-mono text-[12px] font-semibold tracking-[0.2em] text-safety">
                {PROFILE.role.toUpperCase()}
              </span>
              <span className="border border-rim px-3.5 py-2 font-mono text-[12px] tracking-[0.2em] text-fog">
                LAZADA LOGISTICS — 6+ THN
              </span>
            </div>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-fog">
              Memimpin lantai sortasi yang memproses{" "}
              <strong className="font-semibold text-paper">15.000–20.000+ paket setiap hari</strong>{" "}
              dengan akurasi <strong className="font-semibold text-hazard">99,9%</strong> — dari
              inbound, manajemen gudang, sampai reverse logistics. Siap diberangkatkan ke
              perusahaan Anda.
            </p>

            {/* kontak cepat */}
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[12px] tracking-[0.08em] text-paper/80">
              <li>
                <a href={PROFILE.phoneHref} className="group flex items-center gap-2 transition-colors hover:text-safety">
                  <IconPhone size={15} className="text-safety" />
                  <span className="border-b border-transparent transition-colors group-hover:border-safety">
                    {PROFILE.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-2 transition-colors hover:text-safety">
                  <IconMail size={15} className="text-safety" />
                  <span className="border-b border-transparent transition-colors group-hover:border-safety">
                    {PROFILE.email}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconPin size={15} className="text-safety" />
                {PROFILE.location}
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#rekam"
                className="btn-industrial flex items-center gap-3 border-2 border-safety bg-safety px-6 py-3.5 font-mono text-[12px] font-bold tracking-[0.2em] text-coal"
              >
                LIHAT REKAM JEJAK
                <IconArrow size={16} />
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-industrial no-print flex items-center gap-3 border-2 border-paper/40 px-6 py-3.5 font-mono text-[12px] font-bold tracking-[0.2em] text-paper hover:border-paper"
              >
                <IconPrint size={16} />
                CETAK CV
              </button>
            </div>
          </div>

          {/* ------- kanan: label paket ------- */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md -rotate-1 transition-transform duration-500 hover:rotate-0">
              {/* lakban */}
              <span aria-hidden className="tape absolute -top-3 left-10 z-10 h-7 w-28 -rotate-6" />
              <span aria-hidden className="tape absolute -bottom-3 right-8 z-10 h-6 w-20 rotate-3" />

              <div className="dashed-cut bg-carton relative border-2 border-ink bg-paper p-6 text-ink shadow-[12px_14px_0_rgba(18,19,22,0.55)] sm:p-7">
                {/* stempel */}
                <span className="stamp text-stampred absolute -top-5 right-4 z-10 text-xl font-black tracking-widest">
                  6+ THN
                </span>

                <div className="flex items-center justify-between font-mono text-[10px] font-bold tracking-[0.22em]">
                  <span className="bg-ink px-2 py-1 text-paper">PARCEL LABEL</span>
                  <span className="text-stampred">PRIORITAS ▲ TINGGI</span>
                </div>

                <div className="my-5 border-t-2 border-dashed border-ink/30" />

                <dl className="space-y-4 font-mono text-[12px]">
                  <div>
                    <dt className="text-[10px] font-bold tracking-[0.24em] text-inksoft">DARI / FROM</dt>
                    <dd className="mt-1.5 space-y-1 text-[13px] font-semibold leading-snug">
                      <p className="font-display text-2xl font-black tracking-wide">{PROFILE.name}</p>
                      <p>{PROFILE.role}</p>
                      <p className="text-inksoft">{PROFILE.phone}</p>
                      <p className="break-all text-inksoft">{PROFILE.email}</p>
                      <p className="text-inksoft">{PROFILE.hub}</p>
                    </dd>
                  </div>
                  <div className="border-t-2 border-dashed border-ink/30 pt-4">
                    <dt className="text-[10px] font-bold tracking-[0.24em] text-inksoft">TUJUAN / TO</dt>
                    <dd className="mt-1.5 text-[13px] font-semibold leading-snug">
                      <p>HR DEPARTMENT — PERUSAHAAN ANDA</p>
                      <p className="text-inksoft">DOCK PENERIMAAN — SEGERA</p>
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 border-t-2 border-dashed border-ink/30 pt-5">
                  <div className="flex items-end justify-between gap-3">
                    <Barcode seed={PROFILE.manifestNo} height={44} withScan className="h-11 flex-1 text-ink" />
                    <span className="stamp text-stampred shrink-0 text-sm font-black">99,9% OK</span>
                  </div>
                  <p className="mt-2 font-mono text-[10px] font-semibold tracking-[0.3em] text-inksoft">
                    APD-2026-0187 • DEPOT JAWA BARAT • BERAT: 6 THN EXP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- pita statistik ---------------- */
export function StatsBand() {
  return (
    <section aria-label="Statistik kunci" className="border-b border-rim bg-steel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <StatBlock key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
