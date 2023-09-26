// import React, { useEffect, useState } from "react";
// import GetDonate from "./GetDonate";
// import Statistics from "../Components/Statistics/Statistics";

// const DonationBox = () => {
//   const [donetBox, setDonetBox] = useState([]);
//   const [noFound, setNoFound] = useState("");
//   const [totalDonate, setTotal] = useState(0);

//   useEffect(() => {
//     const addDonate = JSON.parse(localStorage.getItem("Donets"));

//     if (addDonate) {
//       setDonetBox(addDonate);
//       const total = addDonate.reduce((preValue, currentItem) => preValue + currentItem.price, 0);
//       setTotal(total);
//     } else {
//       setNoFound("No Data Found");
//     }
//   }, []);
//   console.log(donetBox);

//   const handaleDelite = () => {
//     localStorage.clear();
//     setDonetBox([]);
//     setNoFound("No Data Found");
//   };

//   return (
//     <div>
//       {noFound ? (
//         <p>{noFound}</p>
//       ) : (
//         <div>
//           {donetBox.length > 0 && (
//             <button onClick={() => handaleDelite()} className="btn">
//               Delite All
//             </button>
//           )}
//           <div className="grid grid-cols-2">
//             {donetBox.map((item) => (
//               <GetDonate key={item.id} money={item}></GetDonate>
//             ))}
//           </div>
//           <button className="btn">See More</button>
//         </div>
//       )}
//       <Statistics totalDonate={totalDonate} ></Statistics>
//     </div>
//   );
// };

// export default DonationBox;
