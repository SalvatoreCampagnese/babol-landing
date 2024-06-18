import React, { useEffect } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottieIphone = () => {
  const [width, setWidth] = React.useState(380);
  const [height, setHeight] = React.useState(416);
  useEffect(() => {

    let width, height;
    // I calc ratio width and height based on the screen size and the initial value of 718x788
    height = window.innerWidth * (788 / 718);
    width = window.innerWidth;
    

    if (window.innerWidth > 1950) {
      width = 800;
      height = width * 1.0974;
    } else if (window.innerWidth > 768) {
      width = 600;
      height = width * 1.0974;
    }

    setWidth(width-10);
    setHeight(height);
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