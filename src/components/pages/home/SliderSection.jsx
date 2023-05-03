import React from "react";

const SliderSection = () => {
  let img =
    "https://thumbs.dreamstime.com/b/spices-open-recipe-book-space-text-selection-cooking-blank-pages-53759813.jpg";
  return (
    <>
      <div className="h-[calc(100vh-35vh)]">
        <div className="carousel h-full">
          <div id="item1" className="carousel-item w-full">
            <img src={img} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={img} className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={img} className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={img} className="w-full" />
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
