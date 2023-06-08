import { Icons } from "@/assets";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  loading?: boolean;
  onSubmit?: (value: string) => void;
  hasData?: boolean;
}

export function SearchBar({ loading, onSubmit, hasData }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(inputValue);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`${
        hasData && "translate-y-16"
      } flex relative items-center duration-[1200ms] transition-all z-10`}
    >
      <input
        className="w-full h-12 px-5 py-1 sm:px-12 sm:pl-5 sm:py-3 flex-1 text-gray-300 bg-gray-100 rounded-2xl placeholder:text-gray-200 outline-none dark:bg-gray-400 dark:placeholder:text-gray-300 dark:text-gray-200"
        placeholder="Type an anime you like..."
        value={inputValue}
        onChange={handleInputChange}
      />

      {loading ? (
        <Icons.Spinner className="flex absolute right-2 animate-spin fill-primary-100" />
      ) : (
        <button
          type="submit"
          className="group flex absolute cursor-pointer w-10 h-10 right-1 items-center justify-center bg-primary-200 rounded-xl hover:bg-primary-500 dark:hover:bg-white focus:bg-gray-50 dark:focus:bg-gray-700"
        >
          <Icons.MagnifyingGlass className="stroke-white group-hover:stroke-primary-100 dark:group-hover:stroke-primary-100 group-focus:stroke-primary-100 dark:group-focus:stroke-primary-100" />
        </button>
      )}
    </motion.form>
  );
}
