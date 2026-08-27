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
  return (
    <section id="work" className="relative section-y">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Selected Work</p>
          <h2 className="display mt-5 max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)]">
            Systems built for scale
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="surface surface-hover group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover opacity-75 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-7 lg:p-9">
                  <h3 className="display text-2xl lg:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
