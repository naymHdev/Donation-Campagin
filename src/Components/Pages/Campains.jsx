import React from "react";
import { Link } from "react-router-dom";

const Campains = ({ campains }) => {

  const donateHandaleClick = () => {
    console.log('object');
  }

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 mb-12">
      {campains.data.map((categore) => (
        <div key={categore.id} className="hover:cursor-pointer" onClick={() => donateHandaleClick()}>
          <div className="rounded-xl bg-gray-400">
            <img className="w-full bg-cover" src={categore.picture} alt="" />
            <div
              className="p-3 h-36"
              style={{
                background: categore.color.card_bg,
                color: categore.color.text_and_button_bg,
              }}
            >
              <div>
                <Link>
                  <button
                    className="font-bold border-none btn"
                    style={{
                      background: categore.color.category_bg,
                      color: categore.color.text_and_button_bg,
                    }}
                  >
                    {categore.category}
                  </button>
                </Link>
              </div>
              <h1 className="text-2xl font-semibold py-2">{categore.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campains;