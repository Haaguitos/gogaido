import { Icons } from "@/assets";
import Image from "next/image";

export function SearchBar() {
  return (
    <div className="flex relative items-center">
      <input
        className="w-full h-12 px-5 py-1 sm:px-12 sm:pl-5 sm:py-3 flex-1 text-black bg-[#D9D9D9] rounded-full placeholder:text-black focus:bg-[#4F4F4F] focus:text-white  focus:outline-none focus:ring-[1px] focus:ring-[#4F4F4F] focus:placeholder:text-white"
        placeholder="Search for anime..."
      />

      <div className="flex absolute w-10 h-10 right-1 items-center justify-center bg-gray-500 rounded-full">
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
