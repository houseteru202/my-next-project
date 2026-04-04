import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function ArchiveLayout({ children }: Props) {
  return (
    <>
      <Hero title="Archive" sub="アーカイブ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
