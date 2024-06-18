import React, { useEffect } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottieButton = () => {
  return (
    <Player
      autoplay
      loop
      src="/loader_button.json"
      style={{ height: 30, width:70}}
    >
    </Player>
  );
};

export default LottieButton;