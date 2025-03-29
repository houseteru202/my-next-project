import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

/* type Props = {
  params: {
    slug: string;
  };
}; */
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;
/* export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound); */

export default async function Page({ params }: Props) {
  const data = await getNewsDetail((await params).slug).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
