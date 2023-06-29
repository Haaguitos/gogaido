"use client";

import {
  AnimesSection,
  Callout,
  Header,
  SearchBar,
  ThemeSwitch,
} from "@/components";
import { fetcher } from "@/libs/axios";
import { Anime } from "@/types";
import { useEffect, useState } from "react";

import useSWR from "swr";

export default function Home() {
  const [animesData, setAnimesData] = useState<Anime[]>();
  const [searchQuery, setSearchQuery] = useState("");
  const [engine, setEngine] = useState<"SVM" | "KNN">("SVM");

  // Sem busca pela engine no momento
  // const { data, error, isLoading } = useSWR<Anime[]>(
  //   searchQuery || (engine && engine && searchQuery)
  //     ? ["anime_finder", searchQuery, engine]
  //     : null,
  //   () =>
  //     fetcher("anime_finder", "POST", {
  //       query: searchQuery,
  //       recommendation_size: 30,
  //       mode: "SVM",
  //     })
  // );

  const { data, error, isLoading } = useSWR<Anime[]>(
    searchQuery ? ["anime_finder", searchQuery] : null,
    () =>
      fetcher("anime_finder", "POST", {
        query: searchQuery,
        recommendation_size: 30,
        mode: "KNN",
      })
  );

  useEffect(() => {
    if (data) {
      setAnimesData(data);
    }
  }, [data]);

  return (
    <div className="flex flex-col bg-white min-h-screen items-center dark:bg-gray-600 px-6">
      <Header />

      <main
        className={`flex flex-col w-full max-w-[67.5rem] ${
          animesData ? "pt-8" : "pt-[20vh] 2xl:pt-[25vh]"
        } transition-all duration-[1200ms]`}
      >
        <Callout hasData={!!animesData} />

        <div
          className={`flex flex-col gap-4 w-full justify-center duration-[1200ms] transition-all`}
        >
          <SearchBar
            onSubmit={(animeName) => setSearchQuery(animeName)}
            loading={isLoading}
            hasData={!!animesData}
          />

          <div
            className={`${
              animesData && "-translate-y-16"
            } flex flex-row gap-2 items-center justify-between duration-[1200ms] transition-all`}
          >
            <ThemeSwitch />

            {/* Escondido enquanto não for possível mudar para SVM   */}
            {/* <div className="flex flex-row gap-6 items-center">
              <span className="text-base text-gray-200 dark:text-gray-300">
                SEARCH ENGINE:
              </span>

              <EngineSwitch setEngine={setEngine} engine={engine} />

              <EngineTooltip />
            </div> */}
          </div>
        </div>
      </main>

      {animesData && <AnimesSection animes={animesData} />}

      {!animesData && (
        <footer className="flex mt-auto pb-24">
          <h3 className="text-xs text-center text-gray-300 md:text-base">
            This is an alpha version.
            <br />
            Feel free to leave any feedbacks on our socials above.
          </h3>
        </footer>
      )}
    </div>
  );
}
