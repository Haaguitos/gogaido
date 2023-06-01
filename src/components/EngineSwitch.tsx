"use client";

import { useState } from "react";

export function EngineSwitch() {
  const [value, setValue] = useState<"SVM" | "KNN">("SVM");

  function handleValueOnChange() {
    if (value === "SVM") setValue("KNN");
    else setValue("SVM");
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        onChange={(e) => handleValueOnChange()}
        className="sr-only peer"
      />

      <div
        className="w-[10.5rem] h-12 bg-gray-50 peer-focus:outline-none rounded-2xl peer peer-checked:after:translate-x-full
      after:content-[''] after:absolute after:top-1 after:left-1 after:bg-primary-500 after:border-primary-500 after:border after:rounded-xl after:h-10 after:w-[5rem] after:transition-all
      dark:bg-gray-500 dark:after:bg-gray-700 dark:after:border-gray-600"
      />

      <span
        className="flex w-20 h-10 rounded-xl absolute left-1 items-center justify-center text-base font-medium text-white peer-checked:text-gray-300
      dark:text-primary-100 dark:peer-checked:text-gray300
      peer-checked:peer-hover:bg-gray-600 peer-checked:peer-hover:text-gray-200"
      >
        SVM
      </span>

      <span
        className="flex w-20 h-10 rounded-xl absolute right-1 items-center justify-center text-base font-medium text-gray-300 peer-checked:text-white
      dark:text-gray-300 dark:peer-checked:text-primary-100
      peer-checked:peer-hover:bg-gray-700 peer-hover:bg-gray-600 peer-hover:text-gray-200"
      >
        KNN
      </span>
    </label>
  );
}
