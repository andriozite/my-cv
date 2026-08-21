import { CERTS, EDUCATION, LANGUAGES, PROFILE } from "../lib/data";
import { Barcode, Reveal, SectionHeader } from "./ui";
import {
  IconArrow,
  IconBox,
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
  IconPrint,
  IconTruck,
} from "./Icons";

/* ---------------- Pendidikan & Sertifikasi ---------------- */
export function Credentials() {
  return (
    <section id="kredensial" className="bg-grid-dark scroll-mt-14 border-t border-rim bg-coal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          dock="DOCK 04 — DOKUMEN & SERTIFIKAT"
          title="Kredensial"
          meta="ARSIP TERVERIFIKASI"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* pendidikan */}
          <Reveal className="lg:col-span-5">
            <div className="lift-card relative h-full border border-rim bg-steel p-6 sm:p-7">
              <span aria-hidden className="tape absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2" />
              <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
                ARSIP 01 — PENDIDIKAN
              </p>
              <h3 className="font-display mt-4 text-4xl font-black uppercase leading-[0.95] text-paper">
                {EDUCATION.school}
              </h3>
              <p className="mt-3 inline-block bg-hazard px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.2em] text-coal">
                {EDUCATION.year}
              </p>
              <p className="mt-4 text-[16px] font-semibold leading-relaxed text-paper">
                {EDUCATION.major}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fog">{EDUCATION.note}</p>
            </div>
          </Reveal>

          {/* sertifikasi — tag gantung */}
          <div className="lg:col-span-7">
            <p className="mb-5 font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
              ARSIP 02 — SERTIFIKASI ({CERTS.length} TAG)
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {CERTS.map((c, i) => (
                <Reveal key={c.code} delay={i * 130}>
                  <div className="lift-card group relative h-full border border-rim bg-plate p-5 pt-8 text-center hover:border-safety">
                    {/* lubang tag */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-rim bg-coal transition-colors group-hover:border-safety"
                    />
                    <p className="font-mono text-[10px] font-bold tracking-[0.24em] text-safety">
                      {c.code}
                    </p>
                    <h4 className="font-display mt-2 text-[22px] font-black uppercase leading-tight text-paper">
                      {c.title}
                    </h4>
                    <p className="mt-2 font-mono text-[10px] tracking-[0.16em] text-fog">
                      {c.issuer.toUpperCase()}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 border border-mint/40 px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.2em] text-mint">
                      <IconCheck size={11} /> TERVERIFIKASI
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* bahasa */}
            <Reveal delay={160}>
              <div className="mt-8 border border-rim bg-steel p-6 sm:p-7">
                <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
                  ARSIP 03 — BAHASA
                </p>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  {LANGUAGES.map((l) => (
                    <div key={l.name} className="group">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-display text-3xl font-black uppercase text-paper transition-colors group-hover:text-safety">
                          {l.name}
                        </h4>
                        <span className="bg-safety px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.18em] text-coal">
                          {l.level}
                        </span>
                      </div>
                      <div className="mt-3 flex gap-1.5" role="img" aria-label={`${l.name}: ${l.cells} dari 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-3 flex-1 border ${
                              i < l.cells
                                ? "border-safety bg-safety"
                                : "border-rim bg-coal"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mt-2.5 text-sm text-fog">{l.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Dock kontak ---------------- */
export function ContactDock() {
  return (
    <section id="kontak" className="relative scroll-mt-14 overflow-hidden border-t border-rim bg-steel">
      <div className="hazard-strip h-[8px] w-full" aria-hidden />
      {/* watermark */}
      <span
        aria-hidden
        className="text-outline-paper font-display pointer-events-none absolute -bottom-16 right-0 select-none text-[16rem] font-black leading-none opacity-60"
      >
        OUT
      </span>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.26em] text-hazard">
              <IconTruck size={18} />
              DOCK 05 — AREA OUTBOUND
            </p>
            <h2 className="font-display mt-5 text-6xl font-black uppercase leading-[0.88] text-paper sm:text-7xl md:text-8xl">
              Kirim penawaran
              <span className="block text-safety">ke dock ini.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fog">
              Satu muatan tersedia: operator logistik dengan 6+ tahun jam terbang,
              siap masuk shift berikutnya. Respon cepat, tanpa transit.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={PROFILE.phoneHref}
                className="btn-industrial flex items-center gap-3 border-2 border-safety bg-safety px-6 py-4 font-mono text-[12px] font-bold tracking-[0.18em] text-coal"
              >
                <IconPhone size={17} />
                {PROFILE.phone}
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-industrial flex items-center gap-3 border-2 border-paper/50 px-6 py-4 font-mono text-[12px] font-bold tracking-[0.18em] text-paper hover:border-paper"
              >
                <IconMail size={17} />
                KIRIM EMAIL
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-industrial no-print flex items-center gap-3 border-2 border-rim px-6 py-4 font-mono text-[12px] font-bold tracking-[0.18em] text-fog hover:border-paper hover:text-paper"
              >
                <IconPrint size={17} />
                CETAK CV
              </button>
            </div>

            <p className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.18em] text-fog">
              <span className="flex items-center gap-2">
                <IconPin size={14} className="text-safety" />
                {PROFILE.location.toUpperCase()} — {PROFILE.coordinates}
              </span>
              <span className="flex items-center gap-2">
                <span className="animate-led inline-block h-2 w-2 rounded-full bg-mint" />
                STATUS: MENERIMA PENAWARAN
              </span>
            </p>
          </div>

          {/* kartu slot pengiriman */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative border-2 border-ink bg-paper p-6 text-ink shadow-[12px_14px_0_rgba(18,19,22,0.5)] sm:p-7">
              <span className="stamp text-stampred absolute -top-4 left-6 text-lg font-black">
                SIAP KIRIM
              </span>
              <div className="flex items-center justify-between font-mono text-[10px] font-bold tracking-[0.22em]">
                <span className="bg-ink px-2 py-1 text-paper">SLOT PENGIRIMAN</span>
                <span className="flex items-center gap-1.5 text-mint">
                  <IconArrow size={13} /> 1 SLOT TERSEDIA
                </span>
              </div>
              <dl className="mt-6 space-y-3.5 font-mono text-[12px]">
                {[
                  { k: "MUATAN", v: "1 × TEAM LEADER LOGISTIK" },
                  { k: "KONDISI", v: "PRIMA — 6+ TAHUN PEMAKAIAN" },
                  { k: "ESTIMASI TIBA", v: "SEGERA SETELAH OFFERING" },
                  { k: "ASURANSI", v: "ZERO ACCIDENT — 2 TAHUN" },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between gap-4 border-b border-dashed border-ink/25 pb-2.5">
                    <dt className="font-bold tracking-[0.2em] text-inksoft">{r.k}</dt>
                    <dd className="text-right font-semibold">{r.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-center gap-3">
                <IconBox size={30} className="shrink-0 text-ink" />
                <Barcode seed="OUTBOUND-DEPOK-APD187" height={38} className="h-9 flex-1 text-ink" />
              </div>
              <p className="mt-2 font-mono text-[9px] font-semibold tracking-[0.28em] text-inksoft">
                SCAN UNTUK MEMPROSES • TTD: A. PERMANA
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
