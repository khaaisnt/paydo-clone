"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import InvoiceCard from "../components/InvoiceCard";

const Invoicing = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  const invoices = [
    {
      id: "Inv 001",
      description: "Invoice for product design",
      amount: "$546,000.00",
      date: "12 April 2023",
      status: "Paid",
      statusClass: "bg-primaryGreen",
    },
    {
      id: "Inv 002",
      description: "Invoice for marketing service",
      amount: "$546,000.00",
      date: "12 April 2023",
      status: "Rejected",
      statusClass: "bg-slate-300",
    },
    {
      id: "Inv 003",
      description: "Invoice for Promo action",
      amount: "$546,000.00",
      date: "12 April 2023",
      status: "Paid",
      statusClass: "bg-primaryGreen",
    },
    {
      id: "Inv 004",
      description: "Invoice for user research",
      amount: "$546,000.00",
      date: "12 April 2023",
      status: "Rejected",
      statusClass: "bg-slate-300",
    },
    {
      id: "Inv 005",
      description: "Invoice for product mockup",
      amount: "$546,000.00",
      date: "12 April 2023",
      status: "Unpaid",
      statusClass: "bg-red-400",
    },
  ];

  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === "all") return true;
    if (filter === "paid" && invoice.status === "Paid") return invoices.filter((item) => item.status === "Paid");
    if (filter === "unpaid" && invoice.status === "Unpaid") return invoices.filter((item) => item.status === "Unpaid");
    if (filter === "rejected" && invoice.status === "Rejected") return invoices.filter((item) => item.status === "Rejected");
    return false;
  });

  return (
    <section className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="relative container mx-4 md:mx-10 my-5">
        <div className="flex items-center mb-10 md:mb-20 justify-between">
          <h1 className="text-2xl md:text-4xl mb-4 md:mb-0">Invoicing</h1>
          <div className="flex items-center gap-3">
            <input
              className="w-full md:w-[250px] hidden md:block focus:outline-primaryGreen py-2 px-3 border-2 border-primaryGray"
              placeholder="Type to search"
              type="text"
            ></input>
            <div className="p-3 border-2 border-primaryGray">
              <FaRegBell className="text-base" />
            </div>
            <div>
              <button className="bg-darkGreen flex items-center justify-between gap-2 text-white px-5 py-2">
                <GoPlus className="text-xl" />
                <span className="hidden md:block">Add new invoice</span> 
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mb-10 md:mb-20">
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
          <InvoiceCard
            title2={"Reject invoice"}
            title={"$1,643.00"}
            subtitle={"43 Customers"}
            percent={"+34%"}
            textColor={"text-primaryGreen"}
          />
          <InvoiceCard
            title2={"Others invoice"}
            title={"$2,53.00"}
            subtitle={"32 Unknown"}
            percent={"+58%"}
            textColor={"text-primaryGreen"}
          />
        </div>
        <div>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => handleFilterChange("all")}
              className="text-slate-600 font-medium p-3 hover:border-b-2 hover:border-green-950 hover:font-bold ml-4"
            >
              All Invoice
            </button>
            <button
              onClick={() => handleFilterChange("paid")}
              className="text-slate-600 font-medium p-3 hover:border-b-2 hover:border-green-950 hover:font-bold ml-4"
            >
              Paid
            </button>
            <button
              onClick={() => handleFilterChange("unpaid")}
              className="text-slate-600 font-medium p-3 hover:border-b-2 hover:border-green-950 hover:font-bold ml-4"
            >
              Unpaid
            </button>
            <button
              onClick={() => handleFilterChange("rejected")}
              className="text-slate-600 font-medium p-3 hover:border-b-2 hover:border-green-950 hover:font-bold ml-4"
            >
              Rejected
            </button>
          </div>
          <table className="w-full table-auto">
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="p-6 border-b border-slate-400">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="font-medium">{invoice.description}</h1>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-slate-400 text-slate-500 font-semibold">
                    {invoice.id}
                  </td>
                  <td className="p-3 border-b border-slate-400">{invoice.amount}</td>
                  <td className="p-3 border-b border-slate-400">{invoice.date}</td>
                  <td className="p-3 border-b border-slate-400">
                    <div className={`${invoice.statusClass} p-3 flex items-center justify-center font-semibold`}>
                      {invoice.status}
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-400">
                    <div className="flex items-center justify-center font-bold cursor-pointer hover:bg-slate-200 p-2">
                      &#8230;
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Invoicing;