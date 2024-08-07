
export const Footer = () => {
  return (
    <div className="absolute bottom-0 h-[40px] w-[100%] pr-[50px] flex-row flex justify-between">
      <p className="text-[14px] text-[#B0B2B6]">© 2024 Nebuls srl</p>
      <ul className="flex flex-row gap-[24px] text-[#B0B2B6]">
        <li>
          <a href="/about" className="text-[#B0B2B6]">
            About
          </a>
        </li>
        <li>
          <a href="/support" className="text-[#B0B2B6]">
            Support
          </a>
        </li>
        <li>
          <a href="/contact-us" className="text-[#B0B2B6]">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
};
