import React from "react";
import { FaRegBell } from "react-icons/fa6";
import UpDownIcon from "../components/UpDownIcon";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";

export default function Transaction() {
  return (
    <section className="flex">
      <Sidebar />
      <div className="relative container mx-10 my-5">
        {/* top section */}
        <div className="flex items-center mb-20 justify-between">
          <h1 className="text-4xl">Transaction</h1>
          <div className="flex items-center gap-3">
            <input
              className="w-[250px] focus:outline-primaryGreen py-2 px-3 border-2 border-primaryGray"
              placeholder="Type to search"
              type="text"
            ></input>
            <div className="p-3 border-2 border-primaryGray">
              <FaRegBell className="text-base" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-20">
          <div>
            <h1 className="text-5xl font-medium">$43,637.00</h1>
            <p className="text-gray-400 mt-2 font-medium">Available balance</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-5 border-2 border-primaryGray">
              <UpDownIcon bgColor="bg-primaryGreen" textColor="darkGreen" />
              <div>
                <p className="text-gray-400 text-sm">Total balance</p>
                <h1 className="text-2xl">$7.4987.00</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 p-5 border-2 border-primaryGray">
              <UpDownIcon bgColor="bg-primaryGray" textColor="black" />
              <div>
                <p className="text-gray-400 text-sm">Total deposit</p>
                <h1 className="text-2xl">$7.4987.00</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 p-5 border-2 text-white border-primaryGray">
              <UpDownIcon bgColor="bg-blackGreen" textColor="white" />
              <div className="text-black">
                <p className="text-gray-400 text-sm">Total withdraw</p>
                <h1 className="text-2xl">$7.4987.00</h1>
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </section>
  );
}
