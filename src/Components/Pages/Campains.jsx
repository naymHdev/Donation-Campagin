import React, { useState } from "react";
import Campain from "./Campain/Campain";

const Campains = ({ campains }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState([]);

  const handleSearch = () => {
    const searchCategory = campains.data.filter((category) => category.category.includes(search));
    setShowSearch(searchCategory);
  };

  const displayCategory = search ? showSearch : campains.data.slice(0, campains.length);

  return (
    <div>

      <div>
        
        <div className="hero h-[70vh] rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/sHwLwYn/doctor-vacation.jpg)'}}>
    <div className="hero-overlay rounded-xl bg-opacity-80"></div>
    <div className="hero-content text-center text-neutral-content">
      <div>
        <h1 className="mb-5 text-5xl font-bold ">I Grow By Helping People In Need</h1>

        <div className="lg:flex md:justify-center sm:justify-center   md:items-center">
              <input
                className="mb-2 p-3  rounded-md text-black border-none lg:px-9"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name=""
                id=""
                placeholder="Search here...."
              />
              <button
                onClick={() => handleSearch()}
                className="btn lg:rounded-tl-none lg:rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-red-600 border-none "
              >
                Search
              </button>
            </div>
      </div>
    </div>
  </div>
      </div>




      {/* <div
        className=" h-[70vh] rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/sHwLwYn/doctor-vacation.jpg)",
        }}
      >
        <div className="hero-overlay rounded-xl bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md lg:-mt-96">
            <h1 className="mb-5 text-white text-2xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex justify-center items-center">
              <input
                className="p-3 rounded-md text-black border-none lg:px-9"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name=""
                id=""
                placeholder="Search here...."
              />
              <button
                onClick={() => handleSearch()}
                className="btn rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none bg-red-600 border-none "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-8">
        {displayCategory.map((camp) => (
          <Campain key={camp.id} camp={camp}></Campain>
        ))}
      </div>
    </div>
  );
};

export default Campains;
