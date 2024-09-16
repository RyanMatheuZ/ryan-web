import Image from "next/image";

import styles from "./styles.module.css";

interface TechnologyCardProps {
  label: string;
  src: string;
}

const ICON_SIZE = 40;

function TechnologyCard({ label, src }: TechnologyCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.card_title}>{label}</span>
      <Image
        src={src}
        alt={label}
        title={label}
        width={ICON_SIZE}
        height={ICON_SIZE}
        draggable="false"
        className={styles.image}
      />
    </div>
  );
}

export default TechnologyCard;
