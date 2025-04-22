import { ReactNode } from 'react';

export const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='hidden mt-0 md:flex w-full h-fit border flex-row justify-left items-centre bg-white px-8 py-4 border-gray-300'>
        {children}
      </div>

      <div className="hidden mt-0 md:flex w-full h-fit border flex-row justify-left items-centre bg-white px-8 py-4 border-gray-300">
        <nav className="flex justify-between items-center w-full bg-gray-100 p-4">
          <div className="logo">
            <a href="#" className="text-lg font-bold">Logo</a>
          </div>
        </nav>
      </div>
    </div>
  );
};