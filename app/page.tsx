import styles from "./page.module.css";
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "./_components/newsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷オフィスに移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/02",
      createdAt: "2025/02/02",
    },
    {
      id: "2",
      title: "恵比寿オフィスに移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/02",
      createdAt: "2025/02/02",
    },
    {
      id: "3",
      title: "五反田オフィスに移転しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2025/02/02",
      createdAt: "2025/02/02",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テノ</h1>
          <p className={styles.description}>テスト</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっといる</ButtonLink>
        </div>
      </section>
    </>
  );
}
