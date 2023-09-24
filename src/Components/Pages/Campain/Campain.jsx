import React from "react";
import { Link } from "react-router-dom";

const Campain = ({ camp }) => {
  console.log(camp);

  const { id, picture, category, title } = camp || {};

  return (
    <div>
    <Link to={`/camp/${id}`}>  <div className="hover:cursor-pointer">
        <div className="rounded-xl bg-gray-400">
          <img className="w-full bg-cover" src={picture} alt="" />
          <div
            className="p-3 h-36"
            style={{
              background: camp.color.card_bg,
              color: camp.color.text_and_button_bg,
            }}
          >
            <div>
              <button
                className="font-bold border-none btn"
                style={{
                  background: camp.color.category_bg,
                  color: camp.color.text_and_button_bg,
                }}
              >
                {category}
              </button>
            </div>
            <h1 className="text-2xl font-semibold py-2">{title}</h1>
          </div>
        </div>
      </div></Link>
    </div>
  );
};

export default Campain;
