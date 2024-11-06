import React, { useEffect } from "react";
import gsap from 'gsap';

const SecondHeader = () => {
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(".ready", {
      x: -50,
      opacity: 0.5,
      duration: 1,
      ease: "power3.out",
      stagger: 0.07,
    });
    tl.from('.secondLine',{
      y:50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.07,
    })  
  }, []);

  return (
    <div className="w-full md:w-full mx-4 md:mx-20 pt-8 pb-2 md:my-10 md:h-[25em] border-l-[1px] md:border-l-2 border-b-[1px] md:border-b-2 border-yellow-300 flex flex-col items-center md:items-start">
      <p className="ready text-5xl sm:text-6xl md:text-[8em] lg:text-[10em] text-[#003c5f] font-bold md:pl-16 md:pt-16">
        Ready?
      </p>
      <div className="secondLine text-base sm:text-lg md:text-[2em] text-[#003c5f] mt-3 md:mt-8 flex flex-row items-center md:pl-20">
        <span>TO THE JOURNEY OF BEING</span>
        <span className="font-bold px-1 md:px-2">AWESOME!!</span>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row gap-1 pr-4 md:gap-2 md:mt-6 md:ml-16 mt-2 md:px-2 ">
        <div className="flex flex-row   ">
          <div className="text-center w-full border-2 px-3 rounded-r-3xl text-[12px] md:text-md text-[#003c5f] font-medium rounded-t-3xl hover:rounded-md hover:bg-cyan-400 transition-all duration-200 py-2 bg-yellow-200">
            About
          </div>
          <div className="text-center w-full border-2 px-4 rounded-l-3xl text-[12px] md:text-md text-[#003c5f] font-medium rounded-t-3xl hover:rounded-md hover:bg-cyan-400 transition-all duration-200 py-2 bg-yellow-200">
            Academics
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="text-center w-full border-2 px-4 rounded-r-3xl text-[12px] md:text-md text-[#003c5f] font-medium rounded-t-3xl hover:rounded-md hover:bg-cyan-400 transition-all duration-200 py-2 bg-yellow-200">
            Admission
          </div>
          <div className="text-center w-full border-2 px-4 rounded-l-3xl text-[12px] md:text-md text-[#003c5f] font-medium rounded-t-3xl hover:rounded-md hover:bg-cyan-400 transition-all duration-200 py-2 bg-yellow-200">
            Placements
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
