import { Icons } from "@/assets";
import Image from "next/image";
interface AnimeCard {
  data: {
    name: string;
    image: string;
    genres: string[];
  };
}

export function AnimeCard({ data }: AnimeCard) {
  return (
    <div className="group relative flex h-60 w-40 rounded-2xl gap-4 overflow-hidden cursor-pointer select-none">
      <div className="absolute bg-primary-100 hidden p-4 h-full w-full z-10 group-hover:flex group-hover:flex-col dark:bg-transparent">
        <div className="flex gap-1">
          <span className="w-fit text-xs text-white font-extrabold uppercase px-1 border-2 border-white rounded-md truncate dark:text-primary-100 dark:border-primary-100">
            {data.genres[0] || "N/A"}
          </span>

          <span className="flex gap-1 items-center bg-white text-xs text-primary-100 font-extrabold px-1 rounded-md dark:bg-primary-100 dark:text-gray-700">
            <Icons.Star className="fill-primary-100 dark:fill-black" />
            4.9
          </span>
        </div>

        <span className="text-xl text-gray-700 font-extrabold mt-8 text-ellipsis line-clamp-3 capitalize dark:text-white">
          {data.name}
        </span>

        <p className="text-white text-sm mt-auto mb-4 dark:text-gray-200">
          Click for more info & where to watch
        </p>
      </div>

      <Image
        src={data.image}
        width={160}
        height={240}
        alt={data.name}
        className="object-cover dark:group-hover:brightness-[0.1]"
      />
    </div>
  );
}
