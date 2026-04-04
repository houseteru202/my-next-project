import Image from "next/image";
import { getArchive2025Images, getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import GallerySlider from "@/app/_components/GallerySlider";
import styles from "./page.module.css";

export const metadata = {
  title: "Archive vol.4",
};

export default async function Vol4Page() {
  const [gallery, membersData] = await Promise.all([
    getArchive2025Images({ limit: 100 }),
    getMembersList({
      limit: MEMBERS_LIST_LIMIT,
      filters: "vol4[equals]true",
    }),
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.volTitle}>BLACK MARKET vol.4</h1>

      {/* 開催概要 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>開催概要</h2>
        <dl className={styles.info}>
          <dt className={styles.infoTitle}>開催日時</dt>
          <dd className={styles.infoDesc}>2025年10月19日（日）10:00〜15:00</dd>
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
              <Image src="/google-maps.png" alt="" width={18} height={18} />
            </a>
            <span>東京都練馬区石神井台6-19-26</span>
          </dd>
        </dl>
        <dl className={styles.info}>
          <dt className={styles.infoTitle}>ライブ</dt>
          <dd className={styles.infoDesc}>
            12:30〜 モッチェ永井 &amp; ヤゴト太一 @ 脱衣所ステージ
          </dd>
        </dl>
      </section>

      {/* 参加メンバー */}
      {membersData.contents.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>参加メンバー</h2>
          <ul className={styles.exhibitorGrid}>
            {membersData.contents.map((member) => (
              <li key={member.id} className={styles.exhibitorItem}>
                <div className={styles.memberImageWrapper}>
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    fill
                    className={styles.memberImage}
                  />
                </div>
                <span className={styles.memberName}>
                  {member.occupation.split(",").map((url, i) => (
                    <a
                      key={i}
                      href={url.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Instagram_Glyph_Black.png"
                        alt="Instagram"
                        width={14}
                        height={14}
                      />
                    </a>
                  ))}
                  {member.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* フォトギャラリー */}
      {(() => {
        const images = gallery.contents.flatMap((item) => item.imageList);
        return images.length > 0 ? (
          <section className={styles.sectionFullBleed}>
            <h2 className={`${styles.sectionTitle} ${styles.galleryHeading}`}>Photo Gallery</h2>
            <GallerySlider images={images} />
          </section>
        ) : null;
      })()}
    </div>
  );
}
