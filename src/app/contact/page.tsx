import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden px-6 py-10 md:px-10 md:py-14">
      
      {/* TITLE */}
      <h1 className="heading-lg border-l-4 border-[#2596be] pl-4">
        Холбоо барих
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        
        {/* LEFT */}
        <div className="space-y-6 text-body">

          <h2 className="heading-md text-gray-900">
            Дрон Академи Монголиа
          </h2>

          <div className="space-y-6">

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p className="text-body">
                <span className="font-semibold block">Хаяг</span>
                Тайваний төв, Урт цагааны гудамж, Улаанбаатар, Монгол Улс
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75"
                />
              </svg>

              <p className="text-body">
                <span className="font-semibold block">И-мэйл</span>
                <a
                  href="mailto:droneacademymongolia@gmail.com"
                  className="hover:underline"
                >
                  droneacademymongolia@gmail.com
                </a>
              </p>
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

              <p className="text-body">
                <span className="font-semibold block">
                  Facebook / Instagram
                </span>
                Drone Academy Mongolia
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25"
                />
              </svg>

              <p className="text-body">
                <span className="font-semibold block">Утас</span>
                <a
                  href="tel:+97699001119"
                  className="hover:underline"
                >
                  +976 9900 1119
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT MAP */}
        <div>
          <h3 className="heading-md text-gray-900 mb-4">
            Байршил
          </h3>

          <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden border">
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