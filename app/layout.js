import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechMahindra: Home Page",
  description: "JSON Placeholder Users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {/* <main className="flex justify-center items-center flex-col "> */}
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
