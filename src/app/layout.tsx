import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ULTIMATE TECH | Future-Ready Business Solutions",
  description: "We combine cutting-edge technology with strategic innovation to help your company thrive in the digital era.",
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
