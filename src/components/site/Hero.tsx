import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Instagram, Twitter } from "lucide-react";

const services = ["BOOKING SYSTEMS", "MULTI-TENANT SAAS", "REAL-TIME APIS"];

const socials = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const lineMask: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0 hero-grid" />
      <div className="pointer-events-none absolute inset-0 z-0 hero-aura" />

      {/* Portrait — right half, layered above the wordmark.
          `isolate` on the section scopes all z-indexes here, so no
          transformed sibling can ever paint the wordmark line over it. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.1 }}
        className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[78%] sm:w-[62%] lg:w-[52%]"
      >
        <picture>
          <source
            srcSet="/images/portrait-cutout-800.webp 512w, /images/portrait-cutout.webp 1024w"
            sizes="(min-width: 1024px) 52vw, 72vw"
            type="image/webp"
          />
          <img
            src="/images/portrait-cutout.webp"
            alt="Portrait of Mostafa Samir"
            width={1024}
            height={1024}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="size-full object-contain object-bottom"
          />
        </picture>
      </motion.div>

      {/* Thin frame rule — fixed so the line stays visible while scrolling */}
      <div className="pointer-events-none fixed inset-y-0 left-[4.5rem] z-30 hidden w-px bg-border md:block" />

      {/* Vertical socials */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 pl-6 md:flex"
      >
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 flex w-full flex-1 flex-col justify-center pb-28 pt-36 shell shell-rail"
      >
        {/* Service list */}
        <motion.ul variants={fade} className="mb-14 space-y-1.5">
          {services.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.35 + i * 0.1 }}
              className="group flex items-center gap-3 text-foreground/80"
            >
              <span className="h-px w-6 origin-left bg-foreground/45 transition-transform duration-500 group-hover:scale-x-[1.8]" />
              <span className="display text-sm uppercase tracking-[0.14em] transition-colors duration-300 group-hover:text-foreground">
                {s}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Headline — per-line mask reveal */}
        <h1 className="display max-w-4xl text-[clamp(3.25rem,11vw,9rem)] leading-[0.92] text-foreground">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineMask} className="block">
              Full <span className="text-muted-foreground">Stack</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span variants={lineMask} className="block">
              <span className="text-muted-foreground">&amp;</span> Developer
            </motion.span>
          </span>
        </h1>

        {/* Pill CTAs */}
        <motion.div
          variants={fade}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="display group relative inline-flex items-center overflow-hidden rounded-full bg-foreground px-8 py-3 text-lg text-background transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="relative z-10">You need a developer ?</span>
            <span
              aria-hidden
              className="absolute inset-y-0 -left-1/3 z-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-background/20 to-transparent blur-md shimmer-sweep"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-foreground px-7 py-3 text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>

      {/* Wordmark — sits behind the portrait so the cutout isn't clipped */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex items-center gap-6 pb-6 shell shell-rail">
        <motion.span
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.55 }}
          className="display text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none tracking-[0.02em] text-foreground"
        >
          Mostafa
        </motion.span>
        <span className="h-px flex-1 bg-border-strong rule-grow" />
      </div>
    </section>
  );
}
