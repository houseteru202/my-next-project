import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

/*
const dat a = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド・チャン",
      position: "CEO",
      profile:
        "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・サンダース",
      position: "COO",
      profile:
        "グローバル企業での運営管理と組織改革の経験豊富なエグゼクティブ。以前は製造業界でCOOとして勤務し、生産効率の向上や品質管理の最適化に成功。戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ウィルソン",
      position: "CTO",
      profile:
        "先進技術の研究開発と製品イノベーションの分野で優れた経歴を持つテクノロジーエキスパート。以前は、大手テクノロジー企業の研究開発部門で主任エンジニアとして勤務し、革新的な製品の開発に携わった。最新の技術トレンドに精通し、当社の製品ポートフォリオを革新的かつ競争力のあるものにするためにリサーチと開発をリードしている。",
    },
  ],
};
 */

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                {/* <dt className={styles.name}>{member.name}</dt> */}
                <a
                  href={member.occupation}
                  className={styles.name}
                  target="_blank"
                >
                  <Image
                    src="/Instagram_Glyph_Black.png"
                    alt=""
                    width={24}
                    height={24}
                    priority
                  />{" "}
                  {member.name}
                </a>
                {/* <dd className={styles.position}>{member.item}</dd> */}
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
          <li className={styles.list}>
            <Image
              src="/mohenagai.jpg"
              alt=""
              width="1024"
              height="1024"
              className={styles.image}
            />
            <dl>
              {/* <dt className={styles.name}>{member.name}</dt> */}
              <a
                href="https://www.instagram.com/yagoto_taichi/"
                className={styles.name}
                target="_blank"
              >
                <Image
                  src="/Instagram_Glyph_Black.png"
                  alt=""
                  width={24}
                  height={24}
                  priority
                />{" "}
                yagoto_taichi
              </a>
              　
              <a
                href="https://www.instagram.com/mocche_nagai/"
                className={styles.name}
                target="_blank"
              >
                <Image
                  src="/Instagram_Glyph_Black.png"
                  alt=""
                  width={24}
                  height={24}
                  priority
                />{" "}
                mocche_nagai
              </a>
              {/* <dd className={styles.position}>{member.item}</dd> */}
              <dd className={styles.profile}>
                モッチェ永井&ヤゴト太一で出演します！たつの湯脱衣所ステージで12時半から！
              </dd>
            </dl>
          </li>
          {/*
          <li className={styles.list}>
            <Image
              src="/tatsunoyuimada_.jpg"
              alt=""
              width="1200"
              height="900"
              className={styles.image}
            />
            <dl>
              <a
                href="https://www.instagram.com/tatsunoutko/"
                className={styles.name}
                target="_blank"
              >
                <Image
                  src="/Instagram_Glyph_Black.png"
                  alt=""
                  width={24}
                  height={24}
                  priority
                />{" "}
                たつの湯
              </a>
              　
              <a
                href="https://www.instagram.com/kotaroimada/"
                className={styles.name}
                target="_blank"
              >
                <Image
                  src="/Instagram_Glyph_Black.png"
                  alt=""
                  width={24}
                  height={24}
                  priority
                />{" "}
                今田 耕太郎
              </a>
              <dd className={styles.profile}>
                安心と気遣いをテーマに、たつの湯若旦那の銭湯に対する思いと、たつの湯の常連でもあり、被写体として
                銭湯を見つめて来た今田耕太郎とのクロストークを開催します。
                <br />
                11:00～11:30は浴室内撮影可能となります。今田耕太郎と一緒に銭湯の写真に関する話をしましょう。銭湯の撮影方法についての質問にもお答えします。
              </dd>
            </dl>
          </li>
          */}
        </ul>
      )}
    </div>
  );
}
