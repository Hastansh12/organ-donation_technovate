import Card from "components/card";
import React, { useState } from "react";
import DatePicker from "react-datepicker"; // You may need to install this package

import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker

export default function AppointmentBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [selectedHospital, setSelectedHospital] = useState(""); // Hospital selection

  // Define a list of example hospitals
  const hospitals = [
    "Nanavati Hospital",
    "Cooper Hospital",
    "Kokilaben Hospital",
    "Fortis Hospital",
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions with the form data here
    console.log("Form Data:", { name, email, selectedDate, selectedHospital });
  };

  return (
    <Card extra="!p-[20px]">
      <div className="mt-2 flex justify-center">
        <div className="flex flex-grow">
          {/* Left Column */}
          <div className="w-1/2 p-4">
            <h2 className="mb-4 text-2xl font-bold">Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-800"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-800"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="date"
                  className="block font-medium text-gray-800"
                >
                  Date:
                </label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full rounded-md border p-2"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                  minDate={new Date()} // Set to prevent past dates
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="hospital"
                  className="block font-medium text-gray-800"
                >
                  Select a Hospital:
                </label>
                <select
                  id="hospital"
                  name="hospital"
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                  className="w-full rounded-md border p-2"
                  required
                >
                  <option value="" disabled>
                    Select a hospital
                  </option>
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital}>
                      {hospital}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 py-2 px-4 font-medium text-white hover:bg-blue-600"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="flex w-1/2 items-center justify-center p-4">
            <div className="h-full w-full rounded-lg bg-gray-200">
              {/* Include a map component or embed a map here */}
              {/* Example: */}
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2708843425094!2d72.83765327613058!3d19.095768751349826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ba9c34c261%3A0xae93b34cc52f8055!2sNanavati%20Max%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1694916845792!5m2!1sen!2sin"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
