import React, { useState } from "react";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { setupAuthHeaderForNetworkCalls } from "services/SetupAuthHeaders";
import { toast } from "react-toastify";

export default function SignIn() {
  // Define state variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();
  const { setCurrentUser, setUserRole } = useAuth();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes("@")) {
      setIsEmailValid(false);
      return;
    }

    // Basic password validation (minimum 8 characters)
    if (password.length < 8) {
      setIsPasswordValid(false);
      return;
    }

    if (isEmailValid && isPasswordValid) {
      console.log(email, password);
      try {
        const {
          data: { userData, token },
        } = await axios.post(
          `http://localhost:5000/user/userLogin`,
          {
            email,
            password,
          },
          { withCredentials: true }
        );

        if (userData) {
          // save the user to global state here, useReducer
          setupAuthHeaderForNetworkCalls(token);
          localStorage.setItem("isAuthorized", true);
          setCurrentUser(userData);
          setUserRole(userData?.role);
          toast.success("Logged in successfully!");
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
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center gap-3">
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
          // state={isEmailValid ? "" : "error"}
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
          // state={isPasswordValid ? "" : "error"}
          error={!isPasswordValid}
          errorMessage="Password must be at least 8 characters"
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
