import React from "react";
import CircularProgressBar from "./CircularProgressBar";

const CompatibilityCard = ({ data }) => {
  return (
    <div className="mb-4 w-full rounded-lg bg-white p-6 shadow-md  ">
      <h2 className="text-lg font-semibold">{data.Recipient_Name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Donor: {data.Donor_Name}
      </p>
      <div className="mt-4">
        <CircularProgressBar
          percentage={(data.Compatibility_Score / 300) * 100}
          text={`${Math.round((data.Compatibility_Score / 300) * 100)}%`}
        />
      </div>
      <div className="mt-4">
        <p className="text-sm">
          <span className="font-semibold">Blood Type Compatibility:</span>{" "}
          {data.Blood_Type_Compatibility ? "Compatible" : "Not Compatible"}
        </p>
        <p className="text-sm">
          <span className="font-semibold">BMI Compatibility:</span>{" "}
          {data.BMI_Compatibility ? "Compatible" : "Not Compatible"}
        </p>
        <p className="text-sm">
          <span className="font-semibold">HLA Matches:</span> {data.HLA_Matches}
        </p>
      </div>
    </div>
  );
};

export default CompatibilityCard;
