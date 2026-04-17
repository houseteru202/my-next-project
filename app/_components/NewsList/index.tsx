import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
  layout?: "list" | "scroll";
  moreHref?: string;
};

export default function NewsList({ news, layout = "list", moreHref }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={cx(styles.list, layout === "scroll" && styles.scrollList)}>
      {news.map((article) => (
        <li key={article.id} className={cx(styles.item, layout === "scroll" && styles.scrollItem)}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <div className={styles.imageWrapper}>
              {article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 180px, 240px"
                  className={styles.image}
                />
              ) : (
                <Image
                  src="/no-image.png"
                  alt="No Image"
                  fill
                  sizes="(max-width: 640px) 180px, 240px"
                  className={styles.image}
                />
              )}
            </div>
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
      {layout === "scroll" && moreHref && (
        <li className={cx(styles.scrollItem, styles.moreItem)}>
          <Link href={moreHref} className={styles.moreLink}>
            <span className={styles.moreText}>read more</span>
          </Link>
        </li>
      )}
    </ul>
  );
}
