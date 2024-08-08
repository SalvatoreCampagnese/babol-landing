import Image from "next/image";

export const EndBlock = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[url('/bg_end.svg')] bg-cover mr-[-40px] ml-[-40px] gap-4 md:mt-[2rem]">
            <Image src="/logo_footer.png" alt="Babol Logo" width={64} height={64} />
            <p className="text-[34px] md:text-[56px] font-bold text-center md:leading-[56px] leading-[34px]">Be the first to revolutionize<br/>event management!</p>
            <p className="text-[17px] md:text-[24px]">Join the beta and transform event management today!</p>
            <button className="p-md rounded-[12px] text-[#5831F5] z-10 bg-white h-[48px] text-[17px] mt-10 font-bold justify-center items-center flex whitespace-nowrap gap-1">Join Beta<Image src="/logo_purple.svg" width={24} height={24} alt={"babol logo"}/></button>
            </div>
    );
}