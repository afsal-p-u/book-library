import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider, ThemeProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookElysium",
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
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
