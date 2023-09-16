/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import appLogo from "../../assets/svg/logo_organ_connect.png";

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div
        className={`mx-[40px] mt-[20px] mb-[30px] flex cursor-pointer items-center`}
      >
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[24px] font-bold uppercase text-navy-700 dark:text-white">
          <img
            src={appLogo}
            alt="Logo"
            className="m-0 mx-auto mb-[10px] h-16 w-32"
          />
          Organ Connect
        </div>
      </div>
      <div class="mt-[58px] mb-7 bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
