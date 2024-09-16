import { useTranslations } from "next-intl";

import Image from "next/image";

import { Link } from "@/navigation";

import {
  TECHNOLOGIES,
  type TTechnologiesIconName,
} from "@/constants/technologies";

import styles from "./styles.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  type: "mobile" | "web";
  technologies: TTechnologiesIconName[];
}

const ICON_SIZE = 20;

function ProjectCard({
  title,
  description,
  href,
  type,
  technologies,
}: ProjectCardProps) {
  const t = useTranslations("Projects");

  const filteredTechnologies = TECHNOLOGIES.filter(({ iconName }) =>
    technologies.includes(iconName)
  );

  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.banner}>
          <span className={styles.banner_text}>{type}</span>
        </div>
        <span className={styles.card_title}>{title}</span>
        <p className={styles.card_description}>{description}</p>
      </div>
      <div>
        <div className={styles.technologies_container}>
          {filteredTechnologies.map(({ label, iconName }) => (
            <Image
              key={`${iconName}-project-technologies`}
              src={`/icons/technologies/${iconName}.svg`}
              alt={label}
              title={label}
              width={ICON_SIZE}
              height={ICON_SIZE}
              draggable="false"
              className={styles.image}
            />
          ))}
        </div>
        <Link href={href} target="_blank" className={styles.card_button}>
          {t("seeProject")}
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
