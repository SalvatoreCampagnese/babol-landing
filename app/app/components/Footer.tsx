
export const Footer = () => {
  return (
    <div className="fixed bottom-0 h-[40px] w-screen flex-row flex justify-between">
      <p className="text-[14px] text-[#B0B2B6]">© 2024 Nebuls srl</p>
      <div className="flex flex-row gap-[24px] text-[#B0B2B6] p-0 mr-[64px]">
          <a href="/about" className="text-[#B0B2B6]">
            About
          </a>
        
          <a href="/support" className="text-[#B0B2B6]">
            Support
          </a>
        
          <a href="/contact-us" className="text-[#B0B2B6]">
            Contact us
          </a>
          </div>
    </div>
  );
};
