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
              <h2 className={styles.sectionTitleEn}>Event Info</h2>
              <p className={styles.sectionDescription}>
                BLACK
                MARKETは子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭りが今年も開催。たつの湯のお湯並みに熱い1日を体感せよ！
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>開催日</dt>
                <dd className={styles.infoDescription}>
                  2025年4月13日（日） 10:00～15:00
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>開催地</dt>
                <dd className={styles.infoDescription}>
                  　
                  <a
                    href="https://maps.app.goo.gl/PQGufARQNVdQZnhdA"
                    target="_blank"
                    /*                     className={styles.mapLink}*/
                    className={styles.infoIconLayout}
                  >
                    たつの湯
                    <Image
                      src="/google-maps.png"
                      alt=""
                      width={24}
                      height={24}
                      priority
                    />{" "}
                  </a>
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>イベント</dt>
                <dd className={styles.infoDescription}>
                  11:30～ LIVE@脱衣所 (モッチェ永井&ヤゴト太一) <br />
                  12:00～ TALKSHOW@浴場内 (たつの湯三代目&今田耕太郎)
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>出店情報</dt>
                <dd className={styles.infoDescription}>
                  店名1（商品1、商品2）/店名2（商品1、商品2）/店名3（商品1、商品2）/店名4（商品1、商品2）
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>ご注意事項</dt>
                <dd className={styles.infoDescription}>
                  <dl>ご来場は徒歩でお願いします。</dl>
                  <dl>
                    駐車場/駐輪場はご利用頂けません。近隣の有料施設をご利用ください。
                  </dl>
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}>主催</dt>
                <dd className={styles.infoDescription}>
                  <a
                    href="https://www.instagram.com/treeworks_tokyo/"
                    target="_blank"
                    className={styles.infoIconLayout}
                  >
                    <Image
                      src="/Instagram_Glyph_Black.png"
                      alt=""
                      width={18}
                      height={18}
                      priority
                    />{" "}
                    treeworks tokyo
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Tatsunoyu</h2>
            <p className={styles.sectionDescription}>
              1964年（昭和39年）創業のたつの湯。クラシックな佇まい。清潔感のある脱衣所と湯舟。
              薪で沸かしたアッツアツのお湯に浸かれば、サウナいらずの整い間違いなし。
              <br />
              イベント当日は13時よりオープン。
            </p>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>営業時間</dt>
              <dd className={styles.infoDescription}>
                同日 13:00～22:00 <br />
                ※平時は15:00～
              </dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>住所</dt>
              <dd className={styles.infoDescription}>
                東京都練馬区石神井台6-19-26
              </dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>HP</dt>
              <dd className={styles.infoDescription}>
                <a href="https://1010nerima.com/tatsunoyu" target="_blank">
                  https://1010nerima.com/tatsunoyu
                </a>
              </dd>
            </dl>
          </div>

          <Image
            className={styles.hiringImg}
            src="/tatsunoyu.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <Image
            className={styles.aboutusImg}
            src="/welders.jpg"
            alt=""
            width={6000}
            height={4000}
          />
          <div>
            <h2 className={styles.sectionTitleEn}>After Party</h2>
            <p className={styles.sectionDescription}>
              今年もAfterParty開催決定！！
              銭湯あがりにグイっと行きたい方はもちろん、夜からでも楽しめる内容になっているので、Weldersへ全員集合！！
              Entrance Free！！
            </p>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>開催日</dt>
              <dd className={styles.infoDescription}>同日 15:00～22:00</dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>開催地</dt>
              <dd className={styles.infoDescription}>
                　
                <a
                  href="https://maps.app.goo.gl/4qHXfrnwQA63pnoWA"
                  target="_blank"
                  className={styles.infoIconLayout}
                  /* className={styles.mapLink} */
                >
                  Welders Diner
                  <Image
                    src="/google-maps.png"
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />{" "}
                </a>
              </dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>DJs</dt>
              <dd className={styles.infoDescription}>XXXXXX/YYYYYY/ZZZZZZ</dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>ご注意事項</dt>
              <dd className={styles.infoDescription}>
                <dl>小学生以上はワンドリンクご注文をお願いします。</dl>
                <dl>ご注文は現金またはPayPayでお願いします。</dl>
                <dl>飲食物のお持ち込みはご遠慮ください。</dl>
                <dl>屋外での談笑はお控えください。</dl>
                <dl>店内および店頭での喫煙はご遠慮ください。</dl>
                <dl>
                  駐車場/駐輪場はございません。近隣の有料施設をご利用ください。
                </dl>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
