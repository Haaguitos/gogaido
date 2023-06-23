import { SVGIcon } from "@/types";

export function Close({ title, className, onClick }: SVGIcon) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className || "fill-primary-100"}
    >
      <title>{title || "Close"}</title>
      <path d="M1 1L17 17" stroke-width="2.5" />
      <path d="M1 17L17 1" stroke-width="2.5" />
    </svg>
  );
}
