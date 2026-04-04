import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  title: string;
  sub?: string;
};

export default function Hero({ title }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
