"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface PhotoBarItem {
  image: string;
  title?: string;
}

interface PhotoBarProps {
  items: {
    image: string;
    title?: string;
  }[];
  startIndex?: number;
}

export default function PhotoBar({ items, startIndex = 0 }: PhotoBarProps) {
  const [index, setIndex] = useState(startIndex);

  if (!items || items.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  return (
    <div className="relative max-w-[1000px] mx-auto">
      {/* IMAGE */}
      <div
        className="relative h-[800px] flex items-center justify-center cursor-pointer"
        onClick={next}
      >
        <Image
          src={items[index].image}
          alt={items[index].title || "Photo"}
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-4
          bg-black/60 text-white w-10 h-10 rounded-full
          flex items-center justify-center hover:bg-black transition"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 right-4
          bg-black/60 text-white w-10 h-10 rounded-full
          flex items-center justify-center hover:bg-black transition"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}
