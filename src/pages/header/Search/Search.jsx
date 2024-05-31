import React, { useEffect } from "react";
import {
  SearchedItems,
  exploredItem,
  getSearchedItems,
  searchHistory,
} from "../../../components/Fetchings/LocalHost";
import { OnlineSearchList } from "../../../components/Fetchings/OnlineData";
import { IoMdSearch } from "react-icons/io";
import { json, useNavigate } from "react-router-dom";
const Search = ({ setSearchFn, Search }) => {
  return (
    <div className="absolute top-[45px] border w-[300px] sm:w-full rounded-[12px] text-black p-3 bg-white min-h-[300px] left-[-90px] sm:left-0 z-10  ">
      {Search === "" ? (
        <BlankSearch setSearchFn={setSearchFn} />
      ) : (
        <SearchList setSearchFn={setSearchFn} searchableText={Search} />
      )}
    </div>
  );
};

export default Search;

const BlankSearch = ({ setSearchFn }) => {
  const navigate = useNavigate();
  const clearSearch = () => {
    localStorage.removeItem("searchHistory");
  };
  const navigateFromSearched = (tag) => {
    navigate(`search/${tag}`);
    searchHistory(tag);
    setSearchFn(tag);
  };
  return (
    <div>
      <p className="font-bold">
        {" "}
        Your Searches
        <button
          onClick={clearSearch}
          className="float-right bg-green-200 text-slate-700 py-2 px-3 rounded-full"
        >
          Clear All
        </button>{" "}
      </p>
      <p className="flex items-center flex-wrap mt-3 gap-4">
        {getSearchedItems().map((item) => (
          <span
            onClick={() => navigateFromSearched(item)}
            className="py-2 capitalize px-4 font-semibold cursor-pointer shadow rounded-full  text-black border "
          >
            {item}
          </span>
        ))}
      </p>

      <p className="font-bold mt-4 "> Explore More</p>
      <p className="flex items-center flex-wrap mt-3 gap-4">
        {exploredItem.map((item) => (
          <span
            onClick={() => navigateFromSearched(item)}
            className="py-2 capitalize px-4 font-semibold cursor-pointer shadow rounded-full  text-black border "
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
};
const SearchList = ({ setSearchFn, searchableText }) => {
  const navigate = useNavigate();
  const searchClicked = (tag) => {
    setSearchFn(tag);
    searchHistory(tag);
    navigate(`/search/${tag}`);
  };

  return (
    <div>
      {OnlineSearchList.filter((item) =>
        item.toLowerCase().includes(searchableText.toLowerCase())
      )
        .slice(0, 10)
        .map((item, index) => (
          <p
            onClick={() => searchClicked(item.toLowerCase())}
            className="flex shadow-orange-50 my-2 cursor-pointer gap-x-3 items-center"
            key={index}
          >
            {" "}
            <IoMdSearch className="text-2xl" /> {item.toLowerCase()}
          </p>
        ))}
    </div>
  );
};
