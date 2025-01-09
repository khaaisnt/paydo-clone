import React from "react";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import InvoiceCard from "../components/InvoiceCard";
import { FiArrowUpRight } from "react-icons/fi";
import UpDownIcon from "../components/UpDownIcon";

const Dashboard = () => {
  return (
    <section className="flex w-full">
      <Sidebar />
      <div className="relative container mx-4 md:mx-10 my-5">
        <div className="flex items-center mb-10 md:mb-20 justify-between">
          <h1 className="text-2xl md:text-4xl">Dashboard</h1>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <input
              className="w-full hidden md:block focus:outline-primaryGreen py-2 px-3 border-2 border-primaryGray"
              placeholder="Type to search"
              type="text"
            ></input>
            <div className="p-3 border-2 border-primaryGray">
              <FaRegBell className="text-base" />
            </div>
            <div>
              <button className="bg-darkGreen w-[180px] hidden md:flex items-center justify-between gap-2 text-white px-5 py-2">
                <GoPlus className="text-xl" />
                Create account
              </button>
            </div>
          </div>
        </div>
        {/* dasbor ini */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center mb-10 md:mb-20">
          <div className="flex justify-between gap-4 w-full">
            <div>
              <h1 className="text-3xl md:text-5xl font-medium">$220,320.60</h1>
              <p className="text-gray-400 mt-2 font-medium">
                Total balance from all accounts
              </p>
            </div>
            <div>
              <button className="bg-darkGreen block md:hidden items-center justify-between gap-2 text-white px-5 py-2">
                <GoPlus className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex gap-4"></div>
        </div>
        {/* graph dan kawan kawan */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
          <div className="w-full md:w-1/2">
            {/* section kiri */}
            <div className="flex flex-col md:flex-row w-full mb-5 gap-5 justify-between">
              <InvoiceCard
                title2={"Total invoice"}
                title={"$8,189.00"}
                subtitle={"Send 223"}
                percent={"+58%"}
                textColor={"text-primaryGreen"}
              />
              <InvoiceCard
                title2={"Paid invoice"}
                title={"$4,802.00"}
                subtitle={"From 148"}
                percent={"+22%"}
                textColor={"text-red-500"}
              />
            </div>
            <div className="p-5 border-2 border-primaryGray">
              <h4 className="text-xl">Your Assets</h4>
              {/* graph */}
              <div></div>
            </div>
          </div>
          {/* section kanan */}
          <div className="w-full md:w-1/2 p-5 border-2 border-primaryGray">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="text-xl font-medium">Latest transactions</h3>
              <FiArrowUpRight className="text-xl" />
            </div>
            <span className="mb-4 text-gray-500">Today</span>
            <div className="w-full">
              <table className="w-full">
                <tbody>
                  <tr className="border-b-[1.5px]">
                    <td className="flex py-3 gap-4">
                      <div className="text-white">
                        <UpDownIcon
                          bgColor="bg-darkGreen"
                          textColor="darkGreen"
                        />
                      </div>
                      <div className="text-black">
                        <h5 className="font-medium text-base">
                          Buy Online At Walmart.com
                        </h5>
                        <p className="text-gray-500 font-medium">
                          2357 4356 321 1242
                        </p>
                      </div>
                    </td>
                    <td className="font-medium">$8.480,00</td>
                  </tr>
                  <tr className="border-b-[1.5px]">
                    <td className="flex py-3 gap-4">
                      <div className="text-white">
                        <UpDownIcon
                          bgColor="bg-primaryGreen"
                          textColor="darkGreen"
                        />
                      </div>
                      <div className="text-black">
                        <h5 className="font-medium text-base">
                          Buy Online At Walmart.com
                        </h5>
                        <p className="text-gray-500 font-medium">
                          2357 4356 321 1242
                        </p>
                      </div>
                    </td>
                    <td className="font-medium">$8.480,00</td>
                  </tr>
                  <tr className="border-b-[1.5px]">
                    <td className="flex py-3 gap-4">
                      <div className="text-black">
                        <UpDownIcon
                          bgColor="bg-primaryGray"
                          textColor="darkGreen"
                        />
                      </div>
                      <div className="text-black">
                        <h5 className="font-medium text-base">
                          Buy Online At Walmart.com
                        </h5>
                        <p className="text-gray-500 font-medium">
                          2357 4356 321 1242
                        </p>
                      </div>
                    </td>
                    <td className="font-medium">$8.480,00</td>
                  </tr>
                  <tr className="border-b-[1.5px]">
                    <td className="flex py-3 gap-4">
                      <div className="text-white">
                        <UpDownIcon
                          bgColor="bg-darkGreen"
                          textColor="darkGreen"
                        />
                      </div>
                      <div className="text-black">
                        <h5 className="font-medium text-base">
                          Buy Online At Walmart.com
                        </h5>
                        <p className="text-gray-500 font-medium">
                          2357 4356 321 1242
                        </p>
                      </div>
                    </td>
                    <td className="font-medium">$8.480,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
