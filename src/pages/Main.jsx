import React from "react";
import MovieCard from "../components/MovieCard";

const data = [
  {
    id: 1,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 2,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 3,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 4,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 1,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 2,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 3,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 4,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 1,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 2,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 3,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
  {
    id: 4,
    title: "React",
    img: "https://drscdn.500px.org/photo/31012403/q%3D80_m%3D2000/v2?sig=9f5fb2a1796aa6243534d92cf4f81ff5d2da01e7d63aad4bb69fa513a4b875d8",
    description: "React is a JavaScript library for building user interfaces.",
    vote_average: 7.4,
  },
];
const Main = () => {
  return (
    <main>
      <div className="w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-[10rem] md:h-[12rem]">
        <div className="h-full w-full bg-black/30 flex justify-center items-center">
          <input
            id="searchpanel"
            className="p-3 w-full mx-10 bg-white md:w-[40rem] rounded-xl"
            type="search"
            name="searchpanel"
            placeholder="Search movie"
            value=""
          />
        </div>
      </div>
      <div className="w-full bg-[#10141e] md:p-10 mb-20 md:mb-0">
        <div className="flex flex-wrap justify-center px-2">
          <button className="px-4 py-2 m-2 text-[15px] text-white bg-slate-800 font-semibold rounded-3xl">
            Action
          </button>
        </div>
        <div
          className="w-full md:p-2 p-5 flex flex-wrap relative justify-evenly md:justify-around"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          {data.map((item, index) => (
            <MovieCard {...item} key={index} />
          ))}
        </div>

        <div className="btnpanel flex justify-center items-center">
          <a href="/">
            <button className="py-2 px-7 m-5 bg-white text-black font-semibold rounded-3xl">
              Back
            </button>
          </a>
          <div className="px-4 py-2 bg-slate-700  text-white font-semibold rounded-full">
            1
          </div>
          <a href="/">
            <button className="py-2 px-7 m-5 bg-white text-black font-semibold rounded-3xl">
              Next
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
