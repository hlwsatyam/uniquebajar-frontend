// Header.js
import logo from "../../assets/AuthIMG/Unique Bazar.png";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaListUl, FaBorderAll, FaHeart, FaQuestion } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FcSupport } from "react-icons/fc";
import { SiAboutdotme } from "react-icons/si";

import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import HeaderBelowList from "../Home/HeaderBelowList/HeaderBelowList";
import Search from "./Search/Search";
import { useSelector } from "react-redux";
import { searchHistory } from "../../components/Fetchings/LocalHost";
const Header = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useParams();
  const NoOfItem = useSelector((s) => s.cartValue).length;
  const loginStatus = useSelector((s) => s.loginStatus);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchableText, setSearchableText] = useState("");
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [headerMobList, setHeaderMobLile] = useState([
    {
      header: "",
      childList: [
        {
          label: `Home`,
          icon: <IoHome className="text-green-500" />,
          url: "",
        },
        {
          label: "Shop By Category",
          icon: <FaListUl className="text-green-500" />,
          url: "categories",
        },
      ],
    },
    {
      header: "my account",
      childList: [
        {
          label: "my orders",
          icon: <FaBorderAll className="text-green-500" />,
          url: "customer/profile",
        },
        {
          label: "whishlist",
          icon: <FaHeart className="text-green-500" />,
          url: "/customer/whishlist",
        },
      ],
    },

    {
      header: "Help & Support",
      childList: [
        {
          label: "support",
          icon: <FcSupport className="text-green-500" />,
          url: "/helpcentre",
        },
        {
          label: "about us",
          icon: <SiAboutdotme className="text-green-500" />,
          url: "/about-us",
        },
        {
          label: "contact us",
          icon: <BiSupport className="text-green-500" />,
          url: "/contact",
        },
        {
          label: "faq",
          url: "/faq",
          icon: <FaQuestion className="text-green-500" />,
        },
      ],
    },
  ]);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const SearchingStart = (e) => {
    setSearchableText(e.target.value.toLowerCase());
  };
  const EnterExist = (e) => {
    if (e.key === "Escape") {
      inputRef.current.blur();
      setIsSearchFocus(!isSearchFocus);
    }
    if (e.key === "Enter") {
      inputRef.current.blur();
      searchHistory(searchableText);
      navigate(`/search/${searchableText}`);
    }
  };
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const SearchBoxHandler = (e) => {
    setIsSearchFocus(!isSearchFocus);
  };

  return (
    <header className="bg-gradient-to-r px-3 sticky  w-full top-0 z-10  from-green-900 to-blue-500 text-white py-3">
      <div className="container  mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="Logo"
              className="sm:w-[70px] rounded-full cursor-pointer w-[43px] h-43px] sm:h-[70px] mr-2"
            />
          </Link>{" "}
        </div>

        <div className="flex   items-center  lg:mt-0">
          <div className="relative mr-4 ">
            <input
              ref={inputRef}
              onFocus={SearchBoxHandler}
              onBlur={() =>
                setTimeout(() => {
                  SearchBoxHandler();
                }, 400)
              }
              type="text"
              onKeyDown={(e) => EnterExist(e)}
              onChange={SearchingStart}
              value={searchableText}
              placeholder="Search..."
              className="py-2 px-3 w-[37vw] sm:w-[60vw] rounded-full bg-white text-gray-800 focus:outline-none focus:shadow-outline"
            />
            <span className="absolute right-3 top-3">
              <FaSearch
                className="cursor-pointer "
                onClick={() => EnterExist({ key: "Enter" })}
                color="black"
              />
            </span>
            {isSearchFocus ? (
              <Search setSearchFn={setSearchableText} Search={searchableText} />
            ) : (
              ""
            )}
          </div>

          <Link to="/checkout/cart">
            <button className="flex items-center relative text-white hover:text-gray-300">
              <FaShoppingCart className="mr-1" />
              <span className="hidden sm:block"> Add to Cart</span>
              <span className="absolute top-[-16px] right-[-15px] bg-green-400 w-[20px] h-[20px] rounded-full flex items-center justify-center text-sm">
                {" "}
                {NoOfItem}{" "}
              </span>
            </button>
          </Link>
          {loginStatus.isLogged ? (
            <Link to="/customer/profile">
              <a className="hover:text-gray-300 ml-4 flex items-center gap-x-1">
                <FaUser className="mr-1" />
                <span className="hidden sm:block">Profile</span>
              </a>
            </Link>
          ) : (
            <Link to="/account/login">
              <a
                href="#"
                className="hover:text-gray-300 ml-4 flex items-center gap-x-1"
              >
                <FaUser className="mr-1" />
                <span className="hidden sm:block"> Login</span>
              </a>
            </Link>
          )}

          {/* Responsive Navigation Toggle Button */}
          <button className=" ml-5 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Responsive Navigation Menu */}

        {isMenuOpen && (
          <div
            ref={divRef}
            className="absolute thin-scroller z-10 left-0 top-0 h-screen overflow-y-scroll py-3 shadow-[100px]  px-4 text-black bg-white w-[250px] "
          >
            <div className="flex justify-around items-center bg-green-700 py-4 text-white">
              Hello! {}{" "}
              {loginStatus.isLogged ? (
                <Link onClick={toggleMenu} to="/customer/profile">
                  <a
                    href="#"
                    className="hover:text-gray-300 ml-4 flex items-center gap-x-1"
                  >
                    <FaUser className="mr-1" />
                    <span className="hidden sm:block">Profile</span>
                  </a>
                </Link>
              ) : (
                <Link onClick={toggleMenu} to="/account/login">
                  <a
                    href="#"
                    className="hover:text-gray-300 ml-4 flex items-center gap-x-1"
                  >
                    <FaUser className="mr-1" />
                    <span className="hidden sm:block"> Login</span>
                  </a>
                </Link>
              )}
            </div>
            {headerMobList.map((item) => (
              <div className=" ">
                <p className="text-sm font-bold my-3 "> {item.header} </p>
                {item.childList.map((item) => (
                  <Link
                    onClick={toggleMenu}
                    to={item.url}
                    className="flex border-b-2 py-2 my-3 text-xl items-center  gap-x-3"
                  >
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              onClick={() => setMenuOpen(false)}
              to={"/seller"}
              className="w-full block text-center bg-green-500 text-white py-2 font-bold rounded-xl"
            >
              Become A Seller
            </Link>
          </div>
        )}
      </div>
      {/* <HeaderBelowList /> */}
    </header>
  );
};

export default Header;
