import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { GlobalContext } from "@/context/Index";
import AuthProvider from "@/utils/AuthProvider";
import { ThemeProvider } from "@/utils/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Poppins",
  preload: true,
});

export const metadata = {
  title: `Ashu's Protfolio`,
  description: "MERN stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <AuthProvider>
        <GlobalContext>
          <body
            className={`${poppins.className} bg-white bg-no-repeat dark:bg-black duration-300 m-2 relative`}
          >
            <div className={"blurspot"}></div>
            <div className={"blurspot2"}></div>
            <div className={"blurspot3"}></div>
            <ThemeProvider attribute='class' defaultTheme='dark'>
              <Toaster position='top-right' />
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </ThemeProvider>
          </body>
        </GlobalContext>
      </AuthProvider>
    </html>
  );
}
