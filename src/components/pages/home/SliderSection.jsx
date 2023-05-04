import React from "react";

const SliderSection = () => {
  return (
    <>
      <div className="lg:h-[calc(100vh-35vh)]">
        <div className="carousel h-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/FwkF9W1/09-COOKING-CHICKENWINGS2-super-Jumbo.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/VBcgJ97/Classic-Reuben-Sandwich-Recipe-326387597-web-1024x655.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/PFGcCGx/limes-58312-2.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/4TL6y3C/hero-1-0.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </>
  );
};

export default SliderSection;
