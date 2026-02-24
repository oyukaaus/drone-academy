"use client";
import { news } from "@/src/data/dummy";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const data = news.find((n) => n.id === Number(id));
  if (!data) return notFound();

  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] overflow-hidden">
      <section className="max-w-[1400px] px-4 md:px-6 mb-16 grid grid-cols-1 lg:grid-cols-6 gap-10">
        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-4">
          <h1 className="text-[22px] md:text-[26px] font-bold py-6">
            {data.title}
          </h1>

          <div className="relative w-full h-[240px] md:h-[420px] rounded-xl overflow-hidden mt-1">
            <Image
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width:768px) 100vw, 66vw"
              className="object-cover"
              priority
            />
          </div>

          {data.par1 && <p className="mt-4 text-justify">{data.par1}</p>}

          {data.par2 && <p className="mt-4 text-justify">{data.par2}</p>}

          {data.list && (
            <ul className="mt-4 ml-5 list-disc space-y-2">
              {data.list.map((item, index) => (
                <li key={index} className="text-justify">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {data.image2 && (
            <div className="relative w-full h-[240px] md:h-[420px] rounded-xl overflow-hidden mt-4">
              <Image
                src={data.image2}
                alt={`${data.title} зураг 2`}
                fill
                sizes="(max-width:768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          )}

          {data.par3 && <p className="mt-4 text-justify">{data.par3}</p>}
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <aside className="lg:col-span-2">
          <div className="sticky top-[90px] border rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold mb-4">Сүүлийн мэдээнүүд</h3>

            <div className="space-y-4">
              {news
                .filter((n) => n.id !== data.id)
                .slice(0, 4)
                .map((n) => (
                  <div
                    key={n.id}
                    className="cursor-pointer flex gap-3"
                    onClick={() => router.push(`/news/${n.id}`)}
                  >
                    <div className="relative h-[80px] w-[30%] rounded-lg overflow-hidden">
                      <Image
                        src={n.image}
                        alt={n.title}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>

                    <p className="text-sm text-gray-900 w-[70%] overflow-hidden">{n.title}</p>
                  </div>
                ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
