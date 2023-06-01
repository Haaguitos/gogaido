import { SVGIcon } from "@/types";

export function MagnifyingGlass({ title, className, onClick }: SVGIcon) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className || "fill-primary-100"}
    >
      <title>{title || "Search"}</title>
      <path
        d="M20 7.95085C20 11.7839 16.8718 14.9017 13 14.9017C9.12819 14.9017 6 11.7839 6 7.95085C6 4.1178 9.12819 1 13 1C16.8718 1 20 4.1178 20 7.95085Z"
        stroke-width="2"
      />
      <path d="M8.12366 12.9201L1.00002 20" stroke-width="2" />
    </svg>
  );
}
