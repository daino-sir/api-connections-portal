import { ReactNode } from 'react'
export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex flex-col md:h-[100dvh] h-fit w-full justify-center items-center'>
        {children}
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {children}
      </div>
    </>
  );
}