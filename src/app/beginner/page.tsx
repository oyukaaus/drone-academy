export default function BeginnerPage() {
  return (
    <div className="bg-white max-w-[1200px] mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14">
      {/* TITLE */}
      <h1 className="text-black text-3xl md:text-4xl font-bold mb-6 border-l-4 border-[#2596be] pl-5">
        FPV Дроны анхан шатны сургалт
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Энэхүү сургалт нь FPV дрон нисгэх сонирхолтой анхан шатны суралцагчдад
        зориулсан бөгөөд дроны үндсэн ойлголт, аюулгүй ажиллагаа, симулятор
        болон бодит нислэгийн дадлагыг хослуулсан цогц хөтөлбөр юм. Сургалтын
        төгсгөлд суралцагч нь FPV дроныг аюулгүй, зөв удирдах суурь чадвартай
        болно.
      </p>

      {/* TOTAL HOURS */}
      <div className="bg-[#f6f7f9] rounded-xl p-6 mb-10">
        <p className="text-gray-900 font-semibold">
          📘 Нийт сургалтын хугацаа:
          <span className="ml-2 text-[#2596be]">12 академик цаг</span>
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
            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Онол</td>
              <td className="px-5 py-4 leading-relaxed">
                Дроны үндсэн ойлголт, төрлүүд;
                <br />
                Дотоодын хууль эрх зүйн үндсэн ойлголт;
                <br />
                Дроны бүтэц, аюулгүй ажиллагааны стандарт
              </td>
              <td className="px-5 py-4 font-semibold">4 цаг</td>
            </tr>

            <tr className="border-t bg-gray-50">
              <td className="px-5 py-4 font-medium">Симулятор</td>
              <td className="px-5 py-4 leading-relaxed">
                FPV нислэгийн симулятор ашиглан нислэгийн суурь дадлага,
                удирдлагын хариу үйлдэл, чиг баримжаа
              </td>
              <td className="px-5 py-4 font-semibold">4 цаг</td>
            </tr>

            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Бодит нислэг</td>
              <td className="px-5 py-4 leading-relaxed">
                FPV дотор нислэгийн дрон ашиглан бодит орчинд практик сургалт,
                аюулгүй нислэгийн дадлага
              </td>
              <td className="px-5 py-4 font-semibold">4 цаг</td>
            </tr>

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

      {/* EXTRA PARAGRAPH */}
      <div className="mt-12 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Сургалтын үр дүн
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Сургалтад хамрагдсанаар суралцагч нь FPV дроны үндсэн бүтэц,
          удирдлагын зарчим, аюулгүй ажиллагааны шаардлагыг ойлгож, симулятор
          болон бодит нислэгийн орчинд өөртөө итгэлтэйгээр нислэг хийх суурь
          чадварыг эзэмшинэ. Энэхүү сургалт нь дараагийн дунд болон ахисан шатны
          сургалтын бат бөх суурь болно.
        </p>
     <p className="text-gray-700 leading-relaxed mt-4">
          Суралцагчийн ур чадварыг илүү найдвартайгаар үнэлж, баталгаажуулах
          зорилгоор сургалтын төгсгөлд 75 хувиас дээш үнэлгээ авч амжилттай
          төгссөн суралцагчдад Монголын Дроны Холбооны албан ёсны бүртгэлтэй
          НИСГЭГЧИЙН СЕРТИФИКАТ олгоно. Энэхүү сертификат нь түвшин бүртээ 2
          жилийн хугацаанд хүчинтэй байна.{" "}
        </p>
      </div>
    </div>
  );
}
