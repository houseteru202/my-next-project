import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          {/* <li className={styles.item}>
            <Link href="/about">about</Link>
          </li> */}
          <li className={styles.item}>
            <Link href="/news">news</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">members</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© houseteru202. All Rights Reserved 2025</p>
    </footer>
  );
}
