import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 3600;

export const metadata = {
  title: "Tech M",
  description: "Mohsen's implementation for JSON Placeholder Users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main"></div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
