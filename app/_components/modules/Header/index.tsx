import { Logo } from "@/components/elements";
import { LanguageSwitcher } from "@/components/modules";

import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Logo size="md" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
