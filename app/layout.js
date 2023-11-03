import { Inter } from "next/font/google";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogoutBtn from "./LogoutBtn";
import DarkMode from "./DarkMode";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const currentUser = await getServerSession(authOptions);

  const cookie = cookies().get("mode");

  return (
    <html lang="en">
      <body
        className={
          cookie != undefined && cookie.value == "dark" ? "dark-mode" : ""
        }
      >
        <DarkMode />
        {children}
      </body>
    </html>
  );
}
