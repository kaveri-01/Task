import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { state,logout } = useContext(AuthContext);
  console.log(state, " state here in home");
  const [search, setSearch] = useState("");
  console.log(search, "search here");
  const router = useNavigate();
  const updateName = (event) => {
    setSearch(event.target.value);
  };
  const submitSearch = () => {
    router(`/search/${search}`);
    setSearch("")
  };

  return (
    <div className="w-full flex h-12 items-center space-x-36  ">
      <div className="w-1/5 flex  ml-4">
        <div
          className=" font-bold text-orange-500 font-serif cursor-pointer "
          onClick={() => router("/")}
        >
          Blur
        </div>
        <div
          className=" font-bold text-xs mt-1.5 text-gray-400 ml-5 hover:text-white cursor-pointer"
          onClick={() => router("/portfolio")}
        >
          PORTFOLIO
        </div>
        <div
          className=" font-bold text-xs mt-1.5 text-gray-400 ml-5 hover:text-white cursor-pointer"
          onClick={() => router("/explore")}
        >
          EXPLORE
        </div>
      </div>
      <div className="w-3/6 flex justify-center font-bold text-sm w-30% ">
        <div className="border-2 border-gray-800 rounded-md flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="w-72 h-7 ml-6 border-2 border-white rounded-md border-none outline-none "
            type="text"
            value={search}
            onChange={updateName}
            placeholder="Please search Name, click enter"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                submitSearch();
                setSearch("")
              }
            }}
          />
        </div>
        <button
          className="w-20 ml-5 h-8 border-2 border-gray-800 rounded-md cursor-pointer "
          onClick={submitSearch}
        >
          enter
        </button>
      </div>
      {!state.user ? (
        <div className="w-1/6 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          {/* <div
            className=" font-bold text-xs mt-1.5 text-gray-400 ml-5 hover:text-white"
            onClick={() => router("/register")}
          >
            Register
          </div> */}
          <div
            className=" font-bold text-xs mt-1.5 text-gray-400 ml-5 hover:text-white cursor-pointer"
            onClick={() => router("/login")}
          >
            Login
          </div>
        </div>
      ) : (
        <div>
          <div>{state.user.email}</div>
          <button className="cursor-pointer" onClick={()=> logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
