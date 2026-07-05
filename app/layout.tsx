import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Concept Gym | Prémium erőnléti edzőtér",
  description: "Modern, prémium edzőterem Budapesten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${bebas.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}