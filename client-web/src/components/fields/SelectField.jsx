import React from "react";

function SelectField({
  variant,
  extra,
  label,
  id,
  children,
  value,
  onChange,
  error,
  errorMessage,
}) {
  return (
    <div className={`mb-4 ${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`mt-2 block h-12 w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-brand-500 focus:outline-none focus:ring-brand-500 sm:text-sm ${
            variant === "auth" &&
            "border-gray-300 bg-lightPrimary text-navy-700 dark:bg-navy-800 dark:text-white"
          }`}
          style={{ appearance: "none" }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className={`h-5 w-5 text-gray-400 ${
              variant === "auth" && "text-navy-500 dark:text-white"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default SelectField;
