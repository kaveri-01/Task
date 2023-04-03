import React from "react";

const Portfolio = () => {
  return (
    <div className="border-t  h-full w-full mt-5 flex border-gray-800 ">
      <div className="w-thirty h-4/5 border-r border-gray-800 ">
        <div className="flex justify-evenly h-19">
          <div className="w-1/6">
            <img
              className="h-7 w-7 mb-4 mt-5 ml-5 rounded-full outline-none"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAM9JREFUWEdjvCJq+p8BCXTdW4HMZVBr+Y3Cv1XDisJH5xBSX6YUgaKFcdQBgy4ENiQtxhvn6HGMngbQ0wi6+oB5sfjTwKgD6B4CLeU3UMoB9DhEz7fo5QR6GiCkHj1NMI46YMBDIO7zXZQ0QGqcUqqecdQBAx4C6JURepwSyvd4GwcMDAzo5QK6eoz2wKgDBjwECMU5oTglVT/BNiGhgobUECO5UTr8HYBeEBGqzwnle0Ihhp5GMOqCUQcMeAgQaseTms8JNXIx0sCoA+gdAgBM7TdkKHs+LgAAAABJRU5ErkJggg=="
            ></img>
          </div>
          <div className="w-4/6 h-full" style={{ border: "1px solid black" }}>
            <p className="text-xl tracking-widest mt-5 mb-4 w-full text-gray-300">
              0x805Eff2F...7AC01d5D4d
            </p>
          </div>
          <div className="w-1/6 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-5 mb-4 mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
              />
            </svg>
          </div>
        </div>
        <div className="flex border-t border-gray-800 text-sm ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-2 mb-2 ml-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="mt-2 mb-2 ml-3 text-gray-300">STATUS</p>
        </div>
        <div className=" border-b border-gray-800 text-sm">
          <p className="mb-2 ml-16 text-gray-300">ONLY LISTED</p>
          <p className="ml-16 mb-5 text-gray-300">SHOW ALL</p>
        </div>
        <div className="flex text-sm mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-5 mt-3 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <p className="ml-3 mt-3 font-medium text-sm mb-4 text-gray-300 ">COLLECTIONS</p>
        </div>
        <div className="border-2 border-gray-700 rounded-md flex m-auto mb-5 w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2 mt-1 mb-1 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="ml-5"
            type="text"
            placeholder="Search your collection"
          ></input>
        </div>
        <hr className="mb-4 w-96 m-auto ml border-gray-800 " />
        <div className="flex">
          <p className=" ml-5 text-xs text-gray-300">COLLECTIONS</p>
          <p className=" ml-24 text-xs text-gray-300">FLOOR</p>
          <p className=" ml-5 text-xs text-gray-300">VALUE</p>
          <p className=" ml-5 text-xs text-gray-300">LISTED</p>
        </div>
        <hr className="mb-4 w-96 m-auto border-gray-800  " />
        <p className=" ml-5 text-sm w-full text-gray-300">ALL COLLECTION</p>
      </div>
      <div>
        <div>
          <div className="flex mt-5 border-b border-gray-800 h-18 ">
            <h1 className="ml-5 text-xl tracking-widest text-gray-300">
              All Collection <br />
            </h1>
            <p className="ml-72 -mt-2 text-sm  text-right text-gray-300">
              LISTED <br />
              0/0
            </p>
            <p className="ml-9 -mt-2 text-sm text-gray-300 text-right">
              EST VALUE <br />
              0.00 <i className="fa-brands fa-ethereum"></i>
            </p>
            <p className="ml-9 -mt-2 text-sm text-gray-300 text-right">
              COST <br />
              0.00 <i className="fa-brands fa-ethereum"></i>
            </p>
            <p className="ml-7 -mt-2 text-sm text-gray-300 text-right">
              UNREALIZED P&L <br />
              0.00 <i className="fa-brands fa-ethereum"></i>
            </p>
            <p className="ml-4 -mt-2 text-sm text-gray-300 mb-3.5 text-right">
              REALIZED P&L <br />
              0.00 <i className="fa-brands fa-ethereum"></i>
            </p>
          </div>
        </div>

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-5 mt-3 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <p className="mt-3 ml-2 text-sm text-orange-500">INVENTORY</p>
          <p className="mt-3 ml-10 text-sm text-gray-300">ACTIVITY</p>
          <p className="mt-3 ml-10 text-sm text-gray-300">BIDS</p>
        </div>
        <hr className="ml-5 color-gray-500 border-gray-800 " />
        <div className="flex mt-2 mb-2 ml-5">
          <i className="fa-regular fa-square fa-sm mt-2.5"></i>
          <p className="ml-5 text-md text-gray-300">0 TOTAL</p>
          <p className="ml-72 text-sm text-gray-300">RARITY</p>
          <p className="ml-9 text-sm text-gray-300">LIST PRICE</p>
          <p className="ml-9 text-sm text-gray-300">TOP BID</p>
          <p className="ml-9 text-sm text-gray-300">COST</p>
          <p className="ml-9 text-sm text-gray-300">RECEIVED DATE</p>
        </div>
        <hr className="ml-5 color-gray-500 border-gray-800 " />
        <div className="h-3/4 mt-16 border-b border-l border-gray-800 "></div>
        <div className="flex   border-b border-l border-gray-800  h-30 ">
          <button className="bg-orange-500 rounded-sm w-36 ml-5 text-sm h-7 mt-5 tracking-wider">
            LIST 0 ITEMS
          </button>
          <button className="bg-orange-500 rounded-sm w-36 ml-6 text-sm h-7 mt-5 tracking-wider">
            ACCEPT 0 BIDS
          </button>
          <button className="bg-orange-500 rounded-sm w-36 ml-6 text-sm h-7 mt-5 tracking-wider">
            CANCEL 0 ITEMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
