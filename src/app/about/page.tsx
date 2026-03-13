import { academyFeatures, academyPrinciples } from "@/src/data/dummy";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-gray-100 to-blue-100 py-24 px-6">
        <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-small uppercase tracking-widest mb-4">
              About Us
            </p>

            <h1 className="heading-xl">
              Drone Academy Mongolia
            </h1>

            <p className="text-body max-w-xl mb-8">
              Дрон Академи Монголиа /Drone Academy Mongolia/ нь Монголын Дрон
              Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд дрон технологийн
              мэдлэг, ур чадвар, зөв хэрэглээг Монгол Улсад мэргэжлийн түвшинд
              түгээн дэлгэрүүлэх зорилготой академи юм.
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
              Илүү ихийг унших →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/drone-academy.jpg"
                alt="Drone Academy"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>


      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        {/* DESCRIPTION */}
        <div className="text-body leading-relaxed mb-16 text-justify max-w-6xl">
          <p>
            Дрон Академи Монголиа /Drone Academy Mongolia/ нь Монголын Дрон
            Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд дрон технологийн
            мэдлэг, ур чадвар, зөв хэрэглээг Монгол Улсад мэргэжлийн түвшинд
            түгээн дэлгэрүүлэх зорилготой сургалт, судалгаа, зөвлөх үйлчилгээний
            академи юм.
          </p>

          <p className="mt-4">
            Манай академи нь аюулгүй ажиллагаа, хариуцлагатай нислэг, бодит
            практик дээр суурилсан сургалтаараа онцлог бөгөөд суралцагчдыг
            чадварлаг, ёс зүйтэй дрон нисгэгч болгон бэлтгэхийг зорьдог.
          </p>
        </div>


        {/* Vision */}
        <div className="mb-16">
          <div className="w-20 h-[3px] bg-orange-500 mb-6"></div>

          <h2 className="heading-lg">
            Алсын хараа
          </h2>

          <p className="text-body max-w-3xl">
            Монгол Улсад дрон технологийн аюулгүй, үр ашигтай, мэргэжлийн
            хэрэглээг хөгжүүлэх замаар иргэд, байгууллагуудын мэдлэг ур чадварыг
            нэмэгдүүлэх.
          </p>
        </div>


        {/* Mission */}
        <div className="mb-16">
          <div className="w-20 h-[3px] bg-orange-500 mb-6"></div>

          <h2 className="heading-lg">
            Эрхэм зорилго
          </h2>

          <p className="text-body max-w-3xl">
            Монголын дрон сургалтын салбарт итгэл даасан тэргүүлэгч академи
            болж, олон улсын түвшинд өрсөлдөх чадвартай дрон нисгэгчдыг
            бэлтгэн гаргах.
          </p>
        </div>


        {/* Values */}
        <div className="mb-16">
          <div className="w-20 h-[3px] bg-orange-500 mb-6"></div>

          <h2 className="heading-lg">
            Үнэт зүйлс
          </h2>

          <ul className="text-body max-w-3xl list-disc pl-5 space-y-2">
            {academyPrinciples.map((item, index) => (
              <li key={index}>
                <span className="font-semibold text-gray-900">
                  {item.title}
                </span>{" "}
                – {item.description}
              </li>
            ))}
          </ul>
        </div>


        {/* Features */}
        <div>
          <div className="w-20 h-[3px] bg-orange-500 mb-6"></div>

          <h2 className="heading-lg">
            Манай академи
          </h2>

          <ul className="text-body max-w-3xl list-disc pl-5 space-y-2">
            {academyFeatures.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </section>
    </div>
  );
}