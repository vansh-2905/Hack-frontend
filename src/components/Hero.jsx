import MUN from "../assets/MUN.png"
import { BackgroundCircles, Gradient } from "./design/Hero";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const parallaxRef = useRef(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/room');
  };

  return (
      <div className="container relative pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" ref={parallaxRef} id="Hero">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 
                     animate-gradient-xy rounded-xl">
            AI Virtual Modle United Nations
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Innovating with AI to solve global challenges and foster sustainable development. Be part of the change.
          </p>
          <input
              type="text"
              className="w-[600px] bg-transparent backdrop-blur-sm border border-gray-300 rounded-xl p-2"
              placeholder="Enter topic"
            />
          <button 
            className="transition ease-in-out delay-0 bg-white text-black/90 font-bold rounded-xl p-2 
                            hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-150 ml-3 "
            onClick={handleClick}>
            Lets Go
          </button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-2 rounded-2xl bg-conic-gradient">
              <div className="rounded-b-[0.9rem] overflow-hidden aspect-[688/490] rounded-xl">
                <img
                  src={MUN}
                  className="w-full md:-translate-y-[20%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="MUN"
                />
              </div>
          </div>

          <BackgroundCircles />
        </div>
      </div>
  );
};

export default Hero;
