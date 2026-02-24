export default function CoopPage() {
  return (
    <div className="bg-white max-w-[1200px] mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-4 md:px-10 md:py-14">
      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-semibold text-[#2596be] mb-6">
        Сургууль & Байгууллагууд
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">
        Дрон нь инновацийг таниулах, програмчлалын ертөнцтэй танилцах,
        багийн ажиллагааг сонирхолтой, үр дүнтэй болгох төгс хэрэгсэл юм.
        Боловсролын байгууллагуудын хувьд дрон технологи нь суралцагчдын
        бүтээлч сэтгэлгээг хөгжүүлэх, орчин үеийн ур чадварыг эзэмшүүлэх
        чухал боломжийг олгодог.
      </p>

      <p className="text-gray-700 text-base leading-relaxed mb-10 text-justify">
        Мөн нисгэгчгүй нисэх төхөөрөмжүүд нь төрийн байгууллага болон
        нийтийн салбарт өргөнөөр ашиглагдаж байна. Гал түймэр унтраах,
        аврах албад 250 граммаас доош жинтэй дронуудыг ашиглан
        нөхцөл байдлын анхан шатны мэдээлэл цуглуулах, эрсдэлийг хурдан
        үнэлэх, шийдвэр гаргалтыг дэмжихэд ашиглаж байна.
      </p>

      {/* HIGHLIGHT BOX */}
      <div className="border-l-4 border-[#2596be] bg-gray-50 p-5 rounded-lg text-justify">
        <p className="text-gray-800 font-medium">
          Дрон Академи Монголиа нь сургууль, их дээд сургууль,
          төрийн болон хувийн байгууллагуудтай хамтран
          сургалт, танилцуулга, хамтарсан хөтөлбөрүүдийг
          уян хатан хэлбэрээр зохион байгуулах боломжтой.
        </p>
      </div>
    </div>
  );
}
