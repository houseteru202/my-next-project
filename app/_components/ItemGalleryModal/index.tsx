"use client";

import { useState } from "react";
import Image from "next/image";
import type { MicroCMSImage } from "microcms-js-sdk";
import styles from "./index.module.css";

type Props = {
  item: string;
  images: MicroCMSImage[];
};

export default function ItemGalleryModal({ item, images }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className={styles.chip} onClick={() => setOpen(true)}>
        📷 {item}
      </p>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)}>✕</button>
            <p className={styles.modalTitle}>📷 {item}</p>
            <div className={styles.grid}>
              {images.map((img, i) => (
                <div key={i} className={styles.imgWrapper}>
                  <Image
                    src={img.url}
                    alt=""
                    fill
                    sizes="(max-width: 640px) calc(50vw - 32px), 240px"
                    className={styles.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
