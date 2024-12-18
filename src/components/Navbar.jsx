import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icons/icons";

function Navbar() {
  return (
    <>
      <nav className="fixed inset-x-0 h-[90px] px-24 z-40 bg-black bg-opacity-40 flex flex-row justify-between items-center ">
        {/* desktop */}
        <div className="flex justify-start items-center w-1/2 gap-9  ">
          <h2 className="text-white text-5xl text-center font-[Inspiration]">
            Arisubs
          </h2>
          <div className="w-72 h-8 bg-white rounded-lg flex px-3 items-center">
            <icon.TbSearch className="text-xl" />
            <input
              type="text"
              id="search"
              name="search"
              className=" text-base pl-4 p-3 text-justify w-full h-full rounded-lg focus:outline-none "
              placeholder="Search"
            />
          </div>
        </div>
        <ul className="flex justify-end w-1/2 gap-7">
          <li>
            <Link
              className="text-xl text-white hover:text-red-400 flex items-center gap-2"
              to="/"
            >
              <icon.TbBook2 className="text-3xl" />
              Jadwal Rilis
            </Link>
          </li>
          <li>
            <Link
              className="text-xl text-white hover:text-red-400 flex items-center gap-2 "
              to="/about"
            >
              <icon.TbBook2 className="text-3xl" />
              Ongoing
            </Link>
          </li>
          <li>
            <Link
              className="text-xl text-white hover:text-red-400 flex items-center gap-2"
              to="/project"
            >
              <icon.TbBook2 className="text-3xl" />
              Daftar Anime
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
