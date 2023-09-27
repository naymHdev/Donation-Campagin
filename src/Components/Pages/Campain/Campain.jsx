import React from "react";
import { Link } from "react-router-dom";

const Campain = ({ camp }) => {
  // console.log(camp);

  const { id, picture, category, title } = camp || {};

  return (
    <div>
      
    <Link to={`/camp/${id}`}>  <div className="hover:cursor-pointer">
        <div className="rounded-xl ">
          <img className="w-full bg-cover" src={picture} alt="" />
          <div
            className="p-3 h-36 rounded-b-xl"
            style={{
              background: camp.card_bg,
              color: camp.text_and_button_bg,
            }}
          >
            <div>
              <button
                className="font-bold border-none btn"
                style={{
                  background: camp.category_bg,
                  color: camp.text_and_button_bg,
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
