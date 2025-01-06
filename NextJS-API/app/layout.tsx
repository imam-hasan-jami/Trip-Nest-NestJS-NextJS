import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip-Nest",
  description: "A Booking Website for Travelers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{ backgroundColor: "#fff", padding: "10px", color: "#121212" }}
        >
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
