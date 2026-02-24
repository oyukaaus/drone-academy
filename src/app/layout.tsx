import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "antd/dist/reset.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)] md:px-20 lg:px-20 px-4">
          {children}
        </main>
        <Footer />
        <br></br>
      </body>
    </html>
  );
}
