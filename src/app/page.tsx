import Image from "next/image";
import PageWrapper from "@/components/ui/wrappers/page-wrapper";
import { NavbarWrapper } from "@/components/ui/wrappers/navbar-wrapper";

export default function Home() {
  return (
    <>
      <NavbarWrapper>
        {/* Add content or leave empty if no children are needed */}
        <div></div>
      </NavbarWrapper>
      <PageWrapper>
        <Image src="/next.svg" alt="Next.js Logo" height={300} width={400} priority />
      </PageWrapper>
    </>
  );
}
