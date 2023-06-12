import { Anime } from "@/types";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

interface AnimeModal {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  anime: Anime;
}

export function AnimeModal({ anime, setIsOpenModal }: AnimeModal) {
  return (
    <Dialog.Root onOpenChange={setIsOpenModal} open={true}>
      <Dialog.Portal className="overflow-scroll py-16">
        <Dialog.Overlay className="fixed bg-gray-700/40 inset-0 overflow-y-auto grid py-40 place-items-center z-50">
          <Dialog.Content
            className={`flex-col w-full max-w-4xl pb-20 bg-gray-500/95 backdrop-blur-lg rounded-lg`}
          >
            {anime.data.trailer.embed_url && (
              <iframe
                className="object-cover w-full h-[496px] rounded-t-lg"
                src={anime.data.trailer.embed_url}
              />
            )}

            <div
              className={`flex flex-col w-full gap-7 ${
                anime.data.trailer.embed_url ? "pt-4" : "pt-20"
              } px-20`}
            >
              <span className="text-gray-300">
                Data from{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-gray-400 dark:hover:text-gray-100"
                  href={anime.data.url}
                >
                  myanimelist.net
                </a>
              </span>

              {anime.data.genres.length > 0 && (
                <div className="flex gap-1 mt-2">
                  {anime.data.genres.slice(0, 5).map((genre) => (
                    <span
                      key={genre.name}
                      className="w-fit text-white font-extrabold uppercase px-1 border-2 border-white rounded-md truncate dark:text-primary-100 dark:border-primary-100"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-24 w-full mt-3">
                <div className="flex flex-col gap-7 w-full max-w-[34rem]">
                  <div className="flex gap-2 items-center">
                    <span className="w-fit text-xs text-gray-300 font-extrabold px-1 border-2 border-gray-300">
                      {anime.data.rating.split(" - ")[0]}
                    </span>
                    <span className="text-xs text-gray-300 font-semibold">
                      {anime.data.rating.split(" - ")[1]}
                    </span>
                  </div>

                  <h1 className="text-5xl text-white font-black mb-2">
                    {anime.name}
                  </h1>

                  <div className="flex gap-10">
                    <span className="text-gray-200 font-semibold">
                      {anime.data.aired.string}
                    </span>
                    <span className="text-gray-200 font-semibold">
                      {anime.data.studios[0]?.name || "None found"}
                    </span>
                    {anime.data.episodes > 1 && (
                      <span className="text-gray-200 font-semibold">
                        Epi: {anime.data.episodes}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mt-12">{anime.data.synopsis}</p>
                </div>

                <aside className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-gray-200 font-semibold">Score</span>
                    <span className="w-fit px-3 py-1 bg-primary-100 text-gray-700 font-black rounded-xl dark:text-gray-700">
                      {anime.data.score || "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-200 font-semibold">Ranked</span>
                    <span className="text-xl text-primary-100 font-bold">
                      {anime.data.rank ? `#${anime.data.rank}` : "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-gray-200 font-semibold">
                      Popularity
                    </span>
                    <span className="text-xl text-primary-100 font-bold">
                      {anime.data.popularity !== 0
                        ? `#${anime.data.popularity}`
                        : "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col mt-10">
                    <span className="text-gray-300 font-semibold">Type</span>
                    <span className="text-gray-200 font-bold">
                      {anime.data.type}
                    </span>
                  </div>

                  <div className="flex flex-col mt-2">
                    <span className="text-gray-300 font-semibold">Status</span>
                    <span className="text-gray-200 font-bold">
                      {anime.data.status}
                    </span>
                  </div>

                  <div className="flex flex-col mt-2">
                    <span className="text-gray-300 font-semibold">
                      Duration
                    </span>
                    <span className="text-gray-200 font-bold">
                      {anime.data.duration}
                    </span>
                  </div>
                </aside>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
