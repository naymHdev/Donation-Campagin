import React, { useEffect, useState } from "react";
import GetDonate from "../../Utility/GetDonate";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNodataFound] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const addDonate = JSON.parse(localStorage.getItem("Donets"));
    if (addDonate) {
      setDonation(addDonate);
    } else {
      setNodataFound("No Data Found");
    }
  }, []);

//   console.log(isShow);
  return (
    <div>
      {noDataFound ? (
        <p className="flex justify-center items-center text-4xl h-screen font-bold text-red-600">
          {noDataFound}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5">
          {
          isShow
            ? donation.map((item) => <GetDonate key={item.id} item={item}></GetDonate>)
            : 
            donation.slice(0, 4).map((item) => <GetDonate key={item.id} item={item}></GetDonate>)
            }
        </div>
      )}
      <div className="text-center items-center mt-5">
        {
            donation.length > 3 && <button onClick={() => setShow(!isShow)} className="btn bg-green-700 text-white font-bold">
            { isShow ? "See Less" : "See More"}
          </button>
        }
      </div>
    </div>
  );
};

export default Donation;
