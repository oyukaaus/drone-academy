"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  images?: string[];
  interval?: number; // ms
}

export default function HeroSection({
  title = "DRONE ACADEMY MONGOLIA",
  ctaText = "СУРГАЛТАНД БҮРТГҮҮЛЭХ",
  ctaHref = "/contact",
  images = ["/images/hero/1.png", "/images/hero/2.png", "/images/hero/_DSC5263.jpg", "/images/hero/_DSC5323.jpg", "/images/hero/_DSC5343.jpg"],
  interval = 6000,
}: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="relative max-w-full mx-auto h-[70vh] min-h-[520px] max-h-[820px] overflow-hidden rounded-xl shadow-lg">
      {/* Background images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      {/* Content */}
      <div className="relative z-10 h-full flex items-end justify-center px-6 pb-24">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            {title}
          </h1>

          {/* <p className="text-sm sm:text-base md:text-lg opacity-90 mb-10 leading-relaxed">
            {subtitle}
          </p> */}

          <Link href={ctaHref}>
            <span className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold tracking-wide transition hover:bg-white hover:text-black">
              {ctaText}
            </span>
          </Link>
        </div>
      </div>

      {/* Indicators (optional but nice) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
