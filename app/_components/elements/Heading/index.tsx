import type { PropsWithChildren } from "react";

import type { ILevels } from "@/types/Element";

import clsx from "@/utils/clsx";

import styles from "./styles.module.css";

type HeadingProps = PropsWithChildren & ILevels;

function Heading({ children, level }: HeadingProps) {
  const headings = {
    1: (
      <h1 className={clsx(styles.heading_base, styles.heading_one)}>
        {children}
      </h1>
    ),
    2: (
      <h2 className={clsx(styles.heading_base, styles.heading_two)}>
        {children}
      </h2>
    ),
    3: (
      <h3 className={clsx(styles.heading_base, styles.heading_three)}>
        {children}
      </h3>
    ),
  };

  return headings[level];
}

export default Heading;
