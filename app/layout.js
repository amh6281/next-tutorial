import { Inter } from "next/font/google";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const currentUser = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        {currentUser ? (
          <>
            {currentUser.user.name}
            <LogoutBtn />
          </>
        ) : (
          <LoginBtn>로그인</LoginBtn>
        )}
        {children}
      </body>
    </html>
  );
}
