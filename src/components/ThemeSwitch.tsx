"use client";

import { Icons } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import useColorMode from "../../hooks/useColorMode";

export function ThemeSwitch() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className="flex w-12 h-12 bg-primary-500 items-center justify-center rounded-2xl
      dark:bg-gray-700"
    >
      <Image
        src={colorMode === "light" ? Icons.Moon : Icons.Sun}
        alt="Change theme"
        width={24}
        height={24}
      />
    </button>
  );
}
