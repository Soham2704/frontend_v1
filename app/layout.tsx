import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruckDispatch Pro — The AI-Powered Dispatch Operating System",
  description:
    "TruckDispatch Pro automates your entire load lifecycle from discovery to delivery with AI that communicates, decides, and executes in real time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
