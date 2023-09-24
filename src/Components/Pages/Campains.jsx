import React from "react";

const Campains = ({ campains }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
      {campains.data.map((categore) => (
        <div key={categore.id}>
          <img src={categore.picture} alt="" />
          <button className={categore.color.category_bg}>{categore.category}</button>
          <h1 className="text-2xl font-semibold">{categore.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Campains;
