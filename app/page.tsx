import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "./_components/NewsList";

/* import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "ラインナップ第1弾発表!!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2125/04/01",
      createdAt: "2125/04/01",
    },
    {
      id: "2",
      title: "BLACK MARKET vol.4 開催決定!!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2125/04/01",
      createdAt: "2125/04/01",
    },
  ],
}; */

export default async function Home() {
  /* const sliceData = data.contents.slice(0, 2); */
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          {<h1 className={styles.title}>BLACK MARKET vol.4</h1>}
          <p className={styles.description}>
            町と人の繋がりと伝統の灯を消さない為に。
          </p>
          <p className={styles.description}>100年続くお祭りを目指して。</p>
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
        {/* <NewsList news={sliceData} /> */}
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>About Us</h2>
              {/* <p className={styles.sectionTitleJa}>私たちについて</p> */}
              <p className={styles.sectionDescription}>
                BLACK
                MARKETは子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭りが今年も開催。たつの湯のお湯並みに熱い1日を体感せよ！
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>開催日</dt>
                <dd className={styles.infoDescription}>
                  2025年X月X日 XX:00～XX:00
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>開催地</dt>
                <dd className={styles.infoDescription}>
                  たつの湯[google map ※追ってリンクつける]
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>Instagram</dt>
                <dd className={styles.infoDescription}>
                  black_market_syakujii ※追ってリンクつける
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>企画運営</dt>
                <dd className={styles.infoDescription}>tree works tokyo</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
