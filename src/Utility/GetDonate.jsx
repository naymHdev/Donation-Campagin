import React from "react";

const GetDonate = ({ item }) => {
  // console.log(item);

  const { picture, title, price, category, card_bg, category_bg, text_and_button_bg } = item || {};
  return (
    <>
      <div className="grid gap-5">
        <div className="relative flex w-full mt-5 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={picture} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6 text-start">
            <button style={{ text_and_button_bg }} classNameName="btn">
              {category}
            </button>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p className="mb-8 block font-sans text-base font-bold leading-relaxed text-gray-700 antialiased">
              ${price}
            </p>
            <a className="inline-block" href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                View Details
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div classNameName=" grid md:grid-cols-2">
        <div classNameName="flex gap-5 justify-start items-center">
          <div classNameName="border">
            <img classNameName="" src={picture} alt="Album" />
          </div>

          <div classNameName="p-3 border w-full">
            <button classNameName="btn mt-3">{category}</button>
            <h2 classNameName="text-4xl mt-3 font-semibold">{title}</h2>
            <p classNameName="text-2xl mt-3 font-bold">${price}</p>
            <button classNameName="btn mt-3 mb-3">View Details</button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default GetDonate;
