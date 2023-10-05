import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/SessionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SearchContextProvider } from "@/providers/SearchProvider";
import { MessageContextProvider } from "@/providers/MessageProvider";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <SessionProvider>
          <ThemeProvider>
            <MessageContextProvider>
              <SearchContextProvider>
                <div className={`flex w-full dark:bg-light-black`}>
                  <div className="w-1/4 max-md:w-0 max-md:bg-blue">
                    <Sidebar />
                  </div>
                  <div className="w-3/4 max-md:w-full">
                    <Navbar />
                    {children}
                    <Message />
                  </div>
                </div>
              </SearchContextProvider>
            </MessageContextProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
