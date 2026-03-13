"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { programs } from "@/src/data/dummy";

export default function ProgramsSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* SECTION TITLE */}
        <h2 className="heading-lg mb-12">Манай сургалтууд</h2>

        {programs.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center"
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
            <div className="space-y-5 max-w-xl">
              <h3 className="heading-md text-black">{item.title}</h3>

              <p className="text-body text-gray-700 whitespace-pre-line text-justify">
                {item.description}
              </p>

              <button
                onClick={() => router.push(item.url)}
                className={`
                  inline-flex items-center justify-center gap-2
                  px-6 py-3
                  text-small font-semibold
                  rounded-md
                  transition
                  w-[220px]
                ${
                  item.id % 2 === 0
                    ? "bg-[#ff4b1f] text-white hover:bg-[#e43f17]"
                    : "border border-gray-800 text-gray-900 hover:bg-gray-100"
                }
              `}
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
