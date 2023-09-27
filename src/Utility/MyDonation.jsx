import React from "react";
import swal from "sweetalert";

const MyDonation = ({ donates }) => {
  // console.log(donates);

  const { id, picture, description, title, price,  text_and_button_bg } = donates || {};

  const addDonation = () => {
    // console.log(donates);
    const addFundArr = [];

    const addDonate = JSON.parse(localStorage.getItem("Donets"));

    if (!addDonate) {
      addFundArr.push(donates);
      localStorage.setItem("Donets", JSON.stringify(addFundArr));
      swal("Good job!", "You clicked the button!", "success");

    } else {

      const isExist = addDonate.find((donates) => donates.id === id);
    //   console.log(isExist);

      if (!isExist) {
        addFundArr.push(...addDonate, donates);
        localStorage.setItem("Donets", JSON.stringify(addFundArr));
        swal("Good job!", "You clicked the button!", "success");
         
      } else {
        swal("Alrady Added!", "You clicked the button!", "warning");
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="w-full mt-3 flex justify-center items-center">
          <img className="w-full mt-10 rounded-md h-[80vh]" src={picture} alt="" />
        </div>
       <div className="-mt-24 p-6 relative bg-[#00000070]">
          <button style={{ backgroundColor: text_and_button_bg }} className=" text-white btn border-none" onClick={() => addDonation()}>
            <span className="font-semibold">Donate</span>${price}
          </button>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mt-10">{title}</h2>
          <p className="mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyDonation;
