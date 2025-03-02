/* import Image from "next/image"; */
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      description:
        "BLACK MARKETは子供も大人も楽しめるネオ縁日。老舗銭湯たつの湯の駐車場で石神井界隈の個性豊かな店主達による年に一度のお祭りが今年も開催。たつの湯のお湯並みに熱い1日を体感せよ！",
    },
  ],
};

export default async function Page() {
  return (
    <div className={styles.container}>
      {
        <ul>
          {data.contents.map((business) => (
            <li key={business.id} className={styles.list}>
              <dl className={styles.flex}>
                {/* <dd className={styles.name}>{business.name}</dd> */}
                <dd className={styles.description}>{business.description}</dd>
              </dl>
              {/* <Image
                src={business.image?.url as string}
                alt=""
                width={business.image?.width}
                height={business.image?.height}
                className={styles.image}
              /> */}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
