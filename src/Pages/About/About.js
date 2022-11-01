import React from "react";
import person from '../../Asset/images/about_us/person.jpg'
import perts from '../../Asset/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero mt-20 mb-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative  ">
          <img
            src={person}
            alt=""
            className="rounded-lg shadow-2xl w-4/5 h-full"
          />
          <img
            src={perts}
            alt=""
            className="rounded-lg shadow-2xl absolute right-5 top-1/2  w-3/5"
          />
        </div>
        <div>
            <p className="text-xl text-orange-500 font-bold">About Us</p>
          <h1 className="text-5xl font-bold my-5">
            We are qualified <br/> & of experience <br/> in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
