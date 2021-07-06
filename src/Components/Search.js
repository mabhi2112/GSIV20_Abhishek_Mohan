import React, { useState } from "react";
import HomeIcon from "mdi-react/HomeIcon";
import SearchIcon from "mdi-react/SearchIcon";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadingIcon from "mdi-react/LoadingIcon";

const Search = () => {
  const [search, setSearch] = useState();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      var Interval = setTimeout(() => {
        setLoader(true)
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=bb1501228cd5d5feaa44be33a27e126a&language=en-US&page=1&include_adult=false&query=${search}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            dispatch({ type: "updateList", data: data.results });
          }).finally(()=>{
            setLoader(false)
          });
      }, 1000);
    }

    return () => {
      clearTimeout(Interval);
    };
  }, [search]);
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form className="fixed w-full bg-white shadow h-14 flex justify-between space-x-2 items-center">
        <div className="relative w-full">
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Search"
            className="border appearance-none focus:ring-2 outline-none pl-10 w-10/12 bg-gray-200 rounded-lg shadow"
          ></input>
          <div className="absolute top-1 left-4">
            {loader ? <LoadingIcon className="animate-spin" size={20} /> : <SearchIcon size={20} />}
          </div>
        </div>
        <HomeIcon className="block" />
      </form>
      <div className="h-14"></div>
    </>
  );
};

export default Search;
