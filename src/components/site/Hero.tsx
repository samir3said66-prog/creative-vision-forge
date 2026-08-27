import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Twitter } from "lucide-react";

const heroImage = "/images/portrait-cutout.png";

const services = ["BOOKING SYSTEMS", "MULTI-TENANT SAAS", "REAL-TIME APIS"];

const socials = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      {/* Portrait — right half, layered above the wordmark.
          `isolate` on the section scopes all z-indexes here, so no
          transformed sibling (framer-motion creates stacking contexts)
          can ever paint the wordmark line over the portrait. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[78%] sm:w-[62%] lg:w-[52%]">
        <img
          src={heroImage}
          alt="Portrait of Mostafa Samir"
          width={861}
          height={768}
          fetchPriority="high"
          className="size-full object-contain object-bottom"
        />
      </div>

      {/* Thin frame rules — fixed so the line stays visible while scrolling */}
      <div className="pointer-events-none fixed inset-y-0 left-[4.5rem] z-30 hidden w-px bg-border md:block" />

      {/* Vertical socials — fixed so they stay visible while scrolling */}
      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 pl-6 md:flex">
        {socials.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>


      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-36 md:pl-24 lg:px-10 lg:pl-28"
      >
        {/* Service list */}
        <motion.ul
          variants={fade}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 space-y-1"
        >
          {services.map((s) => (
            <li
              key={s}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-foreground/80"
            >
              <span className="h-px w-6 bg-foreground/45" />
              <span className="display text-sm tracking-[0.08em]">{s}</span>
            </li>
          ))}
        </motion.ul>

        {/* Headline */}
        <motion.h1
          variants={fade}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-4xl text-[clamp(3.25rem,11vw,9rem)] leading-[0.92] text-foreground"
        >
          <span className="block">
            Full <span className="text-muted-foreground">Stack</span>
          </span>
          <span className="block">
            <span className="text-muted-foreground">&amp;</span> Developer
          </span>
        </motion.h1>

        {/* Pill CTAs */}
        <motion.div
          variants={fade}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="display inline-flex items-center rounded-full bg-foreground px-8 py-3 text-lg text-background transition-opacity duration-300 hover:opacity-85"
          >
            You need a developer ?
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-foreground px-7 py-3 text-[11px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>

      {/* Wordmark — sits behind the portrait so the cutout isn't clipped */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex items-center gap-6 px-6 pb-6 md:pl-24 lg:px-10 lg:pl-28">
        <span className="display text-[clamp(2rem,7vw,4.5rem)] uppercase leading-none tracking-[0.02em] text-foreground">
          Mostafa
        </span>
        <span className="h-px flex-1 bg-border-strong" />
      </div>
    </section>
  );
}
