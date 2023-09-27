import React from "react";

const GetDonate = ({ item }) => {

  const { picture, title, price, category, card_bg, category_bg, text_and_button_bg } = item || {};
  return (
    <>
      <div className="lg:flex items-center w-auto mx-auto">
        <div className="lg:p-2 p-0">
          <img className="" src={picture} alt="" />
        </div>

        <div className="lg:w-72 w-[313px] mx-auto lg:p-4 lg:-ml-2 rounded-sm lg:rounded-none" style={{ backgroundColor: card_bg }}>
          <div className="-mt-0 p-3 lg:p-0">
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
