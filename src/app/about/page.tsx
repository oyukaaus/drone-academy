import { academyFeatures, academyPrinciples } from "@/src/data/dummy";
import { Card } from "antd";

export default function AboutPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* ===== HERO / BANNER ===== */}
      <div className="relative h-[260px] w-full bg-gradient-to-b from-[#0e4a6f] to-black  mb-16 rounded-b-[24px] overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center text-white ">
          <button className="text-white text-[26px] font-inter-bold px-5  border-l-4 border-white text-left mt-20">
            БИДНИЙ ТУХАЙ
          </button>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="">
          <blockquote className=" text-gray-700 italic mb-10">
            Дрон Академи Монголиа /Drone Academy Mongolia/ нь Монголын Дрон
            Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд дрон технологийн
            мэдлэг, ур чадвар, зөв хэрэглээг Монгол Улсад мэргэжлийн түвшинд
            түгээн дэлгэрүүлэх зорилготой сургалт, судалгаа, зөвлөх үйлчилгээний
            академи юм. Мөн дроны спортоор дамжуулан хойч үе хүүхэд залуусыг
            технологийн дэвшилтэт хөгжилд чиглүүлэх, технологийн суурь мэдлэгтэй
            болгохоор зорин ажиллаж анхан шатнаас ахисан түвшин хүртэлх FPV
            дроны сургалтуудыг олон улсын жишигт нийцсэн хөтөлбөрөөр зохион
            байгуулдаг.
          </blockquote>


          <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              {" "}
              Манай академи нь аюулгүй ажиллагаа, хариуцлагатай нислэг, бодит
              практик дээр суурилсан сургалтаараа онцлог бөгөөд суралцагчдыг
              чадварлаг, ёс зүйтэй дрон нисгэгч болгон бэлтгэхийг зорьдог.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <Card className="rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
                Алсын хараа
              </h3>
              <p className="text-gray-600 text-justify">
                Монгол Улсад дрон технологийн аюулгүй, үр ашигтай, мэргэжлийн
                хэрэглээг хөгжүүлэх замаар иргэд, байгууллагуудын мэдлэг ур
                чадварыг нэмэгдүүлэх.
              </p>
            </Card>

            <Card className="rounded-xl shadow-sm ">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
                Эрхэм зорилго
              </h3>
              <p className="text-gray-600 text-justify">
                Монголын дрон сургалтын салбарт итгэл даасан тэргүүлэгч академи
                болж, олон улсын түвшинд өрсөлдөх чадвартай дрон нисгэгчдыг
                бэлтгэн гаргах.
              </p>
            </Card>
          </div>
          <div className="text-gray-700 leading-relaxed text-md">
            {/* SECTION TITLE */}
            <h3 className="mt-12 mb-6 text-xl font-semibold text-gray-900">
              ҮНЭТ ЗҮЙЛС
            </h3>

            <div className="grid gap-3">
              {academyPrinciples.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg"
                >
                  {/* TEXT */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {item.title}
                    </span>{" "}
                    – {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-gray-700 leading-relaxed text-md">
            <p className="mt-12 mb-4 text-xl font-semibold text-gray-900">
              ЯАГААД ДРОН АКАДЕМИ МОНГОЛИА ГЭЖ?
            </p>

            <div className="border rounded-lg p-5">
              <ul className="space-y-3">
                {academyFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#2596be] font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
