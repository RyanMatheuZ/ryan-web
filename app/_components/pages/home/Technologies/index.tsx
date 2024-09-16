import { useTranslations } from "next-intl";

import { TECHNOLOGIES } from "@/constants/technologies";

import { Divider, Heading, TechnologyCard } from "@/components/elements";

import styles from "./styles.module.css";

function Technologies() {
  const t = useTranslations("Technologies");

  return (
    <>
      <section className={styles.section}>
        <Heading level="2">{t("title")}</Heading>
        <div className={styles.technologies_container}>
          {TECHNOLOGIES.map(({ iconName, label }) => (
            <TechnologyCard
              key={`${iconName}-technology`}
              label={label}
              src={`/icons/technologies/${iconName}.svg`}
            />
          ))}
        </div>
      </section>
      <Divider />
    </>
  );
}

export default Technologies;
