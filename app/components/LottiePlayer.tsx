import React, { useEffect } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottieIphone = () => {
  const [width, setWidth] = React.useState(718);
  const [height, setHeight] = React.useState(788);
  useEffect(() => {
    // if mobile
    if (window.innerWidth < 768) {
      setWidth(408);
      setHeight(447);
    } else {
      setWidth(718);
      setHeight(788);
    }
  }, []);
  return (
    <Player
      autoplay
      loop
      src="/iphone.json"
      style={{ height, width }}
    >
    </Player>
  );
};

export default LottieIphone;