import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="max-w-7xl mx-auto">
      <body className={inter.className}>
        <div className="">
          <a className="btn flex text-end">Dash Board</a>
        </div>
        {children}
      </body>
    </html>
  );
}
