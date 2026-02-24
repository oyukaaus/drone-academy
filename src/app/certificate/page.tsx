import Image from "next/image";

export default function CertificatePage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14">
      {/* TITLE */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-[#2563eb] mb-6">
        СЕРТИФИКАТ
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed text-base mb-10 max-w-3xl mx-auto text-justify">
        Суралцагчийн ур чадварыг илүү найдвартайгаар үнэлж, баталгаажуулах
        зорилгоор сургалтын төгсгөлд 75 хувиас дээш үнэлгээ авч амжилттай
        төгссөн суралцагчдад Монголын Дрон Холбооны албан ёсны бүртгэлтэй
        <span className="font-semibold"> “ДРОН НИСГЭГЧИЙН СЕРТИФИКАТ”</span>
        олгоно. Энэхүү сертификат нь түвшин бүртээ
        <span className="font-semibold"> 2 жилийн хугацаанд хүчинтэй</span>.
      </p>

      {/* CHART SECTION */}
      <div className="border rounded-xl p-6 max-w-3xl mx-auto">
        <h2 className="text-center text-lg font-medium text-[#2563eb] mb-6">
          FPV дроны анхан шатны сургалтын үнэлгээний бүтэц
        </h2>

        <div className="relative w-full h-[220px] md:h-[300px]">
          {/* Chart image */}
          <Image
            src="/images/certificate.jpg"
            alt="FPV Training Evaluation Structure"
            fill
            className="object-contain"
          />
        </div>

        {/* LEGEND */}
        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 inline-block rounded-sm" />
            <span>Онол – 30%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 inline-block rounded-sm" />
            <span>Практик – 60%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-400 inline-block rounded-sm" />
            <span>Ирц, идэвхи – 10%</span>
          </div>
        </div>
      </div>
      {/* CERTIFICATE IMAGE */}
      <div className="relative w-full max-w-4xl mx-auto h-[220px] md:h-[540px] mt-10 rounded-lg">
        <Image
          src="/images/certificate.png"
          alt="Certificate sample"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
