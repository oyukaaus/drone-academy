import { teachers } from "@/src/data/dummy";
import Image from "next/image";
import Link from "next/link";

export default function TeachersPage() {
  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative h-[480px] w-full">
        <Image
          src="/images/teachers/teachers.jpg" // <-- replace with your hero image
          alt="Our Teachers"
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 text-white">
            {/* <p className="text-sm uppercase tracking-wide mb-2">
              About Us
            </p> */}
            <h1 className="text-4xl md:text-5xl font-semibold">Our Teachers</h1>

            {/* breadcrumb */}
            {/* <div className="mt-4 text-sm text-white/80 flex gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>›</span>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <span>›</span>
              <span className="text-white">Our Teachers</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* image */}
        <div className="relative rounded-[24px] overflow-hidden shadow-lg">
          <Image
            src="/images/hero/1.png" // <-- main content image
            alt="Teacher"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* text */}
        <div>
          <h2 className="text-3xl font-semibold text-sky-500 mb-6">
            Our Teachers
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our teachers are highly qualified, enthusiastic and inspirational
            individuals who are joining us from critically acclaimed
            institutions from around the world, committed to inspiring and
            developing every student in a safe and supportive learning
            environment.
          </p>

          <ul className="space-y-4">
            {[
              "Outstanding role models who embody our Vision, Mission and Values",
              "Excellent classroom managers who create safe and supportive learning environments",
              "Committed to personal and professional ethics, integrity and respect",
              "Professional collaborators with students, parents and colleagues",
              "Experienced in incorporating innovative use of learning technologies",
              "Actively using varied assessments to inform teaching",
              "Committed to continuous professional development",
              "Experienced in best global educational practices",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== TEACHERS GRID ===== */}
      <section className="max-w-[1400px] mx-auto px-6 pb-24">
        <h3 className="text-2xl font-semibold mb-10">
          Багш нар
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div>
              <div
                key={teacher.id}
                className="bg-white rounded-[20px] shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={400}
                  height={40}
                  className="w-full h-[400] object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg">{teacher.name}</h4>
                <p className="text-sm text-gray-500">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
