import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "./provider";
import Layout from "@/pages/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KStore",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeContextProvider>
          <Layout children={children} />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
