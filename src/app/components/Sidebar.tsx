"use client";
import React from "react";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiExchangeDollarFill } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaAngleLeft } from "react-icons/fa";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <section>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-48 z-50 rounded-full p-2 flex items-center justify-center bg-primaryGreen hover:bg-primaryGreen duration-200 ${isCollapsed ? 'rotate-180 -translate-x-40 duration-200' : ''}`}
      >
        <FaAngleLeft className="text-2xl text-white transition-transform" />
      </button>
      <aside className={`top-0 left-0 z-40 h-screen transition-transform ${isCollapsed ? '-translate-x-full' : 'translate-x-0'} ${isSidebarVisible ? 'w-64' : 'w-20'}`}>
        <div className="h-full px-4 py-5 overflow-y-auto bg-darkGreen">
          <div className="flex items-center w-full mb-10 justify-between">
            <a
              href="https://paydo.com/"
              className="flex items-center ps-2.5"
            >
              <h5 className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Pay<span className="text-primaryGreen">do</span>
              </h5>
            </a>
          </div>
          <ul className="space-y-3 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <MdOutlineDashboard className="text-2xl" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 dark:text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <MdOutlineSwitchAccount className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Accounts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <FaRegCreditCard className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Cards</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <LuArrowUpDown className="text-xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Transactions
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <RiExchangeDollarFill className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 dark:text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <TbFileInvoice className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Invoicing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
              >
                <TbReportSearch className="text-2xl" />
                <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
              </a>
            </li>
          </ul>
          <div className="mt-40">
            <ul className="space-y-3 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
                >
                  <CgProfile className="text-2xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group"
                >
                  <IoSettingsOutline className="text-2xl" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
}
