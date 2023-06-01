"use client";

import {
  EngineSwitch,
  EngineTooltip,
  Header,
  SearchBar,
  ThemeSwitch,
} from "@/components";
import { api, fetcher } from "@/libs/axios";
import { useEffect } from "react";

import useSWR from "swr";

export default function Home() {
  // const { data, error, isLoading } = useSWR(
  //   fetcher("anime_finder", "POST", {
  //     query: "shigatsu wa kimi no uso",
  //     recommendation_size: 10,
  //     mode: "SVM",
  //   })
  // );

  useEffect(() => {
    api.post("anime_finder", {
      query: "shigatsu wa kimi no uso",
      recommendation_size: 10,
      mode: "SVM",
    });
    // api.get("");
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen items-center dark:bg-gray-600">
      <Header />

      <main className="flex flex-col w-full max-w-4xl pt-40">
        <h1 className="text-[2.5rem] font-black text-primary-100 self-start">
          Find your next anime
        </h1>
        <h2 className="text-base text-gray-400 self-start mb-9 dark:text-gray-300">
          Recommendations based on what you like
        </h2>

        <div className="flex flex-col gap-4 w-full justify-center">
          <SearchBar />

          <div className="flex flex-row gap-2 items-center justify-between">
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
    </div>
  );
}
