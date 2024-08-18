import React, { useEffect, useState } from "react";
import { motion, useTransform, MotionValue, useScroll } from "framer-motion";

export default function ImageFramerMotion() {
    const { scrollY } = useScroll();


  // Define the scroll ranges for each image to control opacity
  const opacity1 = useTransform(scrollY, [1000, 1700, 1800], [1, 1, 0]);
  const opacity2 = useTransform(scrollY, [1700, 1800, 2000], [0, 1, 0]);
  const opacity3 = useTransform(scrollY, [1800, 2000, 2200], [0, 1, 0]);
  const opacity4 = useTransform(scrollY, [2000, 2200, 2800], [0, 1, 0]);
  return (
    <div style={{ height: "100px", position: "relative", width: 500 }}>
      <motion.img
        src="/chips-block.svg"
       
        alt="Image 1"
        height={500}
        style={{
          opacity: opacity1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
      <motion.img
        src= "/widgets-block.svg"
        alt="Image 2"
        height={500}
        style={{
          opacity: opacity2,
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "100%",
          width: "100%",
        }}
      />
      <motion.img
        src="/phone-block.svg"
        alt="Image 3"
        height={500}
        style={{
          opacity: opacity3,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
      <motion.img
        src="/phones-block.svg"
        alt="Image 4"
        style={{
          opacity: opacity4,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
    </div>
  );
}
