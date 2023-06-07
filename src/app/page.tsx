"use client";

import {
  AnimeCard,
  AnimesSection,
  Callout,
  EngineSwitch,
  EngineTooltip,
  Header,
  SearchBar,
  ThemeSwitch,
} from "@/components";
import { api, fetcher } from "@/libs/axios";
import { useEffect, useState } from "react";

import useSWR from "swr";

interface Anime {
  name: string;
  image: string;
  genres: string[];
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useSWR<Anime[]>(
    searchQuery ? ["anime_finder", searchQuery] : null,
    () =>
      fetcher("anime_finder", "POST", {
        query: searchQuery,
        recommendation_size: 30,
        mode: "KNN",
      })
  );

  return (
    <div className="flex flex-col bg-white min-h-screen items-center dark:bg-gray-600">
      <Header />

      <main
        className={`flex flex-col w-full max-w-4xl ${
          data ? "pt-8" : "pt-40"
        } transition-all duration-5000`}
      >
        <Callout hasData={!!data} />

        <div
          className={`flex flex-col gap-4 w-full justify-center duration-5000 transition-all`}
        >
          <SearchBar
            onSubmit={(animeName) => setSearchQuery(animeName)}
            loading={isLoading}
            hasData={!!data}
          />

          <div
            className={`${
              data && "-translate-y-16"
            } flex flex-row gap-2 items-center justify-between duration-5000 transition-all`}
          >
            <ThemeSwitch />

            <div className="flex flex-row gap-6 items-center">
              <span className="text-base text-gray-400 dark:text-gray-300">
                SEARCH ENGINE:
              </span>

              <EngineSwitch />

              <EngineTooltip />
            </div>
          </div>
        </div>
      </main>

      {!!data && <AnimesSection animes={data} />}
    </div>
  );
}
