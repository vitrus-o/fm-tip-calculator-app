import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tip Calculator App",
  description: "Frontend Mentor Tip Calculator Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}