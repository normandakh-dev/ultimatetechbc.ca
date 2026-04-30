import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULTIMATE TECH | Network Cabling, Security Systems & Digital Solutions",
  description: "Expert Cat6 cable installation, structured cabling, security camera systems, and custom web/app development. Serving your business with future-ready technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
