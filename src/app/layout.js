import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { Poppins } from "next/font/google";
import AuthProvider from "@/utils/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { GlobalContext } from "@/context/Index";

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
      <body
        className={`${poppins.className} bg-white bg-no-repeat dark:bg-black duration-300 m-2`}
      >
        <GlobalContext>
          <AuthProvider>
            <ThemeProvider attribute='class' defaultTheme='light'>
              <Toaster position='top-right' />
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </ThemeProvider>
          </AuthProvider>
        </GlobalContext>
      </body>
    </html>
  );
}
