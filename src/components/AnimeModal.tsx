import { Icons } from "@/assets";
import { Anime } from "@/types";
import * as Dialog from "@radix-ui/react-dialog";

interface AnimeModal {
  isOpen: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  anime: Anime;
}

export function AnimeModal({ isOpen, setIsOpenModal, anime }: AnimeModal) {
  const returnAiredYears = () => {
    const aired = anime.data.aired.prop;

    if (aired.from.year === aired.to.year || !aired.to.year)
      return aired.from.year;
    else return `${aired.from.year} - ${aired.to.year}`;
  };

  return (
    <Dialog.Root onOpenChange={setIsOpenModal} open={isOpen}>
      <Dialog.Portal className="overflow-scroll">
        <Dialog.Overlay className="animate-overlayShow fixed bg-gray-300/40 inset-0 overflow-y-auto grid place-items-center z-50 dark:bg-gray-700/40 md:py-20 md:px-4 2xl:py-40">
          <Dialog.Content
            className={`relative flex-col w-full max-w-4xl pb-14 bg-white/90 backdrop-blur-lg dark:bg-gray-500/95 md:pb-20 md:rounded-2xl`}
          >
            <Dialog.Close className="absolute top-4 left-4 h-0 md:absolute md:right-2 md:left-[unset]">
              <button className="group flex h-10 w-24 bg-primary-500 items-center justify-center rounded-xl dark:bg-gray-700 md:w-10">
                <Icons.Close className="hidden w-4 h-4 stroke-white group-hover:stroke-primary-100 dark:stroke-primary-200 md:flex" />

                <span className="flex items-center gap-1 text-sm text-white font-black group-hover:text-primary-100 dark:text-primary-200 md:hidden">
                  <Icons.Arrow className="fill-white group-hover:fill-primary-100 dark:fill-primary-200" />{" "}
                  BACK
                </span>
              </button>
            </Dialog.Close>

            {anime.data.trailer.embed_url && (
              <iframe
                className="aspect-video w-full md:rounded-t-2xl md:h-[496px]"
                src={anime.data.trailer.embed_url}
              />
            )}

            <div
              className={`flex flex-col w-full gap-8 px-8 ${
                anime.data.trailer.embed_url ? "pt-4" : "pt-20"
              } md:px-20 md:gap-10`}
            >
              <span className=" md:text-base">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs underline text-gray-200 hover:text-gray-400 dark:text-gray-300 dark:hover:text-gray-100 md:text-base"
                  href={anime.data.url}
                >
                  Data from myanimelist.net
                </a>
              </span>

              {anime.data.genres.length > 0 && (
                <div className="flex flex-wrap gap-2 md:mt-2">
                  {anime.data.genres.slice(0, 5).map((genre) => (
                    <span
                      key={genre.name}
                      className="w-fit text-primary-100 font-extrabold uppercase px-1 border-2 border-primary-100 rounded-[8px] truncate dark:text-primary-200 dark:border-primary-200"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <header className="flex flex-col-reverse w-full justify-between gap-10 mt-2 md:mt-3 md:flex-row">
                <div className="flex flex-col gap-6 md:gap-8">
                  {anime.data.rating && (
                    <div className="flex gap-2 items-center">
                      <span className="w-fit text-xs text-gray-200 font-extrabold px-1 border-2 border-gray-200 dark:text-gray-300 dark:border-gray-300">
                        {anime.data.rating.split(" - ")[0]}
                      </span>
                      <span className="text-xs text-gray-200 font-semibold dark:text-gray-300">
                        {anime.data.rating.split(" - ")[1]}
                      </span>
                    </div>
                  )}

                  <h1 className="text-[2.75rem] leading-none text-primary-200 font-black mb-2 dark:text-white md:text-5xl">
                    {anime.name}
                  </h1>

                  <div className="flex gap-10">
                    <span className="text-gray-300 font-semibold dark:text-gray-200">
                      {returnAiredYears()}
                    </span>

                    <span className="text-gray-300 font-semibold dark:text-gray-200">
                      {anime.data.studios[0]?.name || "None found"}
                    </span>

                    {anime.data.episodes > 1 && (
                      <span className="text-gray-300 font-semibold dark:text-gray-200">
                        Epi: {anime.data.episodes}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-row w-full gap-16 md:max-w-[5rem] md:gap-4 md:flex-col">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300 font-semibold dark:text-gray-200 md:text-base">
                      Score
                    </span>
                    <span className="w-fit px-2 text-sm border-primary-200 border-2 text-primary-200 font-black rounded-[8px] dark:border-primary-100 dark:text-primary-100 md:text-xl">
                      {anime.data.score || "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300 font-semibold dark:text-gray-200 md:text-base">
                      Ranked
                    </span>
                    <span className="text-primary-100 font-black md:text-xl">
                      {anime.data.rank ? `#${anime.data.rank}` : "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col md:mt-2">
                    <span className="text-sm text-gray-300 font-semibold dark:text-gray-200 md:text-base">
                      Popularity
                    </span>
                    <span className="text-primary-100 font-black md:text-xl">
                      {anime.data.popularity !== 0
                        ? `#${anime.data.popularity}`
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </header>

              <section className="flex flex-col justify-between mt-8 gap-10 md:flex-row md:mt-2">
                <p className="text-gray-200 font-medium w-full max-w-[34rem] dark:text-gray-300">
                  {anime.data.synopsis}
                </p>

                <div className="flex flex-row w-full gap-8 md:max-w-[5rem] md:gap-2 md:flex-col">
                  <div className="flex flex-col">
                    <span className="text-gray-200 font-semibold dark:text-gray-300">
                      Type
                    </span>
                    <span className="text-sm text-gray-300 font-bold dark:text-gray-200 md:text-base">
                      {anime.data.type}
                    </span>
                  </div>

                  <div className="flex flex-col md:mt-2">
                    <span className="text-gray-200 font-semibold dark:text-gray-300">
                      Status
                    </span>
                    <span className="text-sm text-gray-300 font-bold dark:text-gray-200 md:text-base">
                      {anime.data.status}
                    </span>
                  </div>

                  <div className="flex flex-col md:mt-2">
                    <span className="text-gray-200 font-semibold dark:text-gray-300">
                      Duration
                    </span>
                    <span className="text-sm text-gray-300 font-bold dark:text-gray-200 md:text-base">
                      {anime.data.duration}
                    </span>
                  </div>
                </div>
              </section>

              <footer className="flex flex-col items-center gap-8 mt-4 md:items-start">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-64 h-14 bg-primary-100 justify-center text-center items-center rounded-2xl text-sm text-white font-black hover:bg-primary-200 dark:text-gray-700 md:w-52 md:px-10 "
                  href={anime.data.url}
                >
                  OPEN ON MYANIMELIST.NET
                </a>

                <Dialog.Close>
                  <button className="flex gap-1 items-center text-sm text-primary-100 font-black underline md:hidden">
                    <Icons.Arrow /> BACK TO RESULTS
                  </button>
                </Dialog.Close>
              </footer>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
