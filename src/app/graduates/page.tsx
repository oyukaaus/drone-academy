import { graduates } from "@/src/data/dummy";
import Image from "next/image";
import Link from "next/link";

export default function GraduatesPage() {
  return (
    <main>
      {/* ===== TOP SECTION ===== */}
      <section className=" py-24">
        <div className="max-w-[1400px] mx-auto relative flex items-start">
          {/* LEFT IMAGE */}
          <div className="w-[70%] h-[360px] overflow-hidden ">
            <img
              src="/images/hero/1.png"
              alt="Graduates"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="w-[60%] h-[360px] bg-white px-16 py-16 absolute mt-20 ml-[40%] shadow-lg">
            <h2 className="text-[28px] font-serif text-[#2c4a6e] mb-6">
              Төгсөгчид
            </h2>
            <p className="text-sm leading-relaxed text-[#3f4f5f] ">
              Монголын Мэргэжлийн Хөтөч Тайбарлагчдын Холбооноос зохион
              байгуулсан сургалтууд 2003 оноос хойш нийт 2,000 орчим хөтөч
              тайбарлагч нар бэлтгэгдэн гарсан бөгөөд 2023–2024 оны улиралд
              давхардсан тоогоор 120 хөтөч бэлтгэгдэж, нийт төгсөгчдөөрөө
              бахархдаг бөгөөд Монголын уран барилга болон аялал жуулчны хөтчүүд
              манлайж төгссөн.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-24 text-center">
        <h3 className="text-xl font-serif tracking-wide mb-16">
          СУРГАЛТ БОЛОН ҮЙЛ АЖИЛЛАГААНУУД
        </h3>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <Stat number="5" text="Нийт дроны багш" />
          <Stat number="120" text="давхарсан тоогоор төгсөгчид" />
          <Stat number="8" text="зохион байгуулсан үйл ажиллагаа" />
          <Stat number="250" text="сургалт, үйл ажиллагаанд хамрагдсан" />
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className=" py-16  max-w-[1400px] mx-auto">
        <h3 className="text-center font-serif text-xl tracking-wide mb-16">
          МАНАЙ ТӨГСӨГЧИД
        </h3>

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {graduates.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-4">
                <Link href="#" className="text-sm text-blue-700 underline">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ===== COMPONENTS ===== */
function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div className="text-4xl font-serif mb-2">{number}</div>
      <p className="text-sm text-gray-700 leading-snug">{text}</p>
    </div>
  );
}
