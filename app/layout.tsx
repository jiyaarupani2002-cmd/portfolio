import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiyaa Rupani - Senior Account Manager",
  description: "Portfolio for Jiyaa Rupani, global marketing strategist."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
