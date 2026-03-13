"use client";

type Course = {
  id: number;
  title: string;
  desc: string;
  desc1?: string;
  duration: string;
  thesis: any;
  simulator: any;
  real: any;
  exam: any;
  result1: string;
  result2: string;
};

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
   <div className="bg-white max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14 space-y-8">   <h1 className="heading-xl">Сургалт</h1>

      <h2 className="heading-lg border-l-4 border-cyan-500 pl-4">
        {course.title}
      </h2>

      {/* INTRO */}
      <p className="text-gray-700 text-body leading-relaxed mb-8">
        {course.desc}
      </p>
      {course.desc1 && (
        <p className="text-gray-700 leading-relaxed mb-8 text-body">
          {course.desc1}
        </p>
      )}
      {/* NOTE */}
      <div className="bg-[#f6f7f9] rounded-xl p-6 mb-10 text-body">
        <p className="text-gray-900 font-semibold ">
          📘 Сургалтын хэлбэр:
          <span className="ml-2 text-[#2596be]">{course.duration}</span>
        </p>
      </div>

      {/* TABLE */}
      <div className="mt-10 overflow-hidden rounded-xl border">
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
            {/* THEORY */}
            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Онол</td>
              <td className="px-5 py-4 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1">
                  {course.thesis.items?.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td className="px-5 py-4 font-semibold">
                {course.thesis.duration}
              </td>
            </tr>

            {/* PRACTICE */}
            <tr className="border-t bg-gray-50">
              <td className="px-5 py-4 font-medium">Практик</td>
              <td className="px-5 py-4 leading-relaxed">
                {course.simulator.items &&
                  course.simulator.items.map((item: any, index: any) => (
                    <li key={index}>
                      <span className="font-semibold text-gray-900"></span>{" "}
                      {item}
                    </li>
                  ))}
              </td>
              <td className="px-5 py-4 font-semibold">
                {course.simulator.duration}
              </td>
            </tr>

            {/* REAL FLIGHT */}
            <tr className="border-t">
              <td className="px-5 py-4 font-medium">Бодит нислэг</td>
              <td className="px-5 py-4 leading-relaxed">{course.real.desc}</td>
              <td className="px-5 py-4 font-semibold">
                {course.real.duration}
              </td>
            </tr>

            {/* EXAM */}
            <tr className="border-t bg-gray-50">
              <td className="px-5 py-4 font-medium">Шалгалт</td>
              <td className="px-5 py-4 leading-relaxed">
                {course.exam.desc}
                <span className="block text-sm text-gray-500">
                  {course.exam.add}
                </span>
              </td>
              <td className="px-5 py-4 font-semibold">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RESULT */}
      <div className="mt-12">
        <h2 className="heading-md font-semibold text-gray-900 mb-4">
          Сургалтын үр дүн
        </h2>
        <p className="text-gray-700 leading-relaxed text-body">
          {course.result1}
        </p>{" "}
        <p className="text-gray-700 leading-relaxed mt-4 text-body">
          {course.result2}
        </p>
      </div>
    </div>
  );
}
