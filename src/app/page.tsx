"use client";

import { Icons, Images } from "@/assets";
import { SearchBar, Switch } from "@/components";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  const api = axios.create({
    baseURL: "https://api.example.com",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://servicodados.ibge.gov.br/api/v1/localidades/distritos",
    fetcher
  );

  return (
    <main className="flex bg-secondary-500 min-h-screen flex-col items-center">
      <div className="relative flex flex-col w-full max-w-4xl min-h-screen items-center justify-center">
        <div className="absolute top-8 flex w-full justify-between">
          <Image
            src={Images.Logo}
            alt="Texto alternativo"
            width={128}
            height={86}
          />

          <h3 className="text-sm text-secondary-200 text-right self-end">
            Made with <span className="text-red-500">&#x2764;</span> by
            @gaahogi, @vwrks_ & @gabdrnelles
            <br />
            Buy us a coffee &#x2615;
          </h3>
        </div>

        <h1 className="text-[2.5rem] font-black text-primary-100 self-start">
          Find your next anime
        </h1>

        <h2 className="text-base text-secondary-200 self-start mb-9">
          Recommendations based on what you like
        </h2>

        <div className="flex flex-col gap-4 w-full justify-center">
          <SearchBar />

          <div className="flex flex-row gap-2 items-center justify-between">
            <button className="flex w-12 h-12 bg-secondary-600 items-center justify-center rounded-2xl">
              <Image
                src={Icons.Sun}
                alt="Texto alternativo"
                width={24}
                height={24}
              />
            </button>

            <div className="flex flex-row gap-6 items-center">
              <span className="text-base text-secondary-200">
                SEARCH ENGINE:
              </span>

              <Switch />

              <Image
                src={Icons.QuestionCircle}
                alt="Texto alternativo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
