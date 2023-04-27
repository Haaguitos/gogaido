"use client";

import { Icons } from "@/assets";
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
    <main className="flex bg-white min-h-screen flex-col items-center">
      <div className="flex flex-col gap-4 w-full max-w-4xl min-h-screen items-center justify-center">
        <h1 className="text-5xl text-black self-start px-6">Anime Finder</h1>

        <div className="flex flex-col gap-4 w-full justify-center">
          <SearchBar />

          <div className="flex flex-row gap-2 items-center justify-between pl-6">
            <Image
              src={Icons.Sun}
              alt="Texto alternativo"
              width={24}
              height={24}
            />

            <div className="flex flex-row gap-2 items-center">
              <span className="text-lg text-black">Motor de busca</span>

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
