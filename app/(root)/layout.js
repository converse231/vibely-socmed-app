import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@app/components/layout/LeftSidebar";
import MainContainer from "@app/components/layout/MainContainer";
import RightSidebar from "@app/components/layout/RightSidebar";
import Topbar from "@app/components/layout/Topbar";
import BottomBar from "@app/components/layout/BottomBar";

export const metadata = {
  title: "Vibely",
  description: "Vibe with different people",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row text-light-1">
            <LeftSidebar />
            <MainContainer>{children}</MainContainer>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
