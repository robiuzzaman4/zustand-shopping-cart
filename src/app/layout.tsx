import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";

const sans = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Zustify",
    template: `%s - Zustify`,
  },
  metadataBase: new URL("https://zustify-rz.vercel.app/"),
  description:
    "An example of, shopping cart state management with localStorage persistence by using Next.js, Zustand & TypeScript.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Zustand",
    "Zustand state management",
    "Zustand shopping cart",
    "Next.js shopping cart",
  ],
  authors: [
    {
      name: "Md. Robi-uz-zaman Ruhan",
      url: "https://github.com/robiuzzaman4",
    },
  ],
  creator: "@robiuzzaman4",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zustify-rz.vercel.app/",
    title: "Zustify",
    description:
      "An example of, shopping cart state management with localStorage persistence by using Next.js, Zustand & TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zustify",
    description:
      "An example of, shopping cart state management with localStorage persistence by using Next.js, Zustand & TypeScript.",
    creator: "@robiuzzaman4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sans.variable} font-sans antialiased`}>
        <div className="min-h-[calc(100vh-56px)] mt-14">
          <Navbar />
          {children}
        </div>
        <Toaster className="font-sans" position="top-center" duration={1500} />
      </body>
    </html>
  );
}
