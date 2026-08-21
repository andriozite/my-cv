import { SUMMARY, ZONES, type SkillZone } from "../lib/data";
import { useInView } from "../lib/hooks";
import { Meter, Reveal, SectionHeader } from "./ui";
import {
  IconBox,
  IconCheck,
  IconRack,
  IconReturn,
  IconScanner,
  IconShield,
  IconSort,
  IconTeam,
} from "./Icons";

const ZONE_ICONS = {
  sort: IconSort,
  rack: IconRack,
  return: IconReturn,
  team: IconTeam,
  tech: IconScanner,
};

/* ---------------- Profil ---------------- */
export function Profile() {
  return (
    <section className="bg-carton relative bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          dark={false}
          dock="DOCK 01 — DOKUMEN TERKONTROL"
          title="Profil Operator"
          meta="REV. 2026-01"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-relaxed text-ink/90 md:text-[21px] md:leading-[1.7]">
              <span
                aria-hidden
                className="font-display float-left mr-3 mt-1 text-6xl font-black leading-[0.8] text-safetydim md:text-7xl"
              >
                P
              </span>
              rofesional logistik yang termotivasi dengan pengalaman{" "}
              <strong className="font-bold">6+ tahun</strong> di operasi sortasi volume
              tinggi, manajemen gudang (<em>warehouse management</em>), dan proses return
              barang (<em>reverse logistics</em>). Rekam jejak terbukti dalam memimpin
              shift di pusat distribusi yang memproses{" "}
              <strong className="bg-hazard/60 px-1 font-bold">15.000–20.000+ paket setiap hari</strong>{" "}
              dengan akurasi <strong className="font-bold">99,9%</strong>, termasuk
              penanganan ribuan paket return harian.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-inksoft md:text-[19px]">
              Terampil dalam mengkoordinasikan tim, mengoptimalkan pemanfaatan WMS,
              mengelola inventaris gudang, dan melaksanakan perencanaan tenaga kerja
              strategis untuk menjaga keunggulan operasional serta memenuhi{" "}
              <strong className="font-semibold text-ink">SLA pengiriman 15 menit</strong> di
              lingkungan 24/7 yang bergerak cepat.
            </p>

            {/* strip fakta cepat */}
            <div className="mt-10 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3">
              {[
                { k: "DOMISILI", v: "Depok, Jawa Barat" },
                { k: "LINGKUNGAN KERJA", v: "24/7 — Multi-shift" },
                { k: "SPESIALISASI", v: "Sortasi · Gudang · Return" },
              ].map((f) => (
                <div key={f.k} className="bg-paper p-4 transition-colors hover:bg-paperdim">
                  <p className="font-mono text-[10px] font-bold tracking-[0.24em] text-safetydim">
                    {f.k}
                  </p>
                  <p className="mt-1 font-semibold">{f.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* kartu QC */}
          <Reveal delay={150} className="lg:col-span-4">
            <div className="relative border-2 border-ink bg-steel p-6 text-paper shadow-[10px_10px_0_rgba(25,22,17,0.2)]">
              <span className="stamp text-mint absolute -right-3 -top-4 z-10 rotate-6 text-lg font-black">
                LAYAK DIREKRUT
              </span>
              <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
                TAG QC — INSPEKSI FINAL
              </p>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Siap kerja sistem shift & 24/7",
                  "Terbiasa volume puncak (lonjakan 200%)",
                  "Rekor K3: nol kecelakaan 2 tahun",
                  "Mobilitas: Depok & Jabodetabek",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[15px]">
                    <span className="mt-0.5 text-mint">
                      <IconCheck size={16} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-dashed border-rim pt-5">
                <p className="font-mono text-[10px] tracking-[0.24em] text-fog">
                  DIPERIKSA OLEH
                </p>
                <p className="font-display mt-1 text-3xl font-bold italic text-safety">
                  A. Permana
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-fog">
                  TTD — TEAM LEADER SORTASI
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Zona kompetensi ---------------- */
function ZoneCard({ zone, delay }: { zone: SkillZone; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const Icon = ZONE_ICONS[zone.icon];
  const wide = zone.wide;
  return (
    <Reveal
      delay={delay}
      className={wide ? "col-span-12" : "col-span-12 md:col-span-6 lg:col-span-6"}
    >
      <div
        ref={ref}
        className={`lift-card group relative h-full border border-rim bg-steel p-6 hover:border-safety sm:p-7 ${
          wide ? "" : ""
        }`}
      >
        {/* kode sudut */}
        <span aria-hidden className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-fog">
          RAK {zone.code.slice(-1)}·0{ZONES.indexOf(zone) + 1}
        </span>
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center border border-rim bg-plate text-safety transition-colors duration-300 group-hover:border-safety group-hover:bg-safety group-hover:text-coal">
            <Icon size={26} />
          </span>
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
              {zone.code}
            </p>
            <h3 className="font-display text-3xl font-black uppercase leading-none text-paper md:text-4xl">
              {zone.title}
            </h3>
          </div>
        </div>
        <p className="mt-3 text-sm text-fog">{zone.desc}</p>

        <div className={`mt-6 ${wide ? "grid gap-x-10 gap-y-5 md:grid-cols-2" : "space-y-5"}`}>
          {zone.skills.map((s, i) => (
            <Meter key={s.name} name={s.name} level={s.level} active={inView} delay={i * 120} />
          ))}
        </div>

        {zone.chips && (
          <div className="mt-7 flex flex-wrap gap-2">
            {zone.chips.map((c) => (
              <span
                key={c}
                className="cursor-default border border-rim px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-paper/80 transition-colors duration-200 hover:border-safety hover:bg-safety hover:text-coal"
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function Zones() {
  return (
    <section id="zona" className="bg-grid-dark relative scroll-mt-14 bg-coal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          dock="DOCK 02 — PETA LANTAI"
          title="Zona Kompetensi"
          meta="5 ZONA AKTIF"
        />
        <div className="grid grid-cols-12 gap-5">
          {ZONES.map((z, i) => (
            <ZoneCard key={z.code} zone={z} delay={(i % 2) * 120} />
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center gap-3 border border-dashed border-rim px-5 py-4 font-mono text-[11px] tracking-[0.2em] text-fog">
            <span className="text-safety">
              <IconBox size={16} />
            </span>
            <span>
              CATATAN LANTAI: seluruh zona terhubung langsung ke operasi harian —{" "}
              <span className="text-paper">WMS real-time</span>, audit 5R/K3, dan koordinasi
              lintas tim (Warehouse · Line Haul · QC · 3PL).
            </span>
            <span aria-hidden className="ml-auto hidden items-center gap-1.5 md:flex">
              <IconShield size={15} className="text-mint" />
              <span className="text-mint">SOP TERDOKUMENTASI</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
