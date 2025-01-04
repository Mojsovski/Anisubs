import React from "react";

const Card = ({ image, title, episode, released }) => {
  return (
    <div className="flex flex-wrap justify-center gap-7 ">
      <div className="h-[200px] w-full sm:w-[277px] md:w-[300px] lg:w-[340px] 2xl:w-[418px]  bg-slate-600 relative transition-transform hover:scale-110 duration-200">
        <img className="size-full object-cover" src={image} alt={title} />

        <div className="px-6 py-3 size-full absolute top-0 right-0 flex flex-col justify-end -space-y-1 shadow-inner [box-shadow:inset_0_-50px_50px_rgba(0,0,0,1)]">
          <h2 className="text-white text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h2>
          {episode && (
            <h3 className="text-white text-sm font-light">
              Episode : {episode}
            </h3>
          )}
          <h3 className="text-white text-sm font-light">
            Release : {released}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
