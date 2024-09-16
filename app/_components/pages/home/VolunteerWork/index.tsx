import { useTranslations } from "next-intl";

import { Divider, Heading, VolunteerWorkCard } from "@/components/elements";

import styles from "./styles.module.css";

const BASE_SRC = "/images/volunteer-work";
const EXTENSION = ".webp";

function VolunteerWork() {
  const t = useTranslations("VolunteerWork");

  const firstTromboneRoleImages = [
    {
      src: `${BASE_SRC}/flyer${EXTENSION}`,
      alt: t("FirstTrombone.image.first"),
    },
    {
      src: `${BASE_SRC}/oficina-de-sopros-group${EXTENSION}`,
      alt: t("FirstTrombone.image.second"),
    },
    {
      src: `${BASE_SRC}/a-thousand-years${EXTENSION}`,
      alt: t("FirstTrombone.image.third"),
    },
    {
      src: `${BASE_SRC}/bom-natal-front${EXTENSION}`,
      alt: t("FirstTrombone.image.fourth"),
    },
    {
      src: `${BASE_SRC}/bom-natal-side${EXTENSION}`,
      alt: t("FirstTrombone.image.fifth"),
    },
    {
      src: `${BASE_SRC}/bom-natal-trombones${EXTENSION}`,
      alt: t("FirstTrombone.image.sixth"),
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <Heading level="2">{t("title")}</Heading>
        <div className={styles.volunteer_works_container}>
          <VolunteerWorkCard
            role={t("FirstTrombone.role")}
            organization={t("FirstTrombone.organization")}
            period={t("FirstTrombone.period")}
            descriptions={[
              t("FirstTrombone.description.first"),
              t("FirstTrombone.description.second"),
            ]}
            images={firstTromboneRoleImages}
          />
        </div>
      </section>
      <Divider />
    </>
  );
}

export default VolunteerWork;
