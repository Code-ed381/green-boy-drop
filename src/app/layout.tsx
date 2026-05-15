import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Green Boy Records",
  description:
    "Accra's full-service music ecosystem. Artists, production, beats, publishing — all under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen text-[#F5F5F5] flex flex-col">
        <div className="max-w-full mx-auto w-full bg-[#0A0A0A]">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
