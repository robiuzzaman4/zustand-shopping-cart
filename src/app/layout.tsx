import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const sans = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zustand Cart",
  description: "Zustand Shopping Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans antialiased`}>
        <div className="min-h-[calc(100vh-56px)] mt-14">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
