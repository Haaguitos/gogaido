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

      <div className="w-[10.5rem] h-12 bg-[#D9D9D9] peer-focus:outline-none rounded-full peer dark:bg-[#D9D9D9] peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-1 after:left-1 after:bg-[#4F4F4F] after:border-[#4F4F4F] after:border after:rounded-full after:h-10 after:w-[5rem] after:transition-all dark:border-gray-600" />
      {/* peer-checked:bg-blue-600 */}

      <span className="absolute left-[1.675rem] text-base font-medium text-white dark:text-white peer-checked:text-black">
        SVM
      </span>

      <span className="absolute right-[1.675rem] text-base font-medium text-black dark:text-black peer-checked:text-white">
        KNN
      </span>
    </label>
  );
}
