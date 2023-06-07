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
      <div className="absolute hidden p-4 h-full w-full z-10 group-hover:flex group-hover:flex-col">
        <div className="flex gap-1">
          <span className="w-fit text-xs text-primary-100 font-extrabold uppercase px-1 border-2 border-primary-100 rounded-md truncate">
            {data.genres[0] || "N/A"}
          </span>

          <span className="flex gap-1 items-center bg-primary-100 text-xs text-gray-700 font-extrabold px-1 rounded-md">
            <Icons.Star />
            4.9
          </span>
        </div>

        <span className="text-xl text-white font-extrabold mt-8 text-ellipsis line-clamp-3 capitalize">
          {data.name}
        </span>

        <p className="text-gray-200 text-sm mt-auto mb-4">
          Click for more info & where to watch
        </p>
      </div>

      <Image
        src={data.image}
        width={160}
        height={240}
        alt={data.name}
        className="object-cover group-hover:brightness-[0.1]"
      />
    </div>
  );
}
