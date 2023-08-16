import { Anime } from "@/types";
import { AnimeCard } from "./AnimeCard";

interface AnimesSection {
  animes: Anime[];
}

export function AnimesSection({ animes }: AnimesSection) {
  return (
    <section className="flex flex-col w-full max-w-[67.5rem] pt-8">
      <div className="flex flex-col mb-10">
        <span className="text-2xl font-black text-gray-200">
          You searched for:
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          className="underline w-fit text-primary-100 hover:text-primary-200"
          href={animes[0].data.url}
        >
          {animes[0].name}
        </a>
        <span className="text-base text-gray-200 dark:text-gray-300">
          Our AI model is still in alpha, results may not be optimal. If so,
          retry searching the anime using full, japanese or alternate name.
        </span>
      </div>

      <span className="text-2xl font-black text-gray-200">Best matches:</span>
      <span className="text-base text-gray-200 dark:text-gray-300">
        Based on search engine ranking, sorted by similarity.
      </span>

      <div className="grid grid-cols-[repeat(3,_auto)] w-full justify-between gap-4 pt-6 pb-12 md:gap-6 md:grid-cols-6">
        {animes.slice(1, 7).map((anime) => (
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
        {animes.slice(7, 31).map((anime) => (
          <AnimeCard anime={anime} key={anime.name} />
        ))}
      </div>
    </section>
  );
}
