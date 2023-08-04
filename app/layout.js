import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger Clone",
  description: "An exercise for cloning messenger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={inter.className}>
          <ToasterContext />
          {children}
        </body>
      </AuthContext>
    </html>
  );
}
