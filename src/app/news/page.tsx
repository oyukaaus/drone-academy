"use client";
import PhotoBar from "@/src/components/sections/PhotoBar";
import { gallery, news, videos } from "@/src/data/dummy";
import { Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-[24px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* ===== FEATURED NEWS ===== */}
        <div
          className="
          flex flex-col lg:flex-row
          gap-8
          items-start
          mt-10 mb-12
        "
        >
          {/* TEXT */}
          <div
            className="
              flex flex-col gap-4
              w-full lg:w-1/2
              cursor-pointer
            "
            onClick={() => router.push(`/news/${news[0].id}`)}
          >
            <div className="rounded-full bg-blue-500 text-white text-xs w-fit px-3 py-1">
              {news[0].type}
            </div>

            <h2
              className="
              text-xl sm:text-2xl lg:text-[26px]
              text-black font-bold
              hover:text-gray-600
            "
            >
              {news[0].title}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 line-clamp-4">
              {news[0].par1}
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
            relative
            w-full lg:w-1/2
            h-[220px] sm:h-[300px] lg:h-[420px]
            rounded-xl overflow-hidden
          "
          >
            <Image
              src={news[0].image}
              alt={news[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ===== NEWS GRID ===== */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          mb-20
        "
        >
          {news.slice(1).map((n) => (
            <div
              key={n.id}
              className="cursor-pointer group"
              onClick={() => router.push(`/news/${n.id}`)}
            >
              <div
                className="
                relative
                h-[160px]
                rounded-xl
                overflow-hidden
                mb-3
              "
              >
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3
                className="
                text-sm sm:text-base
                font-semibold
                text-gray-900
                line-clamp-2
              "
              >
                {n.desc}
              </h3>
            </div>
          ))}
        </div>
        {/* VIEW ALL */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => router.push("/news")}
            className="bg-black text-white text-sm font-semibold px-8 py-3 hover:bg-gray-800 transition"
          >
            Бүх мэдээг унших
          </button>
        </div>

        {/* PHOTO NEWS */}
        <div className="py-12">
          <div className="mb-4">
            <h2 className="text-sm lg:text-xl md:text-xl font-semibold tracking-wide uppercase">
              Photo gallery
            </h2>
            <div className="mt-2 h-px w-full bg-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {gallery.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                setShowModal(true);
              }}
            >
              <div className="relative h-[240px] mb-3">
                <Image
                  src={item}
                  alt={index + "im"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 h-px w-full  mb-6" />
        <Modal
          open={showModal}
          footer={null}
          onCancel={() => setShowModal(false)}
          width={1000}
          centered
        >
          <PhotoBar
            items={gallery.map((n) => ({
              image: n,
            }))}
            startIndex={activeIndex}
          />
        </Modal>
        <div className="py-12">
          <div className="mb-4">
            <h2 className="text-sm lg:text-xl md:text-xl font-semibold tracking-wide uppercase">
              Video gallery
            </h2>
            <div className="mt-2 h-px w-full bg-black" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {videos.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setActiveIndex(index);
                setShowVideoModal(true);
              }}
            >
              <div className="relative h-[240px] rounded-xl overflow-hidden group">
                <Image
                  src={item.thumb}
                  alt={`Video ${index + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="size-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          {/* MODAL BOX */}
          <div className="relative w-full max-w-3xl bg-black rounded-2xl shadow-xl overflow-hidden">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-3 right-3 z-10
                   w-9 h-9 rounded-full
                   bg-black/70 text-white
                   flex items-center justify-center
                   hover:bg-black transition"
            >
              ✕
            </button>

            {/* VIDEO */}
            <video
              src={videos[activeIndex].src}
              controls
              autoPlay
              className="w-full max-h-[70vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
