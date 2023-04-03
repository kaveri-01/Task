import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const datafromjson = require("../Companies-data.json");

const Explore = () => {
  const [data, setData] = useState();
  const router = useNavigate()
  console.log(data, "data from json file");
  const [showData, setShowData] = useState(false);
  const [dataOne, setDataOne] = useState("");
  const [dataTwo, setDataTwo] = useState("");
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setData(datafromjson);
  }, [datafromjson]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataOne(getRandomDataForProfit());
      setDataTwo(getRandomDataForLoss());
    }, 900);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i + 1,
        name: getRandomName(),
        value: getRandomValue(),
      });
    }
    setTableData(data);
  }, []);

  const handleHover = (id) => {
    const data = tableData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          valueOne: getRandomDataForProfit(),
          valueTwo: getRandomDataForLoss(),
        };
      } else {
        return row;
      }
    });
    setTableData(data);
    setShowData(id);
  };

  const handleLeave = () => {
    setShowData(false);
  };

  const getRandomName = () => {
    const names = ["John", "Jane", "Mike", "Alice", "Bob"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const getRandomValue = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const getRandomDataForProfit = () => {
    const data = ["12.23", "23.24", "34.34", "43.345", "46.76"];
    return data[Math.floor(Math.random() * data.length)];
  };

  const getRandomDataForLoss = () => {
    const data = ["1.23", "2.24", "3.34", "4.345", "5.76"];
    return data[Math.floor(Math.random() * data.length)];
  };

  return (
    <div className="w-full  border-t-2 border-gray-800 ">
      <div className="w-50% flex ml-4 h-14  border-b-2 border-gray-800 text-xs tracking-wider">
        <div className="w-1/12 mt-6 flex"><i className="fa-solid fa-boxes-stacked"></i><p className="text-yellow-600 ml-2">COLLECTIONS</p></div>
        <div className="w-1/12 mt-6 flex ml-4"><i className="fa-solid fa-arrow-trend-up"></i><p className="ml-2">TRENDING</p></div>
        <div className="w-1/12 mt-6 flex"><i className="fa-regular fa-star"></i><p className="ml-2">FAVOURITES</p></div>
      </div>
      <div className=" w-full mr-2  ">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-xs font-thin  border-b-2 border-gray-800  ">
              <th className="w-3/12 py-2">
                <p className=" text-gray-300  ml-5">NAME</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">FLOOR PRICE</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300 ml-3">TOP BID</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">1D CHANGE</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">7D CHANGE</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">15M VOLUME</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">1D VOLUME</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">7D VOLUME</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">OWNERS</p>
              </th>
              <th className="w-1/12 py-2">
                <p className="text-gray-300">SUPPLY</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr
                  key={item.id}
                  className="text-xs tracking-widest cursor-pointer"
                  onMouseEnter={() => handleHover(item.id)}
                  onMouseLeave={handleLeave}
                  onClick={() => router(`/explore/${item.id}`)}
                >
                  <td className=" px-4 py-1">
                    <div className="flex items-center  ">
                      <div className="w-full md:w-1/6 h-9 rounded-full overflow-hidden mr-2 hover:transform hover:scale-105">
                        <img
                          src={item.image }
                          alt={item.name}
                          className="w-9 h-9 rounded-full "
                        />
                      </div>
                      <span className="w-full md:w-3/6 -ml-3 ">{item.name}</span>
                      <div className="w-full md:w-2/6 flex">
                        <div className="ml-auto">
                          {showData === item.id && (
                            <td className="bg-white p-0">
                              <p>Net Profit: {item.net_profit}</p>
                              <p>Net Loss: {item.net_loss}</p>
                            </td>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" px-4 py-0 ">{item.floor_price}<i className="ml-1 fa-brands fa-ethereum fa-lg"></i></td>
                  <td className=" px-4 py-0">{item.top_bid}<i className="ml-1 fa-brands fa-ethereum fa-lg"></i></td>
                  <td className=" px-4 py-0">{item.oned_change}</td>
                  <td className=" px-4 py-0">{item.sevend_change}</td>
                  <td className=" px-4 py-0">{item.fiftteenm_change}<i className="ml-1 fa-brands fa-ethereum fa-lg"></i></td>
                  <td className=" px-4 py-0">{item.oned_volume}<i className="ml-1 fa-brands fa-ethereum fa-lg"></i></td>
                  <td className=" px-4 py-0">{item.sevend_volume}<i className="ml-1 fa-brands fa-ethereum fa-lg"></i></td>
                  <td className=" px-4 py-0">{item.owners}</td>
                  <td className=" px-4 py-0">{item.supply}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Explore;
