import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const datafromjson = require("../../Companies-data.json");

const Search = () => {
  const { id } = useParams();
  console.log(id,"id.name")
  const [searchData, setSearchData] = useState();
  console.log(searchData, "all data her IN SEARCH");
  useEffect(() => {
    if (datafromjson && id) {
      const regexp = new RegExp(id.trim(), "i");
      const response = datafromjson.filter((obj) => regexp.test(obj.name)); // for name
      // const response = datafromjson.filter(obj => regexp.test(obj.price));// for price
      // const res2 = datafromjson.filter(x => x.name.toLowerCase().includes(id.toLowerCase()))
      setSearchData(response);
    }
  }, [id]);
  return (
    <div>
    {searchData ? searchData.map((companyData)=> ( <div className='flex '>
      <div className='w-2/6'>
          <img className='h-full w-full hover:transform hover:scale-105' src={companyData.image} />
      </div>
      <div  className='w-4/6'>
          <div  className='flex'>
              <p className=' w-2/6 text-3xl ml-8 text-gray-500'> {companyData.name}</p>
              <p className='w-2/6 text-3xl ml-10 text-gray-500'> {companyData.price}<i className="ml-2 fa-brands fa-ethereum"></i></p>
          </div>
          <div className='mt-6 flex'>
              <p className='ml-8 text-gray-500'>Last sale {companyData.last_sale}</p>
              <p className='ml-5 text-gray-500'>Top bid {companyData.top_bid} </p>
              <p className='ml-5 text-gray-500'>1D Change {companyData.oned_change} </p>
              <p className='ml-5 text-gray-500 '>7D Change {companyData.sevend_change}</p>
              <p className='ml-5 text-gray-500'>1D Volume {companyData.oned_volume} </p>
              <p className='ml-5 text-gray-500'>7D Volume {companyData.sevend_volume}</p>
              <p className='ml-5 text-gray-500'>Owners {companyData.owners} </p>
              <p className='ml-5 text-gray-500'>Supply {companyData.supply}</p>
          </div>
      </div>
    </div> )) : <div>No data found</div>}
    </div>
  );
};

export default Search;
