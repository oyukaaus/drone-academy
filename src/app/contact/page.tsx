import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14 space-y-8">
      <h1 className="heading-xl mb-16">Холбоо барих</h1>
      {/* TITLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* LEFT */}
        <div className="space-y-8">
        <h2 className="heading-md text-gray-900">Дрон Академи Монголиа</h2>

          <div className="space-y-6 text-body text-gray-700">
            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div>
                <span className="text-small font-semibold block text-gray-900">
                  Хаяг
                </span>
                Тайваний төв, Урт цагааны гудамж, Улаанбаатар, Монгол Улс
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 flex-shrink-0 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5l9 6 9-6"
                />
              </svg>
              <div>
                <span className="text-small font-semibold block text-gray-900">
                  И-мэйл
                </span>
                <a
                  href="mailto:droneacademymongolia@gmail.com"
                  className="hover:underline"
                >
                  droneacademymongolia@gmail.com
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex items-start gap-3">
              <div className="relative w-5 h-5 mt-1">
                <Image
                  src="/images/fb.png"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="text-small font-semibold block text-gray-900">
                  Facebook / Instagram
                </span>
                Drone Academy Mongolia
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 flex-shrink-0 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 4.5c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a.75.75 0 0 1-.98.221 12.035 12.035 0 0 1-7.143-7.143.75.75 0 0 1 .221-.98l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5Z"
                />
              </svg>

              <div>
                <span className="text-small font-semibold block text-gray-900">
                  Утас
                </span>
                <a href="tel:+97699001119" className="hover:underline">
                  +976 9900 1119
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div>
          {/* <h3 className="heading-md text-gray-900 mb-4">Байршил</h3> */}

          <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden border">
            <Image
              src="/images/location.png"
              alt="Drone Academy Mongolia Location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
