import { news } from "@/src/data/dummy";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  const featured = news[0];
  const list = news.slice(1);

  return (
    <section className="py-2 md:py-20 lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT: FEATURED NEWS */}
          <div className="lg:w-[60%] w-full">
            <Link href={`/news/${featured.id ?? 0}`}>
              <div className="relative h-[260px] sm:h-[360px] lg:h-[580px] rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                    {featured.title}
                  </h3>
                  <span className="text-sm font-medium opacity-90">
                    Дэлгэрэнгүй унших →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT: NEWS LIST */}
          <div className="lg:w-[40%] w-full">
            {list.map((item, i) => (
              <Link href={`/news/${item.id ?? i}`} key={i}>
                <div className="flex gap-4 mb-5 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                  
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 mb-1">
                      {item.date} • {item.type}
                    </div>
                    <div className="text-sm sm:text-base font-semibold leading-snug line-clamp-2">
                      {item.title}
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
