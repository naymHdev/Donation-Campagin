import React from "react";

const GetDonate = ({ item }) => {
  // console.log(item);

  const { picture, title, price, category, card_bg, category_bg, text_and_button_bg } = item || {};
  return (
    <>
      <div className="mt-5 lg:flex justify-start items-center ">
        <div className="">
          <img className="w-56" src={picture} alt="" />
        </div>

        <div className="border rounded-xl lg:w-[350px] " style={{ backgroundColor: card_bg }}>
          <button
            className="btn ml-5 mt-2"
            style={{ backgroundColor: category_bg, color: text_and_button_bg }}
          >
            {category}
          </button>
          <h1 className="font-semibold text-3xl ml-5">{title}</h1>
          <p className="font-bold ml-5" style={{ color: text_and_button_bg }}>
            ${price}
          </p>
          <button className="btn ml-5" style={{ backgroundColor: text_and_button_bg }}>
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default GetDonate;
