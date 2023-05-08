"use client";

import { useState } from "react";

export function Switch() {
  const [value, setValue] = useState<"SVM" | "KNN">("SVM");

  function handleValueOnChange() {
    if (value === "SVM") setValue("KNN");
    else setValue("SVM");
  }

  console.log("value", value);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        onChange={(e) => {
          handleValueOnChange();
        }}
        className="sr-only peer"
      />

      <div className="w-[10.5rem] h-12 bg-secondary-400 peer-focus:outline-none rounded-2xl peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-1 after:left-1 after:bg-secondary-600 after:border-secondary-600 after:border after:rounded-xl after:h-10 after:w-[5rem] after:transition-all" />
      {/* peer-checked:bg-blue-600 */}

      {/* Dark theme snippet */}
      {/* <span className="absolute left-[1.675rem] text-base font-medium text-primary-100 dark:text-white peer-checked:text-black"> */}
      <span className="absolute left-[1.675rem] text-base font-medium text-primary-100  peer-checked:text-secondary-200">
        SVM
      </span>

      <span className="absolute right-[1.675rem] text-base font-medium text-secondary-200 peer-checked:text-primary-100">
        KNN
      </span>
    </label>
  );
}
