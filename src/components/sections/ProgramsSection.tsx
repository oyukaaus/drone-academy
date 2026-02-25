"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { programs } from "@/src/data/dummy";

export default function ProgramsSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-white mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-black text-2xl md:text-3xl font-semibold mb-10">
          Манай сургалтууд
        </h2>

        {programs.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center`}
          >
            {/* IMAGE */}
            <div className={item.reverse ? "md:order-2" : ""}>
              <div className="relative w-full h-[260px] md:h-[380px] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-5">
              <h3 className="text-black text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                {item.description}
              </p>

              <button
                onClick={() => router.push(item.url)}
                className="
                  inline-flex items-center gap-2
                  bg-[#2596be]
                  text-white
                  px-6 py-3
                  text-sm font-semibold
                  rounded-md
                  hover:bg-[#1f7fa3]
                  transition
                  w-[220px]    
                  justify-center            "
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
