import React from "react";

const GetDonate = ({ item }) => {

  const { picture, title, price, category, card_bg, category_bg, text_and_button_bg } = item || {};
  return (
    <>
      <div className="flex items-center">
        <div className="p-2">
          <img className="" src={picture} alt="" />
        </div>

        <div className="border 400 w-72 p-4 -ml-2" style={{ backgroundColor: card_bg }}>
          <div className="">
            <button
              className="px-2 py-1 rounded-md font-bold"
              style={{ backgroundColor: category_bg, color: text_and_button_bg }}
            >
              {category}
            </button>

            <h1 className="font-semibold text-xl mt-2">{title}</h1>

            <p className="font-bold mt-2" style={{ color: text_and_button_bg }}>
              ${price}
            </p>

            <button
              className="px-2 py-2 rounded-md font-bold text-white mt-2"
              style={{ backgroundColor: text_and_button_bg }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDonate;
