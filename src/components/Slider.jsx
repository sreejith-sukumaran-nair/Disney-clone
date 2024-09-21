import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    GlobalApi.getTrendingVideos.then((res) => setMovieList(res.data.results));
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += screenWidth-110;  // Scroll screenWidthpx to the right
  };
  const sliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth-110;  // Scroll screenWidthpx to the left
  };

  return (
    <div className="w-screen">
      <HiOutlineChevronLeft onClick={sliderLeft}  className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"/>
      <HiOutlineChevronRight onClick={sliderRight} className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" />
      <div ref={elementRef} className=" flex w-screen overflow-x-auto scrollbar-none scroll-smooth px-16 py-4 gap-8">
        {movieList.map((movie, index) => (
          <img
            className="shadow-lg shadow-black hover:border-[2px] border-gray-400 transition-all duration-100 ease-in min-w-full md:h-[310px] object-cover object-left-top rounded-md"
            src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
