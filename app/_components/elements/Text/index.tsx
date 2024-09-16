import type { PropsWithChildren } from "react";

import type { ISizes } from "@/types/Element";

import clsx from "@/utils/clsx";

import styles from "./styles.module.css";

type TextProps = PropsWithChildren & ISizes;

function Text({ children, size }: TextProps) {
  return (
    <p className={clsx(styles.paragraph_base, styles[`paragraph_${size}`])}>
      {children}
    </p>
  );
}

export default Text;
