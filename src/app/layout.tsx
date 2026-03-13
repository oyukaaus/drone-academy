import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "antd/dist/reset.css";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className={poppins.className}>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)]">
        {/* <main className="min-h-[calc(100vh-120px)] md:px-20 lg:px-20 px-4"> */}
          {children}
        </main>
        <Footer />
        <br></br>
      </body>
    </html>
  );
}
