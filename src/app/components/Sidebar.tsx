"use client";
import React from "react";
import Link from "next/link";
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

export default function Sidebar({ router }) {
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
        className={`fixed top-4 left-48 z-50 rounded-full p-2 flex items-center justify-center bg-primaryGreen hover:bg-primaryGreen duration-200 ${
          isCollapsed ? "rotate-180 -translate-x-40 duration-200" : ""
        }`}
      >
        <FaAngleLeft className="text-2xl text-white transition-transform" />
      </button>
      <aside
        className={`top-0 left-0 z-40 h-screen transition-transform ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        } ${isSidebarVisible ? "w-64" : "w-20"}`}
      >
        <div className="h-full px-4 py-5 overflow-y-auto bg-darkGreen">
          <div className="flex items-center w-full mb-10 justify-between">
            <a href="https://paydo.com/" className="flex items-center ps-2.5">
              <h5 className="text-2xl font-semibold text-white">
                Pay<span className="text-primaryGreen">do</span>
              </h5>
            </a>
          </div>
          <ul className="space-y-3 font-medium">
            <li>
              <Link href="/">
                <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <MdOutlineDashboard className="text-2xl" />
                  <span className="ms-3">Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center p-2 dark:text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <MdOutlineSwitchAccount className="text-2xl" />
                  <span className="flex-1 ms-3">Accounts</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <FaRegCreditCard className="text-2xl" />
                  <span className="flex-1 ms-3">Cards</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/Transaction">
                <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <LuArrowUpDown className="text-xl" />
                  <span className="flex-1 ms-3">
                    Transactions
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <RiExchangeDollarFill className="text-2xl" />
                  <span className="flex-1 ms-3">Payment</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/Invoicing">
                <div className="flex items-center p-2 dark:text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <TbFileInvoice className="text-2xl" />
                  <span className="flex-1 ms-3">Invoicing</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                  <TbReportSearch className="text-2xl" />
                  <span className="flex-1 ms-3">Reports</span>
                </div>
              </Link>
            </li>
          </ul>
          <div>
            <div className="absolute bottom-0 w-full mb-10">
              <ul className="space-y-3 font-medium">
                <li>
                  <Link href="#">
                    <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                      <CgProfile className="text-2xl" />
                      <span className="flex-1 ms-3">
                        Profile
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center p-2 text-white hover:bg-primaryGreen duration-200 hover:text-black group">
                      <IoSettingsOutline className="text-2xl" />
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Settings
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}