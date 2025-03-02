import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = {
  title: "事業内容｜シンプルなコーポレートサイト",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="about" sub="BLACK MARKET Shakujiiについて" />
      <Sheet>{children}</Sheet>
    </>
  );
}
