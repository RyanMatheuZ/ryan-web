import Link from "next/link";

import styles from "./styles.module.css";

interface MessageProps {
  locale: string;
}

function Message({ locale }: MessageProps) {
  const message = {
    de: {
      title: "Seite nicht gefunden",
      message: "Hoppla... Wir können diese Seite nicht finden!",
      link: "Zurück",
    },
    en: {
      title: "Page not found",
      message: "Ops... We can't find that page!",
      link: "Back",
    },
    es: {
      title: "Página no encontrada",
      message: "Vaya... ¡No podemos encontrar esa página!",
      link: "Volver",
    },
    fr: {
      title: "Page non trouvée",
      message: "Oups... Nous ne trouvons pas cette page !",
      link: "Retour",
    },
    pt: {
      title: "Página não encontrada",
      message: "Ops... Não conseguimos encontrar essa página!",
      link: "Voltar",
    },
  }[locale];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{message?.title}</h1>
      <p className={styles.message}>{message?.message}</p>
      <Link href="/" replace className={styles.link}>
        {message?.link}
      </Link>
    </section>
  );
}

export default Message;
