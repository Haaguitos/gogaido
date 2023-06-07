import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex w-full max-w-4xl justify-between py-8">
      <Link href="/" className="flex cursor-pointer">
        <Image src={Images.Logo} alt="Gogaido" width={128} height={86} />
      </Link>

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
    </header>
  );
}
