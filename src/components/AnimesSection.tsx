import { AnimeCard } from "./AnimeCard";

interface AnimesSection {
  animes: {
    name: string;
    image: string;
    genres: string[];
  }[];
}

export function AnimesSection({ animes }: AnimesSection) {
  return (
    <section className="flex flex-col max-w-4xl pt-8">
      <span className="text-2xl font-black text-gray-200">Best matches:</span>
      <span className="text-base text-gray-200 dark:text-gray-300">
        Based on search engine ranking, sorted by similarity.
      </span>

      <div className="grid grid-cols-5 pt-6 pb-12 gap-6 w-full">
        {animes.slice(0, 5).map((anime) => (
          <AnimeCard data={anime} key={anime.name} />
        ))}
      </div>

      <span className="text-2xl font-black text-gray-200">
        More recommendations:
      </span>
      <span className="text-base text-gray-200 dark:text-gray-300">
        Sorted by similarity.
      </span>

      <div className="grid grid-cols-5 pt-6 pb-12 gap-6 w-full">
        {animes.slice(5).map((anime) => (
          <AnimeCard data={anime} key={anime.name} />
        ))}
      </div>
    </section>
  );
}
