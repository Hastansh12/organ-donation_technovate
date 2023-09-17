import { useState } from "react";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import SelectField from "components/fields/SelectField"; // Import the SelectField component for the dropdown
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "context/auth-context";
import { setupAuthHeaderForNetworkCalls } from "services/SetupAuthHeaders";

export default function SignUp() {
  // States for form fields and validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [requirement, setRequirement] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();
  const { setCurrentUser, setUserRole } = useAuth();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more complex validation)
    const isEmailValid = email && email.includes("@");
    const isPasswordValid = password.length >= 8;

    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid && requirement !== "") {
      console.log(email, password, requirement);
      try {
        const {
          data: { user, token },
        } = await axios.post(
          `http://localhost:5000/user/newUser`,
          {
            email,
            password,
            role: requirement === "donate" ? "donor" : "receiver",
          },
          { withCredentials: true }
        );

        if (user) {
          // save the user to global state here, useReducer
          setupAuthHeaderForNetworkCalls(token);
          localStorage.setItem("isAuthorized", true);
          setCurrentUser(user);
          setUserRole(user?.role);
          toast.success("Registered successfully!");
          navigate("/admin/organ-form");
        } else {
          toast.error("Some error occurred!");
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Some error occurred!");
      }
    }

    setIsEmailValid(true);
    setIsPasswordValid(true);
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign up section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign Up
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Create your account to get started!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign Up with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="johndoe@gmail.com"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!isEmailValid}
          errorMessage="Please enter a valid email"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!isPasswordValid}
          errorMessage="Password must be at least 8 characters"
        />

        {/* Requirement Dropdown */}
        <SelectField
          variant="auth"
          extra="mb-3"
          label="Requirement*"
          id="requirement"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          //   error={requirement === ""}
          //   errorMessage="Please select a requirement"
        >
          <option value="donate">Donate organ</option>
          <option value="need">Need organ</option>
        </SelectField>

        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged in
            </p>
          </div>
        </div>
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Already have an account?
          </span>
          <a
            href="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
