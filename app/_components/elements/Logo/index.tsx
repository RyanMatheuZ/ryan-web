import Image from "next/image";

import type { ISizes } from "@/types/Element";

import { sizes } from "./utils";

interface LogoProps extends ISizes {
  theme?: "dark" | "light";
}

function Logo({ size, theme = "dark" }: LogoProps) {
  return (
    <Image
      src={`/logo-${theme}.svg`}
      alt="Ryan Web"
      width={sizes[size]}
      height={sizes[size]}
      priority
      draggable="false"
    />
  );
}

export default Logo;
