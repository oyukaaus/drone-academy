export default function CourseTable(courseD: any) {
  const course = courseD;
  return (
    <div className="bg-white max-w-[1200px] mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14">
      {/* TITLE */}
      <h1 className="heading-lg font-bold mb-6 border-l-4 border-[#2596be] pl-5">
        {course.title}
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-sm leading-relaxed mb-8">
        {course.desc}
      </p>

      {/* TOTAL HOURS */}
      <div className="bg-[#f6f7f9] rounded-xl p-6 mb-10">
        <p className="text-gray-900 font-semibold text-sm">
          📘 Нийт сургалтын хугацаа:
          <span className="ml-2 text-[#2596be]">{course.duration}</span>
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden text-sm">
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
              <td className="px-5 py-4 leading-relaxed text-sm">
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
        <h2 className="heading-lg font-semibold text-gray-900 mb-4">
          Сургалтын үр дүн
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          {course.result1}
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-sm">
          {course.result2}
        </p>
      </div>
    </div>
  );
}
