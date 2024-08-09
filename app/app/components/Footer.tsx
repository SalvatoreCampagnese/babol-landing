
export const Footer = () => {
  return (
    <div className="relative sm:absolute sm:bottom-0 sm:h-[40px] sm:w-screen w-full flex-col sm:flex-row flex justify-center items-center sm:justify-between mb-2 sm:mb-0">
      <p className="text-lg sm:text-md text-[#B0B2B6]">© 2024 Nebula srl</p>
      <div className="flex flex-row gap-[24px] text-[#B0B2B6] p-0 sm:mr-[64px]">
          <a href="/about" className="text-lg sm:text-md text-[#B0B2B6]">
            About
          </a>
        
          <a href="/support" className="text-lg sm:text-md text-[#B0B2B6]">
            Support
          </a>
        
          <a href="/contact-us" className="text-lg sm:text-md text-[#B0B2B6]">
            Contact us
          </a>
          </div>
    </div>
  );
};
