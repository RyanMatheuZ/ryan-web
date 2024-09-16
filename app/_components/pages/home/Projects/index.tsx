import { useTranslations } from "next-intl";

import { Divider, Heading, ProjectCard } from "@/components/elements";

import styles from "./styles.module.css";

function Projects() {
  const t = useTranslations("Projects");

  return (
    <>
      <section className={styles.section}>
        <Heading level="2">{t("title")}</Heading>
        <div className={styles.projects_container}>
          <ProjectCard
            title="GeoDrone+"
            description={t("GeoDronePlus.description")}
            href="https://geodroneplus.vercel.app"
            type="mobile"
            technologies={[
              "express",
              "mongo-db",
              "node-js",
              "react",
              "typescript",
            ]}
          />
          <ProjectCard
            title="Simone Modas"
            description={t("SimoneModas.description")}
            href="https://www.simonemodasplus.com.br"
            type="web"
            technologies={[
              "express",
              "firebase",
              "mongo-db",
              "next-js",
              "node-js",
              "tailwind-css",
              "typescript",
            ]}
          />
        </div>
      </section>
      <Divider />
    </>
  );
}

export default Projects;
