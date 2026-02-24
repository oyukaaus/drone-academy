export default function AdvancedPage() {
  return (
    <div className="bg-white max-w-[1200px] mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14">
      {/* TITLE */}
      <h1 className="text-black text-3xl md:text-4xl font-bold mb-6 border-l-4 border-[#2596be] pl-5">
        FPV Дроны дунд түвшний сургалт
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Энэхүү сургалт нь FPV дроны анхан шатны сургалтад хамрагдсан
        суралцагчдад зориулсан бөгөөд цаг агаарын нөхцөл болон чөлөөт нислэг
        хийх боломжит цагийг харгалзан төлөвлөгөөний дагуу зохион байгуулагдана.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Сургалтад хамрагдах суралцагч нь сургалтын явцад ашиглах
        <span className="font-semibold"> 5 инчийн FPV дрон</span>-оо даатгуулсан
        байх шаардлагатай. Энэхүү шатны сургалтаар суралцагч нь өөрийн дроныг
        бүрэн удирдах, оношлох, засварлах болон ахисан түвшний нислэг хийх
        чадварыг эзэмшинэ.
      </p>

      {/* NOTE */}
      <div className="bg-[#f6f7f9] rounded-xl p-6 mb-10">
        <p className="text-gray-900 font-semibold">
          📘 Сургалтын хэлбэр:
          <span className="ml-2 text-[#2596be]">
            Төлөвлөгөөт (цаг агаар, нислэгийн нөхцөлөөс хамаарна)
          </span>
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#2596be] text-white">
            <tr>
              <th className="text-left px-5 py-4 font-semibold">
                Бүрэлдэхүүн хэсэг
              </th>
              <th className="text-left px-5 py-4 font-semibold">Агуулга</th>
              <th className="text-left px-5 py-4 font-semibold">Цаг</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* THEORY */}
            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Онол</td>
              <td className="px-5 py-4 leading-relaxed">
                Дроны хэрэглээний төрлүүд, зориулалтыг ойлгох;
                <br />
                Олон улсын түвшинд мөрдөгдөх хууль эрх зүйн ойлголтууд
              </td>
              <td className="px-5 py-4 font-semibold">2 цаг</td>
            </tr>

            {/* PRACTICE */}
            <tr className="border-t bg-gray-50">
              <td className="px-5 py-4 font-medium">Практик</td>
              <td className="px-5 py-4 leading-relaxed">
                Чөлөөт болон уралдааны дроны бүтэц тодорхойлох;
                <br />
                Аюулгүй ажиллагааны стандарт мөрдөх;
                <br />
                Дроны гэмтэл тодорхойлох;
                <br />
                Эрсдлийн удирдлага, хариуцлага;
                <br />
                Өөрийн дроныг угсрах, эд ангиудын анхан шатны засвар
              </td>
              <td className="px-5 py-4 font-semibold">2 цаг</td>
            </tr>

            {/* REAL FLIGHT */}
            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Бодит нислэг</td>
              <td className="px-5 py-4 leading-relaxed">
                FPV чөлөөт нислэгийн ахисан түвшний дадлага
              </td>
              <td className="px-5 py-4 font-semibold">8 цаг</td>
            </tr>

            {/* EXAM */}
            <tr className="border-t bg-gray-50">
              <td className="px-5 py-4 font-medium">Шалгалт</td>
              <td className="px-5 py-4 leading-relaxed">
                Онол болон практикийн шалгалт
                <span className="block text-sm text-gray-500">
                  (хичээлийн явцад үнэлнэ)
                </span>
              </td>
              <td className="px-5 py-4 font-semibold">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RESULT */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Сургалтын үр дүн
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ахисан түвшний сургалтыг амжилттай дүүргэснээр суралцагч нь FPV дроныг
          чөлөөт болон уралдааны орчинд бүрэн хянах, өөрийн дроныг оношлох,
          угсрах, засварлах суурь мэдлэгтэй болж, бодит нөхцөлд аюулгүй,
          хариуцлагатай нислэг хийх чадварыг эзэмшинэ.
        </p>{" "}
        <p className="text-gray-700 leading-relaxed mt-4">
          Суралцагчийн ур чадварыг илүү найдвартайгаар үнэлж, баталгаажуулах
          зорилгоор сургалтын төгсгөлд 75 хувиас дээш үнэлгээ авч амжилттай
          төгссөн суралцагчдад Монголын Дроны Холбооны албан ёсны бүртгэлтэй
          НИСГЭГЧИЙН СЕРТИФИКАТ олгоно. Энэхүү сертификат нь түвшин бүртээ 2
          жилийн хугацаанд хүчинтэй байна.
        </p>
      </div>
    </div>
  );
}
