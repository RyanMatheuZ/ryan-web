import Image from "next/image";

import { socials } from "./utils";

import styles from "./styles.module.css";

const ICON_SIZE = 25;

function SocialLinks() {
  return (
    <div className={styles.container}>
      {socials.map(({ name, iconName, href }) => (
        <a
          key={iconName}
          href={href}
          title={name}
          target="_blank"
          rel="noopener noreferrer"
          draggable="false"
        >
          <Image
            src={`/icons/socials/${iconName}.svg`}
            alt={name}
            title={name}
            width={ICON_SIZE}
            height={ICON_SIZE}
            draggable="false"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
