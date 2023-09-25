import React from "react";

const GetDonate = ({ item }) => {
  // console.log(item);

  const { id, picture, title, price, category } = item || {};
  return (
    <>
      <div>
        <div className="flex gap-5 justify-start items-center border">
          <div className="border">
            <img className="w-full" src={picture} alt="Album" />
          </div>

          <div className="p-3 border">
            <button className="btn mt-3">{category}</button>
            <h2 className="text-4xl mt-3 font-semibold">{title}</h2>
            <p className="text-2xl mt-3 font-bold">${price}</p>
            <button className="btn mt-3 mb-3">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDonate;
