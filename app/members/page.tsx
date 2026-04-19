import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import ItemGalleryModal from "@/app/_components/ItemGalleryModal";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMembersList({
    limit: MEMBERS_LIST_LIMIT,
    filters: "vol5[equals]true",
  });
  data.contents.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul className={styles.grid}>
          {data.contents.map((member) => (
            <li key={member.id} id={member.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image.url}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) calc(50vw - 40px), (max-width: 920px) calc(50vw - 136px), 324px"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <a
                  href={member.occupation}
                  className={styles.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Instagram_Glyph_Black.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                  />
                  {member.name}
                </a>
                {member.item && member.itemlist && member.itemlist.length > 0 ? (
                  <ItemGalleryModal item={member.item} images={member.itemlist} />
                ) : member.item ? (
                  <p className={styles.item}>{member.item}</p>
                ) : null}
                <p className={styles.profile}>{member.profile}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
