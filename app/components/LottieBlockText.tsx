import Image from "next/image";
import React, { useEffect, useState, useRef } from 'react';

export const LottieBlockText = () => {
    const [visibleImage, setVisibleImage] = useState(0);
    const textRef = useRef(null);

    const text = `This is how you’ve been organizing your events: juggling multiple apps, and scattering information across chats and groups. 
        It’s frustrating and chaotic...
        
        So, we decided to reinvent event management.
        With the use of widgets and a fully customizable space, our app brings everything you need into a single place.`;

    const images = [
        "/chips-block.svg",
        "/widgets-block.svg",
        "/phone-block.svg",
        "/phones-block.svg"
    ];

    const imageChangeThresholds = [2150, 2300, 2450, 2600]; // Scroll thresholds for changing images

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            let newVisibleImage = 0;
            for (let i = 0; i < imageChangeThresholds.length; i++) {
                if (scrollY >= imageChangeThresholds[i]) {
                    newVisibleImage = i;
                }
            }
            setVisibleImage(newVisibleImage);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [imageChangeThresholds]);

    return (
        <div className="relative p-4">
            <div className="sticky top-[-8px] w-full h-[358px] flex items-center justify-center z-10 ">
                {images.map((src, index) => (
                    <div key={index} style={{ opacity: index === visibleImage ? 1 : 0, position: 'absolute', transition: 'opacity 0s', backdropFilter: 'blur(20px)', borderRadius: 15 }}>
                        <Image src={src} height={358} width={358} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <div ref={textRef} className="relative px-1 py-2"> {/* Adjust margin-top as needed */}
                <p className="text-[34px] font-bold">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default LottieBlockText;
