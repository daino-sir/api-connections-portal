import Image from "next/image";
import PageWrapper from "@/components/ui/wrappers/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Image src="/next.svg" alt="Next.js Logo" height={300} width={400} priority />
    </PageWrapper>
  );
}
