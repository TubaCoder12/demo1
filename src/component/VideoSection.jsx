import React from 'react';
import vi from '../assets/vi.mp4';

const VideoSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">
      {/* Video Section */}
      <video
        src={vi}
        autoPlay
        loop
        muted
        className="w-[90%] h-full object-cover mx-auto"
        aria-hidden="true"
      ></video>

      {/* Overlay Text */}
      <div className="absolute text-center text-white px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          VISIT <br /> ALPHALAND
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6">
          An oasis where individuals come to <br />
          Learn More Dream More Be More
        </p>
        <button className="mt-2 border p-3 rounded-full bg-white text-black hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
