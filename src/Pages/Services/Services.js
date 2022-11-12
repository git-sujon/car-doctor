import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServiceItems from "../Services/ServiceItems";

const Services = () => {
  const [services, setServices] = useState([]);

  const [sort, setSort] = useState(true)
  const [search, setSearch] = useState('')
  const searchRef= useRef()

  const searchHandler = () => {
    console.log()
    setSearch(searchRef.current.value)
  }
  

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&order=${ sort ? 'LowToHigh' : 'HighToLow'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [sort]);

  return (
    <div className="text-center   py-14">
      <div className="w-3/5 mx-auto mb-8">
        <p className="text-xl font-bold text-orange-500">Service</p>
        <h3 className="text-5xl font-bold my-3">Our Service area</h3>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    <div className="my-3">
      <div className="mb-4">
      <input ref={searchRef} className="input input-sm border border-gray-900" type="text" />
      <button onClick={searchHandler} className="btn btn-primary">Search</button>
      
      </div>

      <button onClick={()=>setSort(!sort)} className="btn btn-info">{sort ? 'Low To High' : 'High To Low'}</button>
    </div>

      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((serviecs) => (
          <ServiceItems key={services?._id} serviecs={serviecs}></ServiceItems>
        ))}
      </div>
      <div className="mt-16 mb-8"><button className="btn btn-warning rounded-md">More Services</button></div>
    </div>
  );
};

export default Services;
