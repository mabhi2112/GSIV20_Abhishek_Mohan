import React from "react";
import { useDispatch } from "react-redux";
const Card = ({ movie: { vote_average, title, poster_path, overview,id } }) => {
  const dispatch=useDispatch()
  const clickHandler=()=>{
    dispatch({type:'displayDetails',data:id})
  }
  
  return (
    <div onClick={clickHandler} className="cursor-pointer border h-80 w-60 overflow-hidden shadow rounded-lg m-6 flex flex-col space-y-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=bb1501228cd5d5feaa44be33a27e126a`}
        className="h-64 w-full"
        alt="Image"
      />

      <div className="flex px-2 justify-between">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gray-500">({vote_average})</p>
      </div>
      <div className="px-2">
        <p className="text-xs text-gray-500">
          {overview.length > 40 ? overview.substring(0, 37) + "..." : overview}
        </p>
      </div>
    </div>
  );
};

export default Card;
