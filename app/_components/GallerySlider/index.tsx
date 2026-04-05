"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";
import type { MicroCMSImage } from "microcms-js-sdk";

type Props = {
  images: MicroCMSImage[];
};

export default function GallerySlider({ images }: Props) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className={`${styles.track} ${paused ? styles.paused : ""}`}>
        {/* シームレスループのために2セット */}
        {[...images, ...images].map((img, i) => (
          <div key={i} className={styles.item}>
            <Image
              src={img.url}
              alt=""
              width={img.width}
              height={img.height}
              className={styles.image}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
