"use client"
import Image from "next/image";
import React, { useEffect, useState, useRef } from 'react';

export const LottieBlockTextDesktop = () => {
    const [visibleImage, setVisibleImage] = useState(0);
    const [fixImage, setFixImage] = useState(false);
    const [alignEnd, setAlignEnd] = useState(false);
    const [imageDimensions, setImageDimensions] = useState(358);
    const textRef = useRef(null);

    const text = `This is how you’ve been organizing your events: juggling multiple apps, and scattering information across chats and groups.\nIt’s frustrating and chaotic...\nSo, we decided to reinvent event management.\nWith the use of widgets and a fully customizable space, our app brings everything you need into a single place.`;

    const images = [
        "/chips-block.svg",
        "/widgets-block.svg",
        "/phone-block.svg",
        "/phones-block.svg"
    ];

    const imageChangeThresholds = [2300, 2450, 2550, 2750]; // Scroll thresholds for changing images

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setFixImage(scrollY >= 2300 && scrollY <= 2750);
            setAlignEnd(scrollY >= 2750);
            let newVisibleImage = 0;
            for (let i = 0; i < imageChangeThresholds.length; i++) {
                if (scrollY >= imageChangeThresholds[i]) {
                    newVisibleImage = i;
                }
            }
            setVisibleImage(newVisibleImage);
        };

        window.addEventListener('scroll', handleScroll);

        setImageDimensions(document.getElementById("test")?.offsetWidth || 358);
        return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="sticky relative p-4 flex flex-row-reverse min-h-[100vh]">
            <div className="sticky w-3/6 flex items-center justify-center z-10 relative top-0 min-h-[100%]" id="test">
                {images.map((src, index) => (
                    <div key={index}
                        style={{
                            opacity: index === visibleImage ? 1 : 0,
                            position: fixImage ? 'fixed' : "absolute",
                            transition: 'opacity 0s',
                            backdropFilter: 'blur(20px) !important',
                            borderRadius: 15, 
                            ...( !alignEnd ? { top: 0} : {bottom: 0} ),
                        }}
                        className="backdrop-filter-blur ">
                        <Image src={src} height={imageDimensions} width={imageDimensions} alt={`Image ${index}`} style={
                            {
                                minWidth: '100% !important',
                                minHeight: '100% !important',
                            }
                        } />
                    </div>
                ))}
            </div>
            <div ref={textRef} className="relative px-1 py-2 w-3/6"> {/* Adjust margin-top as needed */}
                <p className="text-[34px] md:text-[60px] font-bold">
                {text.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} style={{ margin: '0', padding: '0', wordBreak: 'break-word', marginBottom: 25 }}>
                {line}
                </p>
            ))}
                </p>
            </div>
        </div>
    );
};

export default LottieBlockTextDesktop;
