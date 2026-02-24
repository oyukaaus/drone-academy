"use client";
import { events } from "@/src/data/dummy";
import { Card } from "antd";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* ===== HERO / BANNER ===== */}
      <div className="relative h-[220px] md:h-[260px] w-full bg-gradient-to-b from-[#0e4a6f] to-black mb-16 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex items-center text-white">
          <h1 className="text-[22px] md:text-[26px] font-bold px-5 border-l-4 border-white mt-16 md:mt-20">
            Үйл ажиллагаа
          </h1>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <Card
              key={i}
              hoverable
              className="w-full rounded-xl overflow-hidden"
            >
              {/* TITLE */}
              <p className="font-semibold text-lg text-center">
                {event.name}
              </p>

              {/* DATE */}
              <p className="text-sm text-gray-500 text-center mt-2">
                Тэмцээн болох өдөр: {event.date}
              </p>

              {/* IMAGE */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[300px] mt-4 rounded-xl overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
