import React from "react";
import Lottie from "lottie-react";
import animationData from "../Anime/welcome.json"; // make sure file is renamed & inside /assets

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <Lottie
        animationData={animationData}
        loop={false} // play once
        className="w-72 h-72"
      />
    </div>
  );
}

export default Loader;
