import React from "react";

const BannerItem = ({slider}) => {

    const {image, prev, id, next} =slider

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
     
        <div className="carousel-image-overly">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="absolute flex  transform -translate-y-1/2 gap-8 right-5 bottom-2">
          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="absolute flex  text-white  transform -translate-y-1/2 gap-8 left-24 top-1/4">
          <h1 className="text-6xl font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>

        <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-24 bottom-1/3 text-xl w-1/2">
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>

        <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-24 top-3/4  ">
          <button className="btn btn-warning">Discover More</button>
        </div>

        <div className="absolute flex text-white  transform -translate-y-1/2 gap-8 left-72 top-3/4  ">
          <button className="btn btn-outline btn-info">Latest Works</button>
        </div>
      </div>

  );
};

export default BannerItem;
