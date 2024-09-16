import Image from "next/image";

import { useTranslations } from "next-intl";

import { Divider, Heading, Text } from "@/components/elements";
import { SocialLinks } from "@/components/modules";

import styles from "./styles.module.css";

const IMAGE_SIZE = 185;

function Presentation() {
  const t = useTranslations("Home");
  const alt = t("alt");

  return (
    <>
      <Divider />
      <section className={styles.section}>
        <Image
          src="/images/presentation/profile.webp"
          alt={alt}
          title={alt}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          priority
          draggable="false"
          className={styles.profile_image}
        />
        <div>
          <Heading level="1">Ryan Oliveira</Heading>
          <Text size="sm">{t("about")}</Text>
          <SocialLinks />
        </div>
      </section>
      <Divider />
    </>
  );
}

export default Presentation;
