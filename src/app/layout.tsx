import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LetsProject - Rozwiązania cyfrowe",
  description: "Cyfrowe rozwiązania dla Twojego biznesu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <main>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
