import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import { Poppins } from "next/font/google";
// import { Suspense } from "react";
// import Loading from "@/components/Loading";
import AuthProvider from "@/utils/AuthProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Poppins",
});

export const metadata = {
  title: `Ashu's Protofolio`,
  description: "MERN stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-white bg-no-repeat dark:bg-black duration-300 m-2`}
      >
        <AuthProvider>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {/* <Suspense fallback={<Loading />}> */}
            <Toaster position='top-right' />
            {children}
            {/* </Suspense> */}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
