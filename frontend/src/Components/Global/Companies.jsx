import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const datafromjson = require('../../Companies-data.json');

const Companies = () => {
    const { id } = useParams();
    const [companyData, setCompanyData] = useState();
    console.log(companyData, 'all data here')
    useEffect(() => {
        if (datafromjson && id) {
            var response = datafromjson.find(obj => obj.id == id);
            setCompanyData(response)
        }
    }, [id]);
    return (
        <div className='w-50% m-auto mt-4'>
            {companyData ? <div className='flex '>
                <div className='w-2/6'>
                    <img className='h-full w-full hover:transform hover:scale-105' src={companyData.image} />
                </div>
                <div  className='w-4/6'>
                    <div  className='flex'>
                        <p className=' w-2/6 text-3xl ml-8 text-gray-100'> {companyData.name}</p>
                        <p className='w-2/6 text-3xl ml-10 text-gray-100'> {companyData.price}<i className="ml-2 fa-brands fa-ethereum"></i></p>
                    </div>
                    <div className='mt-6 flex'>
                        <p className='ml-8 text-gray-200'>Last sale {companyData.last_sale}</p>
                        <p className='ml-5 text-gray-200'>Top bid {companyData.top_bid} </p>
                        <p className='ml-5 text-gray-200'>1D Change {companyData.oned_change} </p>
                        <p className='ml-5 text-gray-200 '>7D Change {companyData.sevend_change}</p>
                        <p className='ml-5 text-gray-200'>1D Volume {companyData.oned_volume} </p>
                        <p className='ml-5 text-gray-200'>7D Volume {companyData.sevend_volume}</p>
                        <p className='ml-5 text-gray-200 -mt-1'>Owners {companyData.owners} </p>
                        <p className='ml-5 text-gray-200 -mt-1'>Supply {companyData.supply}</p>
                    </div>
                </div>
            </div> : <div>No data found</div>}
        </div>
    )
}

export default Companies