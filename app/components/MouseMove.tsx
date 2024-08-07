"use client"
import { useEffect } from "react";

export default function MouseMove() {
    useEffect(() => {
      const handleMouseMove = (e: any) => {
        const circle: any = document.querySelector('.circle');
        if (circle) {
          const x = e.clientX;
          const y = e.clientY;
          const newPosX = x - 60;
          const newPosY = y - 60;
          circle.style.transform = `translate3d(${newPosX}px, ${newPosY}px, 0px)`;
        }
      };
  
      const box = document.querySelector('.box');
      const body = document.querySelector('body')!;
      if (box && body) {
        body.addEventListener('mousemove', handleMouseMove);
        box.addEventListener('click', handleMouseMove);
      }

      // Cleanup event listeners on unmount
      return () => {
        if (box) {
          body.removeEventListener('mousemove', handleMouseMove);
          box.removeEventListener('click', handleMouseMove);
        }
      };
    }, []);
  
    return <div className="box overflow-visible w-full">
    <div className="circle"></div>
  </div>
}