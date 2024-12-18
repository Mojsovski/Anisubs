import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/images/images";
import icon from "../assets/icons/icons";

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen relative ">
        <div className=" flex flex-col bg-[#1E1E1E] ">
          {/* carousel */}
          <div className="h-[550px] relative ">
            <img
              className="h-full w-full object-cover z-0 shadow-inner  "
              src={image.carousel}
            />
            <div className="px-24 py-9 size-full absolute top-0 left-0 flex items-end">
              <div className="w-1/3  ">
                <h3 className="text-white text-2xl">#1 Top Anime</h3>
                <h1 className="text-white text-7xl">Dan Da Dan</h1>
                <div className="flex gap-4 items-center ">
                  <icon.TbStarFilled className="text-white text-2xl" />
                  <p className="text-2xl text-white">8.95</p>
                  <div className="h-6 w-32 rounded-2xl bg-[#5CC164]">
                    <p className="text-center text-white">Ongoing</p>
                  </div>
                </div>
              </div>
              <div className="w-full  bg-white"></div>
            </div>
          </div>
          {/* card anime */}
          <div className="m-12 bg-[#363636] ">
            <div className="m-5 grid grid-cols-3 justify-between gap-7">
              <div className=" h-[200px] bg-slate-600">
                <img
                  className="h-full w-full object-cover z-0 shadow-inner  "
                  src={image.carousel}
                />
              </div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
              <div className=" h-[200px] bg-slate-600"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
