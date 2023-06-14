"use client";

import { Icons } from "@/assets";
import useColorMode from "../../hooks/useColorMode";

export function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className="group flex w-12 h-12 bg-primary-500 items-center justify-center rounded-2xl
      dark:bg-gray-700"
    >
      <Icons.Sun className="rotate-0 scale-100 transition-all fill-white dark:-rotate-90 dark:scale-0 group-hover:fill-primary-100" />
      <Icons.Moon className="absolute rotate-90 scale-0 transition-all fill-primary-200 dark:rotate-0 dark:scale-100 group-hover:fill-primary-100" />
    </button>
  );
}
