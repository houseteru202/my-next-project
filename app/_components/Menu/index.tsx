"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isArchiveOpen, setArchiveOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => {
    setOpen(false);
    setArchiveOpen(false);
  };

  return (
    <>
      {/* 背景オーバーレイ：タップで閉じる */}
      {isOpen && <div className={styles.backdrop} onClick={close} />}

      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <button className={styles.close} onClick={close}>
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
        <ul className={styles.items}>
          <li>
            <Link href="/" onClick={close}>top</Link>
          </li>
          <li>
            <Link href="/news" onClick={close}>news</Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>members</Link>
          </li>
          <li className={styles.archiveItem}>
            <button
              className={styles.archiveToggle}
              onClick={() => setArchiveOpen((v) => !v)}
            >
              archive
              <span className={cx(styles.arrow, isArchiveOpen && styles.arrowOpen)}>▾</span>
            </button>
            {isArchiveOpen && (
              <ul className={styles.subItems}>
                <li>
                  <Link href="/archive/vol4" onClick={close}>vol.4</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="https://www.instagram.com/black_market_shakujii/?igsh=MWlqb3B2OXhjZ2M1MQ%3D%3D#"
              target="_blank"
              onClick={close}
            >
              Instagram
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.hamburger} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </>
  );
}
