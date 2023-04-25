"use client"

import { SearchBar } from '@/components';
import axios from 'axios';
import { useState } from "react";
import useSWR from 'swr';

export default function Home() {
  const [animes, setAnimes] = useState([]);

  const api = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR("https://servicodados.ibge.gov.br/api/v1/localidades/distritos", fetcher)

  console.log('data', data)
  console.log('error', error)

  return (
    <main className="flex bg-pink-900 min-h-screen flex-col items-center">
      <div className="flex flex-col w-full max-w-4xl min-h-screen items-center justify-center">

        <h1 className="text-5xl text-pink-500 self-start p-4">Anime finder</h1>

        <div className="flex flex-col w-full justify-center">
          <form>
            <input
              className="w-full px-5 py-1 sm:px-5 sm:py-3 flex-1 text-pink-50 bg-pink-800 ring-pink-800 focus:bg-pink-900 rounded-full focus:outline-none focus:ring-[1px] focus:ring-pink-800 placeholder:text-pink-50"
              placeholder="Search for anime..."
            />
          </form>

          <SearchBar />

          <div className="flex flex-row gap-2 self-end">
            <div className="flex flex-row gap-1">
              <input type='radio' value="SVM" />
              <label>SVM</label>
            </div>

            <div className="flex flex-row gap-1">
              <input type='radio' value="KNN" />
              <label>KNN</label>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
