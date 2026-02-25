import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-20 lg:px-20 px-4 ">
      <footer
        className="
  bg-gradient-to-b from-[#0e4a6f] to-black
  text-white
  rounded-[24px]
  mt-16 sm:mt-20 lg:mt-24 md:px-20 lg:px-20 px-4 
"
      >
        <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 py-14 sm:mx-6 md:mx-10 lg:mx-auto ">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Бидний тухай</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Танилцуулга
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Сургалтууд</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="/beginner" className="hover:text-white">
                    Анхан шат
                  </Link>
                </li>
                <li>
                  <Link href="/mid" className="hover:text-white">
                    Дунд шат
                  </Link>
                </li>       <li>
                  <Link href="/advanced" className="hover:text-white">
                    Ахисан шат
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Чухал холбоосууд</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {/* <li>
                  <Link href="/news" className="hover:text-white">
                    Мэдээ
                  </Link>
                </li>{" "} */}
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Холбоо барих
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Холбоо барих</h4>
              <div className="text-sm text-white/80 space-y-2">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <span>Улаанбаатар хот, Чингэлтэй дүүрэг</span>
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <a
                    href="mailto:droneacademymongolia@gmail.com"
                    className="hover:text-white"
                  >
                    droneacademymongolia@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <a href="tel:+97699001119" className="hover:text-white">
                    (+976) 99001119
                  </a>
                </p>
              </div>

              {/* Social */}
              {/* <div className="flex gap-3 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
                >
                  f
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
                >
                  X
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20"
                >
                  ▶
                </a>
              </div> */}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20 my-10" />

          {/* BOTTOM */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/70 gap-4">
            <span>
              © {new Date().getFullYear()} Drone Academy Mongolia
            </span>
            <span>Вэбсайтыг SkySolution бүтээв</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
