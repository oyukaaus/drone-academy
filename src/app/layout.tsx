import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "antd/dist/reset.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Drone Academy Mongolia | FPV Drone Training | Дрон сургалт",
    template: "%s | Drone Academy Mongolia",
  },

  description:
    "Drone Academy Mongolia нь Монголын Дрон Нисгэгчдийн Холбооны гишүүн байгууллага бөгөөд дрон технологийн мэдлэг, ур чадварыг хөгжүүлэхэд чиглэдэг. FPV drone training, research, consulting services in Mongolia.",

  keywords: [
    "Drone Academy Mongolia",
    "FPV drone training",
    "Drone training Mongolia",
    "Дрон сургалт",
    "FPV дрон сургалт",
    "Drone pilot training Mongolia",
  ],

  authors: [{ name: "Drone Academy Mongolia" }],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Drone Academy Mongolia",
    description: "Professional FPV drone training and education in Mongolia.",
    url: "https://yourdomain.com",
    siteName: "Drone Academy Mongolia",
    images: [
      {
        url: "/drone-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Drone Academy Mongolia",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drone Academy Mongolia",
    description: "Professional FPV Drone Training in Mongolia",
    images: ["/drone-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={poppins.className}>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}