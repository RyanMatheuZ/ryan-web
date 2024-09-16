"use client";

import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import Image from "next/image";

import styles from "./styles.module.css";

const ICON_SIZE = 30;

function BackToTheTop() {
  const t = useTranslations("Footer");

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.scrollY > 200));
  });

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <div className={styles.container} onClick={handleBackToTop}>
          <Image
            src={`/icons/elements/arrow-upward.svg`}
            alt={t("backToTheTop")}
            title={t("backToTheTop")}
            width={ICON_SIZE}
            height={ICON_SIZE}
            draggable="false"
          />
        </div>
      )}
    </>
  );
}

export default BackToTheTop;
