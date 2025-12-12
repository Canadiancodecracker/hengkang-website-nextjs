"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n/locales";

interface Slide {
  image: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

export function HeroCarousel({ slides, locale }: { slides: Slide[]; locale: Locale }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative -mx-4 sm:-mx-6 lg:-mx-[calc((100vw-72rem)/2+1.5rem)] overflow-hidden">
      <div className="relative h-[60vh] min-h-[500px] max-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
              }`}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
              {/* Pattern overlay */}
              <div className="absolute inset-0 hero-pattern opacity-30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
                <div className="max-w-2xl">
                  <h1
                    className={`heading-xl text-white mb-6 transition-all duration-700 delay-200 ${index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }`}
                  >
                    {slide.headline}
                  </h1>
                  <p
                    className={`text-lg sm:text-xl text-white/80 mb-8 leading-relaxed transition-all duration-700 delay-300 ${index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }`}
                  >
                    {slide.subheadline}
                  </p>
                  <div
                    className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      }`}
                  >
                    <Link
                      href={slide.ctaHref}
                      className="btn-accent"
                    >
                      {slide.ctaLabel}
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href={`/${locale}/about`}
                      className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition"
                    >
                      {locale === "zh" ? "了解更多" : "Learn more"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Quick stats bar */}
      <div className="bg-subtle border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="stat-value">11+</div>
              <div className="text-sm text-muted mt-1">
                {locale === "zh" ? "年行业经验" : "Years of Excellence"}
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="stat-value">12,500t</div>
              <div className="text-sm text-muted mt-1">
                {locale === "zh" ? "年产二甲双胍" : "Metformin Capacity/Yr"}
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="stat-value">15,000t</div>
              <div className="text-sm text-muted mt-1">
                {locale === "zh" ? "年产肌酸系列" : "Creatine Capacity/Yr"}
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="stat-value">50+</div>
              <div className="text-sm text-muted mt-1">
                {locale === "zh" ? "出口国家地区" : "Countries Exported"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
