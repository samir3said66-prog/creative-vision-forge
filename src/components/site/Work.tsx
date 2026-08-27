import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const projects = [
  {
    title: "E-Commerce Marketplace Engine",
    image: work1,
    description:
      "Modular marketplace backend using .NET 8 microservices and the repository pattern. A high-maintainability foundation ideal for multi-vendor booking marketplaces.",
    tags: [".NET 8", "Microservices", "Repository Pattern", "SQL Server"],
  },
  {
    title: "Real-Time Logistics & IoT Dashboard",
    image: work2,
    description:
      "Full-stack dashboard with SignalR real-time visualization. The architecture transfers directly to live availability, booking status, and concurrent reservation flows.",
    tags: ["Angular", ".NET Core", "SignalR", "Redis"],
  },
  {
    title: "Multi-Tenant CRM/ERP Sync Platform",
    image: work3,
    description:
      "Secure data isolation and hierarchical RBAC across large-scale multi-tenant environments — the core pattern required by modern SaaS booking platforms.",
    tags: ["Multi-Tenant", "RBAC", "OAuth 2.0", "PostgreSQL"],
  },
  {
    title: "Next.js Portfolio & PWA",
    image: work4,
    description:
      "High-performance frontend with optimized web vitals, demonstrating modern, polished product interfaces built for speed and clarity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
  },
];

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.max(0, Math.min(projects.length - 1, index)));
  };

  return (
    <section id="work" className="relative section-y">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Selected Work</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)]">
              Systems built for scale
            </h2>
            {/* Counter + arrows */}
            <div className="flex items-center gap-5">
              <p className="display text-sm tracking-[0.2em] text-muted-foreground tabular-nums">
                {String(active + 1).padStart(2, "0")}
                <span className="mx-1.5 opacity-40">/</span>
                {String(projects.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() => scrollTo(active - 1)}
                  disabled={active === 0}
                  className="group grid size-11 place-items-center rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() => scrollTo(active + 1)}
                  disabled={active === projects.length - 1}
                  className="group grid size-11 place-items-center rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-lg disabled:pointer-events-none disabled:opacity-30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Horizontal snap track — one project per view */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-14 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="w-full shrink-0 snap-center snap-always"
            aria-hidden={i !== active}
          >
            <div className="shell">
              <article className="surface surface-hover group grid overflow-hidden lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={1024}
                    height={768}
                    className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
                  <span className="display absolute left-6 top-6 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs tracking-[0.2em] backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-12">
                  <h3 className="display text-2xl lg:text-4xl">{p.title}</h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {p.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[11px] tracking-wide text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="shell mt-8 flex justify-center gap-2.5">
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Go to project ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active
                ? "w-10 bg-foreground"
                : "w-3 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
