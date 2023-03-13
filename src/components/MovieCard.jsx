import React from "react";

const MovieCard = (data) => {
  const { id, title, img, description, date, vote_average } = data;
  let color = "green";
  return (
    <div
      className="card relative w-full md:w-60 h-[410px] md:h-[360px] my-3 mx-4 md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden"
      style={{ opacity: 1, transform: "none", transformOrigin: "50% 50% 0px" }}
    >
      <div className="absolute bottom-0 w-full flex justify-between items-end p-3 z-20">
        <h1 className="text-white text-xl font-semibold break-normal break-words">
          {title}
        </h1>
        <h1
          className="font-bold p-2 bg-zinc-900 rounded-full"
          style={{ color: `${color}` }}
        >
          {vote_average}
        </h1>
      </div>
      <a className="h-full w-full shadow absolute z-10" href="/">
        <img src={img} alt={`img_${id}`} className="object-cover h-full" />
      </a>
    </div>
  );
};

export default MovieCard;
