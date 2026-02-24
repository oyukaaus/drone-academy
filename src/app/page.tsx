"use client";

import { coops, highlights } from "../data/dummy";
import { useRouter } from "next/navigation";
import HeroSection from "../components/sections/HeroSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import Image from "next/image";
import { Card } from "antd";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <HeroSection></HeroSection>

      {/* <NewsSection />
      <ProjectSection /> */}
      <section className="w-full bg-white  ">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          {/* Content */}
          <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed mt-4">
            <p className="text-justify">
              <span className="font-semibold">
                Дрон Академи Монголиа /Drone Academy Mongolia/
              </span>{" "}
              is нь Монголын Дрон Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд
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
      <section className="w-full bg-white py-8 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section title */}
          <h2 className="text-black text-2xl md:text-3xl font-medium mb-4">
            Онцлог, давуу тал
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {highlights.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="overflow-hidden rounded-sm h-[400px]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <h3 className="text-blue-700 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="text-gray-800 text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProgramsSection></ProgramsSection>
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-3xl text-gray-600 mb-10">
          Хамтын ажиллагаа
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coops.map((org, i) => (
            <Card
              key={i}
              hoverable
              className="group transition-all duration-300"
            >
              {/* LOGO */}
              <div className="flex justify-center items-center">
                <div className="relative h-[70px] w-full max-w-[220px]">
                  <Image
                    src={org.image}
                    alt={org.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <p className="text-gray-600 text-center mt-3 font-medium">
                {org.title}
              </p>

              {/* DETAILS (desktop hover, mobile always visible) */}
              <div className="mt-4 text-sm text-gray-600 lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-40 transition-all duration-300">
                <p className="font-semibold">
                  Хугацаа:{" "}
                  <span className="font-normal">
                    {org.startDate} – {org.endDate}
                  </span>
                </p>

                <p className="font-semibold mt-1">
                  Чиглэл: <span className="font-normal">{org.coop}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
