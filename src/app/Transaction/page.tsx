"use client";
import React, { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa6";
import UpDownIcon from "../components/UpDownIcon";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Transaction() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex">
      <Sidebar />
      <div className="relative container mx-4 md:mx-10 my-5">
        {/* top section */}
        <div className="flex items-center mb-10 md:mb-20 justify-between">
          <h1 className="text-2xl md:text-4xl">{loading ? <Skeleton width={200} /> : "Transaction"}</h1>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <input
              className="w-full md:w-[250px] hidden md:block focus:outline-primaryGreen py-2 px-3 border-2 border-primaryGray"
              placeholder="Type to search"
              type="text"
            ></input>
            <div className="p-3 border-2 border-primaryGray">
              <FaRegBell className="text-base" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-10 md:mb-20">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium">{loading ? <Skeleton width={150} /> : "$43,637.00"}</h1>
            <p className="text-gray-400 mt-2 font-medium">{loading ? <Skeleton width={100} /> : "Available balance"}</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 p-5 border-2 border-primaryGray">
              <UpDownIcon bgColor="bg-primaryGreen" textColor="darkGreen" />
              <div>
                <p className="text-gray-400 text-sm">{loading ? <Skeleton width={100} /> : "Total balance"}</p>
                <h1 className="text-xl md:text-2xl">{loading ? <Skeleton width={100} /> : "$7.4987.00"}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 p-5 border-2 border-primaryGray">
              <UpDownIcon bgColor="bg-primaryGray" textColor="black" />
              <div>
                <p className="text-gray-400 text-sm">{loading ? <Skeleton width={100} /> : "Total deposit"}</p>
                <h1 className="text-xl md:text-2xl">{loading ? <Skeleton width={100} /> : "$7.4987.00"}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 p-5 border-2 text-white border-primaryGray">
              <UpDownIcon bgColor="bg-blackGreen" textColor="white" />
              <div className="text-black">
                <p className="text-gray-400 text-sm">{loading ? <Skeleton width={100} /> : "Total withdraw"}</p>
                <h1 className="text-xl md:text-2xl">{loading ? <Skeleton width={100} /> : "$7.4987.00"}</h1>
              </div>
            </div>
          </div>
        </div>
        {loading ? <Skeleton count={5} height={40} /> : <Table />}
      </div>
    </section>
  );
}
