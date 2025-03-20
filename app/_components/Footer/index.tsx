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
          <li className={styles.item}>
            <Link
              href="https://www.instagram.com/black_market_shakujii/?igsh=MWlqb3B2OXhjZ2M1MQ%3D%3D#"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>
        © black-market-syakujii. All Rights Reserved 2025
      </p>
    </footer>
  );
}
