import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Fiter from "./Fiter/Fiter";
import TopProductList from "../Home/TopProduct/TopProductList";
import axios from "axios";
import SearchingPageItems from "./SearchingPageItems/SearchingPageItems";
import { BaseApiUrl } from "../../components/Fetchings/OnlineData";
import LoadingFullPage from "../../components/Reusable/LoadingFullPage";
function Items() {
  const location = useLocation();
  const { category, searchableText } = useParams();
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    sortOrder: "",
    page: 1,
  });

  const changePage = (opr) => {
    if (opr === "dec") {
      // If current page is greater than 1, decrement it
      if (filter.page > 1) {
        setFilter((prev) => ({
          ...prev,
          page: prev.page - 1,
        }));
      }
    } else if (opr === "inc") {
      setFilter((prev) => ({
        ...prev,
        page: filter.page + 1,
      }));
    }
  };
  useEffect(() => {
    fetchItems();
  }, [searchableText, filter]);
  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `${BaseApiUrl}/api/productBySearch/searchlist/q?query=${searchableText}&category=${category}&page=${filter.page}&pageSize=50&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&sortBy=discount_price&sortOrder=${filter.sortOrder}`
      );
      if (!response || !response.data || !Array.isArray(response.data)) {
        throw new Error("Invalid response format");
      }
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  return (
    <div className="sm:gap-x-3 gap-x-0 my-4 flex">
      <Fiter fi-lter={filter} setFilter={setFilter} />
      <div className=" w-[88%]">
        {items ? <SearchingPageItems Items={items} /> : <LoadingFullPage />}
        <div className="mt-4">
          <button
            onClick={() => changePage("dec")}
            className="mx-4 bg-green-900 text-white rounded-full px-6 py-3 font-bold"
          >
            Prev
          </button>
          <button
            onClick={() => changePage("inc")}
            className="mx-4 bg-green-900 text-white rounded-full px-6 py-3 font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
