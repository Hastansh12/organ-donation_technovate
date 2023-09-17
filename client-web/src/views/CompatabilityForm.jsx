import React, { useState } from "react";
import axios from "axios";
import InputField from "components/fields/InputField";
import SelectField from "components/fields/SelectField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CompatabilityForm() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [hlaType, setHLAType] = useState(""); // New field for HLA type
  const [bmi, setBMI] = useState(""); // New field for BMI

  const navigate = useNavigate();

  const areAllFieldsFilled = () => {
    return bloodGroup !== "" && hlaType !== "" && bmi !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/admin/hospital");

    try {
      const {
        data: { message, data },
      } = await axios.post(
        `http://localhost:5000/organ`,
        {
          bloodGroup,
          hlaType,
          bmi,
        },
        { withCredentials: false }
      );

      if (data) {
        // toast.success("Form data added!");
        navigate("/admin");
      } else {
        // toast.error("Some error occurred!");
      }
    } catch (error) {
      //   toast.error(error?.response?.data?.message || "Some error occurred!");
    }
  };

  return (
    <div className="mt-10 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[600px]">
        <h4 className="mb-8 text-4xl font-bold text-navy-700 dark:text-white">
          Donor/Recipient Compatibility form
        </h4>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Please fill out the following fields to find the most compatible
          donors:
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <SelectField
            variant="auth"
            extra="mb-3"
            label="Blood Group*"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </SelectField>

          <InputField
            variant="auth"
            extra="mb-3"
            label="HLA Type*"
            placeholder="Enter your HLA type"
            type="text"
            value={hlaType}
            onChange={(e) => setHLAType(e.target.value)}
          />

          {/* BMI */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="BMI*"
            placeholder="Enter your BMI"
            type="text"
            value={bmi}
            onChange={(e) => setBMI(e.target.value)}
          />

          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            type="submit"
            disabled={!areAllFieldsFilled()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
