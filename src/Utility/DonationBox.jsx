import React, { useEffect, useState } from "react";
import GetDonate from "./GetDonate";

const DonationBox = () => {
  const [donetBox, setDonetBox] = useState([]);
  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const addDonate = JSON.parse(localStorage.getItem("Donets"));

    if (addDonate) {
      setDonetBox(addDonate);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(donetBox);

  return (
    <div className="grid grid-cols-3 gap-5">
      {noFound ? (
        <P>{noFound}</P>
      ) : (
        <div>
          {donetBox.map((money) => (
            <GetDonate key={money.id} money={money}></GetDonate>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationBox;
