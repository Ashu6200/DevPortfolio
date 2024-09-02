"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className='flex items-center justify-center mx-1'>
      {theme === "light" ? (
        <BiMoon
          className='cursor-pointer'
          fill='block'
          size={25}
          onClick={(e) => setTheme("dark")}
        />
      ) : (
        <BiSun
          className='cursor-pointer'
          size={25}
          onClick={(e) => setTheme("light")}
        />
      )}
    </div>
  );
};