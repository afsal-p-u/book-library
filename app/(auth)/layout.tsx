import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import { MessageContextProvider } from "@/providers/MessageProvider";

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
            <MessageContextProvider>
              {children}
            </MessageContextProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
