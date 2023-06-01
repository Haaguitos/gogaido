import { Icons } from "@/assets";
import Image from "next/image";

interface SearchBarProps {
  loading?: boolean;
}

export function SearchBar({ loading }: SearchBarProps) {
  return (
    <div className="flex relative items-center">
      <input
        className="w-full h-12 px-5 py-1 sm:px-12 sm:pl-5 sm:py-3 flex-1 text-gray-200 bg-gray-100 rounded-2xl placeholder:text-gray-200 outline-none dark:bg-gray-400 dark:text-gray-300"
        placeholder="Type an anime you like..."
      />

      {loading ? (
        <Icons.Spinner className="flex absolute right-2 animate-spin fill-primary-100" />
      ) : (
        <button className="group flex absolute cursor-pointer w-10 h-10 right-1 items-center justify-center bg-primary-200 rounded-xl hover:bg-white focus:bg-gray-700">
          <Icons.MagnifyingGlass className="stroke-white group-hover:stroke-primary-100 group-focus:stroke-primary-100" />
        </button>
      )}
    </div>
  );
}
