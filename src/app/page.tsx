import {
  EngineSwitch,
  EngineTooltip,
  Header,
  SearchBar,
  ThemeSwitch,
} from "@/components";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center dark:bg-gray-600">
      <div className="relative flex flex-col w-full max-w-4xl min-h-screen items-center justify-center">
        <Header />
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
      </div>
    </main>
  );
}
