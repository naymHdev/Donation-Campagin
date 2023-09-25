import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyDonation from "../../../Utility/MyDonation";

const DonationDetails = () => {
  const [donates, setDonates] = useState({});
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    const donate = details?.data?.find((donat) => donat.id === idInt);
    setDonates(donate);
  }, []);

  //  console.log(donates );

  return (
    <div>
      <MyDonation donates={donates}></MyDonation>
    </div>
  );
};

export default DonationDetails;
