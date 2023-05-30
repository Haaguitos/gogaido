import { Images } from "@/assets";
import Image from "next/image";

export function Header() {
  return (
    <div className="absolute top-8 flex w-full justify-between">
      <Image src={Images.Logo} alt="Gogaido" width={128} height={86} />

      <h3 className="text-sm text-gray-200 text-right self-end">
        Made with <span className="text-red-500">&#x2764;</span> by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-400 dark:hover:text-gray-100"
          href="https://github.com/Haaguitos"
        >
          @Haaguitos
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-400 dark:hover:text-gray-100"
          href="https://www.behance.net/vwrks_"
        >
          @vwrks_
        </a>{" "}
        &{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-400 dark:hover:text-gray-100"
          href="
          https://github.com/GabrielDornelles"
        >
          @GabrielDornelles
        </a>
        <br />
        Buy us a coffee &#x2615;
      </h3>
    </div>
  );
}
