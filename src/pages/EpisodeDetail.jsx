import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image from "../assets/images/images";
import icon from "../assets/icons/icons";
import Card from "../components/Card";

import useStore from "../data/useStore";

function EpisodeDetail() {
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

export default EpisodeDetail;
