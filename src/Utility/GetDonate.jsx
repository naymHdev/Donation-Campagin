import React from "react";

const GetDonate = ({ item }) => {
  // console.log(item);

  const { picture, title, price, category, card_bg, category_bg, text_and_button_bg } = item || {};
  return (
    <>

<div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-1/3 bg-cover">
      <img src={picture} alt="" />
    </div>

    <div className="w-2/3 p-4 md:p-4 style={{ backgroundColor: card_bg }}">
        <h1 className="text-xl font-bold">{title}</h1>

        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold md:text-xl">${price}</h1>
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">View Details</button>
        </div>
    </div>
</div>



      {/* <div classNameName="mt-5 lg:flex justify-start items-center ">
        <div classNameName="">
          <img classNameName="w-56" src={picture} alt="" />
        </div>

        <div classNameName="border rounded-xl lg:w-[350px] " style={{ backgroundColor: card_bg }}>
          <button
            classNameName="btn ml-5 mt-2"
            style={{ backgroundColor: category_bg, color: text_and_button_bg }}
          >
            {category}
          </button>
          <h1 classNameName="font-semibold text-3xl ml-5">{title}</h1>
          <p classNameName="font-bold ml-5" style={{ color: text_and_button_bg }}>
            ${price}
          </p>
          <button classNameName="btn ml-5" style={{ backgroundColor: text_and_button_bg }}>
            View Details
          </button>
        </div>
      </div> */}
    </>
  );
};

export default GetDonate;
