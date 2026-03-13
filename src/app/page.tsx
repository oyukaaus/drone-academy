"use client";

import { highlights } from "../data/dummy";
import { useRouter } from "next/navigation";
import HeroSection from "../components/sections/HeroSection";
import ProgramsSection from "../components/sections/ProgramsSection";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <HeroSection />

      {/* ABOUT */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6 text-body text-gray-800 leading-relaxed mt-4 max-w-6xl">
            <p className="text-justify">
              <span className="font-semibold">
                Дрон Академи Монголиа /Drone Academy Mongolia/
              </span>{" "}
              нь Монголын Дрон Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд
              дрон технологийн мэдлэг, ур чадвар, зөв хэрэглээг Монгол Улсад
              мэргэжлийн түвшинд түгээн дэлгэрүүлэх зорилготой сургалт,
              судалгаа, зөвлөх үйлчилгээний академи юм. Мөн дроны спортоор
              дамжуулан хойч үе хүүхэд залуусыг технологийн дэвшилтэт хөгжилд
              чиглүүлэх, технологийн суурь мэдлэгтэй болгохоор зорин ажиллаж
              анхан шатнаас ахисан түвшин хүртэлх FPV дроны сургалтуудыг олон
              улсын жишигт нийцсэн хөтөлбөрөөр зохион байгуулдаг.
            </p>

            <p>
              You can experience the opportunities, areas of application, and
              future fields of work associated with drones.
            </p>

            <p className="font-semibold text-black">We let you fly!</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title */}
          <h2 className="heading-lg mb-10">Онцлог, давуу тал</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="space-y-4 cursor-pointer"
                onClick={() => router.push(item.url)}
              >
                <div className="overflow-hidden rounded-sm h-[400px]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <h3 className="heading-md text-blue-700 h-12">{item.title}</h3>
                <p className="text-body text-gray-800 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProgramsSection />
    </div>
  );
}
