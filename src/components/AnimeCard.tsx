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
      {isOpenModal && (
        <AnimeModal anime={anime} setIsOpenModal={setIsOpenModal} />
      )}

      <div
        className="group relative flex h-60 w-40 rounded-2xl gap-4 overflow-hidden cursor-pointer select-none"
        onClick={() => setIsOpenModal(true)}
      >
        <div className="absolute bg-primary-100 hidden p-4 h-full w-full z-10 group-hover:flex group-hover:flex-col dark:bg-transparent">
          <div className="flex gap-1">
            <span className="w-fit text-xs text-white font-extrabold uppercase px-1 border-2 border-white rounded-md truncate dark:text-primary-100 dark:border-primary-100">
              {anime.data.genres[0]?.name || "N/A"}
            </span>

            <span className="flex gap-1 items-center bg-white text-xs text-primary-100 font-extrabold px-1 rounded-md dark:bg-primary-100 dark:text-gray-700">
              <Icons.Star className="fill-primary-100 dark:fill-black" />
              {anime.data.score?.toFixed(1) || "N/A"}
            </span>
          </div>

          <span className="text-xl text-gray-700 font-extrabold mt-8 text-ellipsis line-clamp-3 capitalize break-words dark:text-white">
            {anime.name}
          </span>

          <p className="text-white text-sm mt-auto mb-4 dark:text-gray-200">
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
