import { ReactNode } from 'react'

export const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='hidden mt-0 md:flex w-full h-fit border flex-row justify-left items-centre bg-white px-8 py-4 border-gray-300'>
      {children}
    </div>
  )
}
