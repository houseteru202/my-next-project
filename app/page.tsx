import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getNewsList, getMembersList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT, MEMBERS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "./_components/NewsList";

const CATEGORIES = [
  { key: "food", label: "Food" },
  { key: "service", label: "Service" },
  { key: "workshop", label: "Workshop" },
  { key: "shop", label: "Shop" },
] as const;

export default async function Home() {
  const [newsData, membersData] = await Promise.all([
    getNewsList({ limit: TOP_NEWS_LIMIT }),
    getMembersList({ limit: MEMBERS_LIST_LIMIT }),
  ]);

  const membersByCategory = Object.fromEntries(
    CATEGORIES.map(({ key }) => [
      key,
      membersData.contents.filter((m) => m.category === key),
    ])
  );

  return (
    <>
      {/* ファーストビュー：ロゴ中央・背景画像 */}
      <section className={styles.hero}>
        <Image
          className={styles.heroBg}
          src="/img-mv.jpg"
          alt=""
          fill
          priority
        />
        <Image
          src="/logo_white.png"
          alt="BLACK MARKET"
          width={348}
          height={133}
          className={styles.heroLogo}
          priority
        />
        <div className={styles.scrollIndicator}>scroll</div>
      </section>

      {/* News */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>News</h2>
        <NewsList news={newsData.contents} layout="scroll" moreHref="/news" />
      </section>

      {/* Event Information */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Event Information</h2>
          <p className={styles.sectionLead}>
            BLACK MARKETは子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭り。
          </p>
          <dl className={styles.info}>
            <dt className={styles.infoTitle}>日程</dt>
            <dd className={styles.infoDesc}>2026年 開催予定（詳細は近日公開）</dd>
          </dl>
          <dl className={styles.info}>
            <dt className={styles.infoTitle}>会場</dt>
            <dd className={styles.infoDesc}>
              <a
                href="https://maps.app.goo.gl/PQGufARQNVdQZnhdA"
                target="_blank"
                className={styles.mapLink}
              >
                たつの湯
                <Image src="/google-maps.png" alt="" width={18} height={18} priority />
              </a>
            </dd>
          </dl>

          {/* 出展者カテゴリ別 */}
          {membersData.contents.length > 0 && (
            <div className={styles.exhibitors}>
              {CATEGORIES.map(({ key, label }) => {
                const members = membersByCategory[key];
                if (members.length === 0) return null;
                return (
                  <div key={key} className={styles.categoryBlock}>
                    <h3 className={styles.categoryLabel}>{label}</h3>
                    <ul className={styles.memberGrid}>
                      {members.map((member) => (
                        <li key={member.id}>
                          <Link
                            href={`/members#${member.id}`}
                            className={styles.memberCard}
                          >
                            <div className={styles.memberImageWrapper}>
                              <Image
                                src={member.image.url}
                                alt={member.name}
                                fill
                                className={styles.memberImage}
                              />
                            </div>
                            <span className={styles.memberName}>{member.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Tatsunoyu */}
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>Tatsunoyu</h2>
            <p className={styles.sectionLead}>
              1965年（昭和40年）より、東京練馬の片隅で薪と井戸水での仕込にこだわる公衆浴場。伝統の番台と熱めに沸かした大きな浴槽1つ。イベント当日は15時よりオープン。
            </p>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>営業日</dt>
              <dd className={styles.infoDesc}>火曜〜日曜（月曜定休）</dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>住所</dt>
              <dd className={styles.infoDesc}>東京都練馬区石神井台6-19-26</dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>HP</dt>
              <dd className={styles.infoDesc}>
                <a href="https://1010nerima.com/tatsunoyu" target="_blank">
                  https://1010nerima.com/tatsunoyu
                </a>
              </dd>
            </dl>
            <dl className={styles.info}>
              <dt className={styles.infoTitle}>備考</dt>
              <dd className={styles.infoDesc}>
                入浴料金550円。備え付けのシャンプー・ボディソープはございません。
              </dd>
            </dl>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="/tatsunoyu.jpg"
              alt="たつの湯"
              width={960}
              height={960}
              className={styles.sectionImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
