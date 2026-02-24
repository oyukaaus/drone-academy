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
                  <Link href="/teachers">
                    <Button
                      className={` ${navItem("teachers")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Багш нар
                    </Button>
                  </Link>                  <Link href="/graduates">
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
                  <Link href="/news">
                    <Button
                      className={` ${navItem("news")} ${
                        scrolled
                          ? "text-black hover:!text-black"
                          : "text-white hover:!text-white"
                      } !border !border-transparent hover:!border-gray-300 `}
                    >
                      Мэдээ
                    </Button>
                  </Link>{" "}
                </nav>
              </div>
              {/* RIGHT */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* <Dropdown
                  menu={menu(
                    [
                      { label: "MN", path: "/mn" },
                      { label: "EN", path: "/en" },
                    ],
                    router,
                  )}
                  onOpenChange={(o) => setOpenKey(o ? "project" : null)}
                >
                  <Button
                    className={`${navItem("lang")} ${
                      scrolled ? "text-black" : "text-white"
                    } hidden sm:inline`}
                  >
                    <span className="font-montserrat">MN</span>
                  </Button>
                </Dropdown> */}
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
                >
                  <nav className="flex flex-col gap-4 text-lg">
                    {/* HOME */}
                    <Button
                      type="text"
                      className="text-left"
                      onClick={() => {
                        router.push("/");
                        setMobileOpen(false);
                      }}
                    >
                      Нүүр
                    </Button>

                    {/* ABOUT */}
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">Бидний тухай</p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push("/about");
                          setMobileOpen(false);
                        }}
                      >
                        Танилцуулга
                      </Button>
                    </div>

                    {/* ACTIVITIES */}
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">Сургалт</p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push("/membership");
                          setMobileOpen(false);
                        }}
                      >
                        Анхан шат
                      </Button>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push("/events");
                          setMobileOpen(false);
                        }}
                      >
                        Ахисан түвшин
                      </Button>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push("/coop");
                          setMobileOpen(false);
                        }}
                      >
                        Хамтын ажиллагаа
                      </Button>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-500 mb-2">
                        Мэдээ, мэдээлэл
                      </p>
                      <Button
                        type="text"
                        className="text-left"
                        onClick={() => {
                          router.push("/news");
                          setMobileOpen(false);
                        }}
                      >
                        Мэдээ
                      </Button>
                    </div>

                    {/* CTA */}
                    <Button
                      type="primary"
                      className="mt-6"
                      onClick={() => {
                        router.push("/contact");
                        setMobileOpen(false);
                      }}
                    >
                      Холбоо барих
                    </Button>
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
