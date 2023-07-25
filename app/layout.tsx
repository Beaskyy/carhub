import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <body className="relative">{children}</body>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </html>
  );
}
