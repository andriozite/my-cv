import { TRACKING, JOBS, PROFILE, type Job, type JobCategory } from "../lib/data";
import { useInView } from "../lib/hooks";
import { Reveal, SectionHeader } from "./ui";
import {
  IconBox,
  IconForklift,
  IconRack,
  IconReturn,
  IconShield,
  IconSort,
  IconTeam,
  IconTruck,
  MarkerSquare,
} from "./Icons";

const CAT_ICONS = {
  sort: IconSort,
  rack: IconRack,
  return: IconReturn,
  team: IconTeam,
  shield: IconShield,
};

/* ---------------- lacak karier ---------------- */
function TrackingStrip() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className="relative overflow-hidden border-2 border-ink bg-steel text-paper">
      <div className="hazard-strip-yellow h-[7px] w-full opacity-90" aria-hidden />
      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.22em]">
          <p className="flex items-center gap-2.5 font-bold text-hazard">
            <IconTruck size={18} />
            LACAK KARIER — NO. RESI {PROFILE.manifestNo}
          </p>
          <p className="flex items-center gap-2 text-mint">
            <span className="animate-led inline-block h-2 w-2 rounded-full bg-mint" />
            STATUS: MASIH BERJALAN (ON DUTY)
          </p>
        </div>

        <div className="relative mt-9">
          {/* garis lintasan */}
          <span
            aria-hidden
            className={`line-grow absolute left-[9px] top-0 h-full w-[2px] bg-safety lg:left-0 lg:top-[9px] lg:h-[2px] lg:w-full ${
              inView ? "grown" : ""
            }`}
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {TRACKING.map((ev, i) => (
              <li key={ev.time} className="relative pl-9 lg:pl-0 lg:pt-9">
                {/* node */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 grid h-5 w-5 place-items-center border-2 lg:top-0 ${
                    ev.current
                      ? "border-safety bg-safety text-coal"
                      : "border-safety bg-steel text-safety"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 ${ev.current ? "animate-led bg-coal" : "bg-safety"}`}
                  />
                </span>
                <p className="font-display text-2xl font-black leading-none text-hazard">
                  {ev.time}
                </p>
                <p
                  className={`mt-1 font-mono text-[11px] font-bold tracking-[0.18em] ${
                    ev.current ? "text-safety" : "text-paper"
                  }`}
                >
                  {ev.title}
                  {ev.current && <span className="ml-1">▮</span>}
                </p>
                <p className="mt-1.5 font-mono text-[9.5px] leading-relaxed tracking-[0.08em] text-fog">
                  {ev.loc}
                </p>
                <p className="mt-2 hidden text-[13px] leading-snug text-paper/75 lg:block">
                  {ev.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/* ---------------- kartu perusahaan (sticky) ---------------- */
function CompanyPlate({ job }: { job: Job }) {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="relative border border-rim bg-steel text-paper shadow-[10px_10px_0_rgba(25,22,17,0.18)]">
        <div className="hazard-strip h-[7px] w-full" aria-hidden />
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-hazard">
              {job.code} — KONTRAK KERJA
            </p>
            <span className="grid h-9 w-9 place-items-center border border-rim bg-plate text-safety">
              <IconBox size={19} />
            </span>
          </div>
          <h3 className="font-display mt-3 text-3xl font-black uppercase leading-[0.95]">
            {job.company}
          </h3>
          {job.client && (
            <p className="mt-2 inline-block border border-safety/60 bg-safety/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-safety">
              UNTUK: {job.client.toUpperCase()}
            </p>
          )}
          <p className="mt-3 font-mono text-[12px] font-semibold tracking-[0.14em] text-paper">
            {job.role.toUpperCase()}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-dashed border-rim pt-4">
            <p className="font-display text-4xl font-black text-hazard">{job.period}</p>
          </div>
          <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-fog">
            LOKASI: {job.location.toUpperCase()}
          </p>

          <dl className="mt-5 space-y-2.5">
            {job.highlights.map((h) => (
              <div
                key={h.k}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-rim/70 pb-2"
              >
                <dt className="font-mono text-[10px] tracking-[0.18em] text-fog">
                  {h.k.toUpperCase()}
                </dt>
                <dd className="text-right text-[13px] font-semibold text-paper">{h.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

/* ---------------- kategori pekerjaan ---------------- */
function CategoryBlock({ cat, delay }: { cat: JobCategory; delay: number }) {
  const Icon = CAT_ICONS[cat.icon];
  return (
    <Reveal delay={delay} as="article">
      <div className="group border border-ink/15 bg-paper transition-colors duration-300 hover:border-safetydim">
        <div className="flex items-center gap-3.5 border-b border-dashed border-ink/25 px-5 py-4 sm:px-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink/25 bg-paperdim text-ink transition-colors duration-300 group-hover:border-safetydim group-hover:bg-safetydim group-hover:text-paper">
            <Icon size={22} />
          </span>
          <h4 className="font-display text-2xl font-black uppercase leading-none text-ink sm:text-[27px]">
            {cat.title}
          </h4>
          <span className="ml-auto shrink-0 bg-ink px-2 py-1 font-mono text-[9px] font-bold tracking-[0.2em] text-paper">
            {cat.tag}
          </span>
        </div>
        <ul className="space-y-4 px-5 py-5 sm:px-6">
          {cat.points.map((pt) => (
            <li key={pt.slice(0, 32)} className="flex gap-3.5 text-[15px] leading-relaxed text-ink/90">
              <MarkerSquare />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function JobBlock({ job, index }: { job: Job; index: number }) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <Reveal delay={index * 100}>
          <CompanyPlate job={job} />
        </Reveal>
      </div>
      <div className="space-y-6 lg:col-span-8">
        {job.intro && (
          <Reveal>
            <p className="border-l-4 border-safety bg-paperdim/70 px-5 py-4 text-[16px] font-medium leading-relaxed text-ink">
              {job.intro}
            </p>
          </Reveal>
        )}
        {job.categories?.map((c, i) => (
          <CategoryBlock key={c.title} cat={c} delay={i * 90} />
        ))}
        {job.points && (
          <Reveal>
            <div className="border border-ink/15 bg-paper p-5 sm:p-6">
              <ul className="space-y-4">
                {job.points.map((pt) => (
                  <li key={pt.slice(0, 32)} className="flex gap-3.5 text-[15px] leading-relaxed text-ink/90">
                    <MarkerSquare />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}

/* ---------------- seksi utama ---------------- */
export function Experience() {
  return (
    <section id="rekam" className="bg-carton scroll-mt-14 bg-paper py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          dark={false}
          dock="DOCK 03 — RIWAYAT MUATAN"
          title="Rekam Jejak"
          meta="2016 → SEKARANG"
        />

        <Reveal>
          <TrackingStrip />
        </Reveal>

        <div className="mt-16 space-y-20">
          {JOBS.map((job, i) => (
            <div key={job.id} className="relative">
              {i > 0 && (
                <div className="mb-16 flex items-center gap-4" aria-hidden>
                  <span className="h-px flex-1 border-t-2 border-dashed border-ink/25" />
                  <span className="text-inksoft">
                    <IconForklift size={26} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.26em] text-inksoft">
                    PINDAH LOT
                  </span>
                  <span className="h-px flex-1 border-t-2 border-dashed border-ink/25" />
                </div>
              )}
              <JobBlock job={job} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
