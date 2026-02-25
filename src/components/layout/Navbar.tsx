"use client";

import Image from "next/image";
import { Dropdown, Button } from "antd";
import { MenuOutlined, SendOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Drawer } from "antd";
import Link from "next/link";

const menu = (items: { label: string; path?: string }[], router: any) => ({
  items: items.map((item, i) => ({
    key: i,
    label: <span className="text-[13px]">{item.label}</span>,
    onClick: () => {
      if (item.path) router.push(item.path);
    },
  })),
});

export default function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const go = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (key: string) =>
    `!bg-transparent border-none shadow-none
     flex items-center gap-1 px-4 py-2 rounded-full
     transition cursor-pointer
     ${
       openKey === key
         ? "bg-emerald-200 text-emerald-900"
         : "text-gray-800 hover:bg-emerald-100"
     }`;

  return (
    <>
      <div className="h-[110px]">
        {/* <header className="fixed top-0 left-0 w-full  z-50 transition-all duration-300 "> */}
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300  ">
          <div
            className={`  max-w-full
  mx-4 sm:mx-6 md:mx-10 lg:mx-20 
  rounded-[24px] ${scrolled ? "bg-white shadow-md" : "bg-[#0B3C5D]"}`}
          >
            {/* FLOATING BAR */}
            <div
              className="
  h-[64px] sm:h-[68px] lg:h-[72px]
  mt-3 sm:mt-4 lg:mt-5
  px-4 sm:px-6 lg:px-8
  flex items-center justify-between
"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  <Image
                    src={scrolled ? "/images/white.png" : "/images/logo.png"}
                    width={scrolled ? 200 : 60}
                    alt="Drone academy"
                    height={44}
                    priority
                  />
                  <div
                    className={`
    text-[11px] sm:text-[12px] md:text-[12px]
    leading-tight font-semibold font-montserrat ml-[-10px]
    ${scrolled ? "hidden" : "text-white"}
  `}
                  >
                    <span className="font-bold">DRONE ACADEMY</span>
                    <br />
                    <span className="text-[10px] ">MONGOLIA</span>
                  </div>
                </div>
                {/* CENTER NAV */}
                <nav
                  className="  hidden lg:flex
    items-center gap-x-5
    text-[14px] font-medium font-montserrat
    "
                >
                  <Link href="/about">
                    <Button
                      className={` ${navItem("news")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Бидний тухай
                    </Button>
                  </Link>
                  <Dropdown
                    menu={menu(
                      [
                        { label: "Анхан шат", path: "/beginner" },
                        { label: "Дунд шат", path: "/mid" },
                        { label: "Ахисан түвшин", path: "/advanced" },
                      ],
                      router,
                    )}
                    onOpenChange={(o) => setOpenKey(o ? "project" : null)}
                  >
                    <Button
                      className={` ${navItem("project")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Сургалтууд
                    </Button>
                  </Dropdown>
                  {/* <Link href="/teachers">
                    <Button
                      className={` ${navItem("teachers")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Багш нар
                    </Button>
                  </Link> */}
                  <Link href="/graduates">
                    <Button
                      className={` ${navItem("graduates")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Төгсөгчид
                    </Button>
                  </Link>
                  {/* <Link href="/news">
                    <Button
                      className={` ${navItem("news")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Мэдээ
                    </Button>
                  </Link>{" "} */}
                </nav>
              </div>
              {/* RIGHT */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Button
                  className="lg:hidden !border-none"
                  icon={<MenuOutlined />}
                  onClick={() => setMobileOpen(true)}
                />

                <Button
                  type="primary"
                  onClick={() => router.push("/contact")}
                  className="!bg-[#f04b2f] !rounded-full !h-[42px] !px-4 sm:!px-6 hidden sm:inline"
                >
                  Холбоо барих
                </Button>
                <Drawer
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                  placement="right"
                  className="lg:hidden"
                  size={300}
                >
                  <nav className="flex flex-col text-[15px]">
                    <div
                      className="flex items-center gap-2 cursor-pointer ml-[-20px]"
                      onClick={() => router.push("/")}
                    >
                      <Image
                        src={
                          scrolled ? "/images/white.png" : "/images/logo.png"
                        }
                        width={scrolled ? 200 : 60}
                        alt="Drone academy"
                        height={44}
                        priority
                      />
                      <div
                        className={`
    text-[11px] sm:text-[12px] md:text-[12px]
    leading-tight font-semibold font-montserrat ml-[-10px]
    ${scrolled ? "hidden" : "text-white"}
  `}
                      >
                        <span className="font-bold">DRONE ACADEMY</span>
                        <br />
                        <span className="text-[10px] ">MONGOLIA</span>
                      </div>
                    </div>
                    {/* ABOUT */}
                    <button
                      className=" py-3 text-left font-semibold"
                      onClick={() => go("/about")}
                    >
                      ТАНИЛЦУУЛГА
                    </button>

                    {/* TRAINING */}
                    <div className="border-t py-3">
                      <button
                        className="w-full flex items-center justify-between font-semibold"
                        onClick={() =>
                          setOpenSection(
                            openSection === "training" ? null : "training",
                          )
                        }
                      >
                        СУРГАЛТУУД
                        <span>{openSection === "training" ? "−" : "+"}</span>
                      </button>

                      {openSection === "training" && (
                        <div className="mt-3 flex flex-col gap-3 pl-2 text-gray-700 items-start">
                          <button onClick={() => go("/beginner")}>
                            Анхан шат
                          </button>
                          <button onClick={() => go("/mid")}>Дунд шат</button>
                          <button onClick={() => go("/advanced")}>
                            Ахисан шат
                          </button>
                        </div>
                      )}
                    </div>

                    {/* GRADUATES */}
                    <button
                      className="border-t py-3 text-left font-semibold"
                      onClick={() => go("/graduates")}
                    >
                      ТӨГСӨГЧИД
                    </button>

                    {/* CONTACT CTA */}
                    <button
                      className="mt-6 bg-[#f04b2f] text-white rounded-lg py-3 text-center font-semibold"
                      onClick={() => go("/contact")}
                    >
                      Холбоо барих
                    </button>
                  </nav>
                </Drawer>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
