import { ReactNode } from 'react';

export const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hidden mt-0 md:flex w-full h-fit border flex-row justify-left items-centre bg-white px-8 py-4 border-gray-300">
      
      <nav className="flex justify-between items-center w-full bg-gray-100 p-4">
        <div className="logo">
          <a href="#" className="text-lg font-bold">Logo</a>
        </div>
        <div className="menu flex gap-4">
          <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </nav>
     
     
    </div>
  );
};
