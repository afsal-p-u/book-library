import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { MessageContextProvider, SearchContextProvider, SessionProvider, ThemeProvider } from "../provider";
import Message from "@/components/Message";

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
        <ThemeProvider>
          <SessionProvider>
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
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
