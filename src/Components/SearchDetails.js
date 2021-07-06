import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchDetails = () => {
  const [response, setResponse] = useState(null);
  const movieId=useSelector(state=>state.detailsEl)
  useEffect( () => {

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bb1501228cd5d5feaa44be33a27e126a&page`
    )
      .then((res) => res.json())
      .then(data=>setResponse(data));
    console.log("response", response);
  }, [movieId]);

  return (
    <div className="w-full h-full border">
      {!response && (
        <>
          <div className="h-full w-full flex justify-center items-center">
            <p>Loading...</p>
          </div>
        </>
      )}

      {response && (
        <>
          <div className="h-full w-full p-10 flex flex-col justify-center items-center space-y-4">
            <p className="text-2xl underline">{`${response.original_title} (${response.release_date})`}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${response.poster_path}?api_key=bb1501228cd5d5feaa44be33a27e126a`}
              className="h-72 rounded-3xl overflow-hidden shadow-2xl"
              alt=""
            />
            <p className="text-gray-500">{response.vote_average}</p>
            <p className="text-gray-500">{response.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchDetails;
