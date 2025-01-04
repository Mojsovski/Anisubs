import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image from "../assets/images/images";
import icon from "../assets/icons/icons";
import Card from "../components/Card";

import useStore from "../data/useStore";

function Home() {
  const { fetchHome, recentAnime, batchAnime, movieAnime } = useStore();

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-[#1E1E1E] ">
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
          <div className="my-3 md:my-7 lg:my-12 flex flex-col gap-4">
            {" "}
            {/* ongoing anime */}
            <div className="mx-3 md:mx-7 lg:mx-12 p-5 bg-[#363636] flex-col flex gap-5 rounded ">
              <h2 className="text-3xl text-white"># Anime Terbaru</h2>
              {/* card */}
              <div className="flex flex-wrap justify-center gap-7 ">
                {recentAnime.map((item, index) => (
                  <Link to={"/"}>
                    <Card
                      key={index}
                      image={item.poster}
                      title={item.title}
                      episode={item.episodes}
                      released={item.releasedOn}
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* batch anime */}
            <div className="mx-3 md:mx-7 lg:mx-12 p-5 bg-[#363636] flex-col flex gap-5 rounded ">
              <h2 className="text-3xl text-white"># Batch Anime</h2>
              {/* card */}
              <div className="flex flex-wrap justify-center gap-7 ">
                {batchAnime.map((item, index) => (
                  <Card
                    key={index}
                    image={item.poster}
                    title={item.title}
                    episode={item.episodes}
                    released={item.releasedOn}
                  />
                ))}
              </div>
            </div>
            {/* movie anime */}
            <div className="mx-3 md:mx-7 lg:mx-12 p-5 bg-[#363636] flex-col flex gap-5 rounded ">
              <h2 className="text-3xl text-white"># Movie Anime</h2>
              {/* card */}
              <div className="flex flex-wrap justify-center gap-7 ">
                {movieAnime.map((item, index) => (
                  <Card
                    key={index}
                    image={item.poster}
                    title={item.title}
                    released={item.releaseDate}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
