import { SVGIcon } from "@/types";

export function Star({ title, className, onClick }: SVGIcon) {
  return (
    <svg
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className || "fill-white"}
    >
      <title>{title || "Tip"}</title>
      <path
        d="M9 3.61265L8.41121 2.13439L5.34112 3.21739V0H3.65888V3.20949L0.588784 2.12648L0 3.60474L3.13738 4.71146L1.23645 7.02767L2.56542 8L4.5 5.64427L6.43458 8L7.76355 7.03557L5.86262 4.71937L9 3.61265Z"
        fill="#13151C"
      />
    </svg>
  );
}
