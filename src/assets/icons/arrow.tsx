import { SVGIcon } from "@/types";

export function Arrow({ title, className }: SVGIcon) {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || "fill-primary-100"}
    >
      <title>{title || "Arrow"}</title>
      <path d="M11.73 4.31H3.39L6.1 1.59L4.51 0L0 4.51V6.1L4.51 10.61L6.1 9.02L3.39 6.31H11.73V4.31Z" />
    </svg>
  );
}
