import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdullah Al Asif | Software Engineer",
  description:
    "Software Engineer specializing in ASP.NET Core, enterprise systems, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-5xl mx-auto px-6">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}