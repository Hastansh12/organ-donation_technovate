import axios from "axios";
import InputField from "components/fields/InputField";
import SelectField from "components/fields/SelectField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function OrganForm() {
  // Define state variables for form fields
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [organName, setOrganName] = useState("");

  const areAllFieldsFilled = () => {
    return (
      age !== "" &&
      weight !== "" &&
      bloodGroup !== "" &&
      height !== "" &&
      gender !== "" &&
      organName !== ""
    );
  };

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        data: { message, data },
      } = await axios.post(
        `http://localhost:5000/portfolio`,
        {
          age,
          weight,
          bloodGroup,
          gender,
          organName,
          height,
        },
        { withCredentials: true }
      );

      if (data) {
        toast.success("Profile data added!");
        navigate("/admin");
      } else {
        toast.error("Some error occurred!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Some error occurred!");
    }
  };

  return (
    <div className="mt-10 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[600px]">
        <h4 className="mb-8 text-4xl font-bold text-navy-700 dark:text-white">
          Organ Donation/Recipient Form
        </h4>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Age */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Age*"
            placeholder="Enter your age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          {/* Weight */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Weight*"
            placeholder="Enter your weight in kg"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* Blood Group */}
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

          {/* Height */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Height*"
            placeholder="Enter your height in cm"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* Gender */}
          <SelectField
            variant="auth"
            extra="mb-3"
            label="Gender*"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </SelectField>

          {/* Organ Name */}
          <SelectField
            variant="auth"
            extra="mb-3"
            label="Organ Name*"
            id="organName"
            value={organName}
            onChange={(e) => setOrganName(e.target.value)}
          >
            <option value="Kidney">Kidney</option>
            <option value="Liver">Liver</option>
            <option value="Heart">Heart</option>
            <option value="Lung">Lung</option>
            <option value="Pancreas">Pancreas</option>
            <option value="Intestines">Intestines</option>
            <option value="Eye">Eye</option>
            <option value="Skin">Skin</option>
          </SelectField>

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
