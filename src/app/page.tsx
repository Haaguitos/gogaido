"use client"

import { useState } from "react";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  return (
    <main className="flex bg-pink-900 min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl text-pink-50">Anime finder</h1>

      <div className="flex flex-col justify-center w-2/3">
        <form>
          <input
            className="w-full px-5 py-1 sm:px-5 sm:py-3 flex-1 text-pink-50 bg-pink-800 focus:bg-pink-900 rounded-full focus:outline-none focus:ring-[1px] focus:ring-pink-800 placeholder:text-pink-50"
            placeholder="Search for anime..."
          />
        </form>

        <div className="flex flex-row gap-2 self-end">
          <div className="flex flex-row gap-1">
            <input type='radio' value="SVM"/>
            <label>SVM</label>
          </div>
          
          <div className="flex flex-row gap-1">
            <input type='radio' value="KNN"/>
            <label>KNN</label>
          </div>
        </div>
      </div>
    </main>
  )
}
