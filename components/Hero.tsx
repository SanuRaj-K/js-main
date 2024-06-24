import React from "react";
import { Spotlight } from "./ui/Spotlight";

function Hero() {
  return (
    <div className=" pb-20 pt-36 ">
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className=" top-10 left-full h-[80vh] w-[50vh]  "
          fill="white"
        />

        <Spotlight
          className=" top-28 left-80 h-[80vh] w-[50vh]  "
          fill="blue"
        />
      </div>
      <div>
        <div className="h-screen w-full absolute top-0 left-0   dark:bg-black-100  bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2]  flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className=" flex justify-center relative my-20  z-10  md:max-w-2xl lg:max-w-[70vw]   flex-col items-center  ">
          <div className=" max-w-[89vw] ">
            <h1 className=" uppercase tracking-widest text-center text-xs text-blue-100 max-w-[80w]">
              SanuRaj
            </h1>
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
