"use client";

import { graduates } from "@/src/data/dummy";
import Image from "next/image";
import { useState } from "react";

export default function GraduatesPage() {
  const [selectedGraduate, setSelectedGraduate] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrev = () => {
    if (selectedGraduate === null) return;
    const images = graduates[selectedGraduate].images;

    setSelectedImageIndex(
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
    );
  };

  const handleNext = () => {
    if (selectedGraduate === null) return;
    const images = graduates[selectedGraduate].images;

    setSelectedImageIndex(
      selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
    );
  };

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section >
        <div className="max-w-[1400px] mx-auto relative flex items-start">

          {/* LEFT IMAGE */}
          <div className="w-[70%] h-[360px] overflow-hidden">
            <img
              src="/images/hero/1.png"
              alt="Graduates"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="w-[60%] h-[360px] bg-white px-16 py-16 absolute mt-20 ml-[40%] shadow-lg">
            <h1 className="heading-lg text-[#2c4a6e]">
              Төгсөгчид
            </h1>

            <div className="text-body text-[#3f4f5f] mt-4">
              <p>
                Drone Academy Mongolia нь дрон жолоодлого, агаарын зураг авалт,
                FPV нислэг болон мэргэжлийн контент үйлдвэрлэлийн чиглэлээр
                тасралтгүй сургалт зохион байгуулж, чадварлаг дрон нисгэгчдийг
                бэлтгэн гаргаж байна. 2025–2026 онд давхардсан тоогоор 50+
                суралцагч мэргэжлийн болон анхан шатны сургалтад хамрагдсан
                бөгөөд манай төгсөгчид медиа продакшн, барилгын хяналт, үл
                хөдлөх хөрөнгө, аялал жуулчлал, эвент зураг авалт зэрэг салбарт
                амжилттай ажиллаж байна.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ===== STATS ===== */}
      <section className="py-24 text-center">
        <h2 className="heading-md tracking-wide mb-16">
          СУРГАЛТ БОЛОН ҮЙЛ АЖИЛЛАГААНУУД
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat number="5" text="Нийт дроны багш" />
          <Stat number="50+" text="давхарсан тоогоор төгсөгчид" />
          <Stat number="8" text="зохион байгуулсан үйл ажиллагаа" />
          <Stat number="250" text="сургалт, үйл ажиллагаанд хамрагдсан" />
        </div>
      </section>


      {/* ===== GALLERY ===== */}
      <section className="py-16 max-w-[1400px] mx-auto">

        <h2 className="heading-md text-center mb-16">
          МАНАЙ ТӨГСӨГЧИД
        </h2>

        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {graduates.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedGraduate(index)}
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-4">
                <span className="text-small text-blue-700 underline">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>


        {/* ===== MODAL ===== */}
        {selectedGraduate !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedGraduate(null)}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 text-white text-4xl"
              onClick={handlePrev}
            >
              ‹
            </button>

            <div className="max-w-4xl w-full px-6">
              <Image
                src={graduates[selectedGraduate].images[selectedImageIndex]}
                alt={graduates[selectedGraduate].title}
                width={900}
                height={600}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              <p className="text-small text-white text-center mt-4">
                {graduates[selectedGraduate].title} ({selectedImageIndex + 1} /{" "}
                {graduates[selectedGraduate].images.length})
              </p>
            </div>

            {/* Next */}
            <button
              className="absolute right-6 text-white text-4xl"
              onClick={handleNext}
            >
              ›
            </button>

          </div>
        )}
      </section>
    </main>
  );
}


/* ===== STAT COMPONENT ===== */
function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div className="heading-md mb-2">{number}</div>
      <p className="text-small text-gray-700">{text}</p>
    </div>
  );
}