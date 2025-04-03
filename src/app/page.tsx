import Image from "next/image";
import PageWrapper from "@/components/ui/wrappers/page-wrapper";

export default function Home() {
  return (
   <PageWrapper>
     <Image src='@/next.svg' alt='loading...' height='300' width='400' priority className='border border-amber-600' />
   </PageWrapper>
  );
}
