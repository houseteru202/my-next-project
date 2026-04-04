"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

type Phase = "black" | "white" | "fadeout" | "done";

export default function OpeningAnimation() {
  const [phase, setPhase] = useState<Phase>("black");

  useEffect(() => {
    const visited = sessionStorage.getItem("bm_visited");
    if (visited) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("bm_visited", "1");

    // ① 黒 → 白＋ロゴ浮かび上がる
    const t1 = setTimeout(() => setPhase("white"), 100);
    // ② 白背景 → 透明
    const t2 = setTimeout(() => setPhase("fadeout"), 2400);
    // ③ 除去
    const t3 = setTimeout(() => setPhase("done"), 4000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`${styles.overlay} ${styles[`overlay_${phase}`]}`}>
      <Image
        src="/logo_white.png"
        alt="BLACK MARKET"
        width={348}
        height={133}
        className={`${styles.logo} ${styles[`logo_${phase}`]}`}
        priority
      />
    </div>
  );
}
