import { Anime } from "@/types";
import { AnimeCard } from "./AnimeCard";

interface AnimesSection {
  animes: Anime[];
}

export function AnimesSection({ animes }: AnimesSection) {
  return (
    <section className="flex flex-col w-full max-w-[67.5rem] pt-8">
      <span className="text-2xl font-black text-gray-200">Best matches:</span>
      <span className="text-base text-gray-200 dark:text-gray-300">
        Based on search engine ranking, sorted by similarity.
      </span>

      <div className="grid grid-cols-[repeat(3,_auto)] w-full justify-between gap-4 pt-6 pb-12 md:gap-6 md:grid-cols-6">
        {animes.slice(0, 6).map((anime) => (
          <AnimeCard anime={anime} key={anime.name} />
        ))}
      </div>

      <span className="text-2xl font-black text-gray-200">
        More recommendations:
      </span>
      <span className="text-base text-gray-200 dark:text-gray-300">
        Sorted by similarity.
      </span>

      <div className="grid grid-cols-[repeat(3,_auto)] w-full justify-between gap-4 pt-6 pb-10 md:gap-6 md:grid-cols-6">
        {animes.slice(6, 30).map((anime) => (
          <AnimeCard anime={anime} key={anime.name} />
        ))}
      </div>
    </section>
  );
}
