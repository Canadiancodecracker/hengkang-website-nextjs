"use client";

import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";

type Slide = {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};

export function HeroCarousel({slides, locale}: {slides: Slide[]; locale: string}) {
  const [i, setI] = useState(0);
  const safeSlides = useMemo(() => slides?.length ? slides : [], [slides]);

  useEffect(() => {
    if (!safeSlides.length) return;
    const t = setInterval(() => setI((x) => (x + 1) % safeSlides.length), 6500);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  if (!safeSlides.length) return null;

  const slide = safeSlides[i];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black">
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-black/30" />

      <div className="relative px-6 py-16 sm:px-10 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.5}}
            className="max-w-2xl"
          >
            <div className="text-xs font-medium uppercase tracking-widest text-white/70">
              Ningxia Hengkang
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-5 text-base text-white/80 sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={slide.ctaHref} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90">
                {slide.ctaLabel}
              </Link>
              <Link href={`/${locale}/contact`} className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                Contact
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {safeSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={"h-2 w-2 rounded-full " + (idx === i ? "bg-white" : "bg-white/40")}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
