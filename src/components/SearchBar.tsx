import { Icons } from "@/assets";
import Image from "next/image";

export function SearchBar() {
  return (
    <div className="flex relative items-center">
      <input
        className="w-full h-12 px-5 py-1 sm:px-12 sm:pl-5 sm:py-3 flex-1 text-secondary-100 bg-secondary-300 rounded-2xl placeholder:text-secondary-200 outline-none"
        placeholder="Type an anime you like..."
      />

      <div className="flex absolute w-10 h-10 right-1 items-center justify-center bg-primary-200 rounded-xl">
        <Image
          src={Icons.MagnifyingGlass}
          alt="Texto alternativo"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
