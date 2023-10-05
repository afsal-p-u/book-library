import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AfterAuthLayout from "@/components/AfterAuthLayout";
import { SessionProvider } from "@/providers/SessionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SearchContextProvider } from "@/providers/SearchProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <SessionProvider>
          <ThemeProvider>
            <MessageContextProvider>
              <SearchContextProvider>
                <AfterAuthLayout children={children} />
              </SearchContextProvider>
            </MessageContextProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
