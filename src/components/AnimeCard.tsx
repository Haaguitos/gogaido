"use client";

import { Icons } from "@/assets";
import { Anime } from "@/types";
import Image from "next/image";
import { AnimeModal } from "./AnimeModal";
import { useState } from "react";

interface AnimeCard {
  anime: Anime;
}

export function AnimeCard({ anime }: AnimeCard) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <AnimeModal
        anime={anime}
        setIsOpenModal={setIsOpenModal}
        isOpen={isOpenModal}
      />

      {/* <div
        className="group relative flex h-[10.5rem] w-28 rounded-2xl gap-4 overflow-hidden cursor-pointer select-none md:h-[10.5rem] md:w-28 lg:h-[13.5rem] lg:w-36 xl:h-60 xl:w-40"
        onClick={() => setIsOpenModal(true)}
      > */}
      <div
        className="group relative flex aspect-[2/3] max-h-60 rounded-2xl gap-4 overflow-hidden cursor-pointer select-none"
        onClick={() => setIsOpenModal(true)}
      >
        <div className="absolute bg-primary-100 hidden p-4 h-full w-full z-10 group-hover:flex group-hover:flex-col dark:bg-transparent">
          <div className="flex flex-col w-full gap-1 sm:flex-row">
            <span className="block w-full text-xs text-white font-extrabold uppercase px-1 border-2 border-white rounded-md truncate dark:text-primary-100 dark:border-primary-100 sm:w-fit">
              {anime.data.genres[0]?.name || "N/A"}
            </span>

            <span className="flex w-fit gap-1 items-center bg-white text-xs text-primary-100 font-extrabold px-1 rounded-md dark:bg-primary-100 dark:text-gray-700">
              <Icons.Star className="fill-primary-100 dark:fill-black" />
              {anime.data.score?.toFixed(1) || "N/A"}
            </span>
          </div>

          <span className="text-sm text-gray-700 font-extrabold mt-4 text-ellipsis line-clamp-3 capitalize break-words dark:text-white sm:text-xl sm:mt-8">
            {anime.name}
          </span>

          <p className="hidden text-white text-sm mt-auto mb-4 dark:text-gray-200 sm:flex">
            Click for more info & where to watch
          </p>
        </div>

        <Image
          src={anime.data.images.jpg.image_url}
          width={160}
          height={240}
          alt={anime.name}
          className="object-cover dark:group-hover:brightness-[0.1]"
        />
      </div>
    </>
  );
}
