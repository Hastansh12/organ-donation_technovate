import axios from "axios";
import CompatibilityCard from "./components/CompatabilityCard";
import { useEffect, useState } from "react";
import data1 from "../../../assets/comp.json";

const CompatibilityContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://calculate-compatibility.onrender.com/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {data1.map((item, index) => (
        <CompatibilityCard key={index} data={item} />
      ))}
    </div>
  );
};

export default CompatibilityContainer;
