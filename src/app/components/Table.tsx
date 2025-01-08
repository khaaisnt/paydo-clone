import React from "react";
import UpDownIcon from "./UpDownIcon";

const Table = () => {
  return (
    <table className="w-full border-b-[1.5px] border-primaryGray">
      <thead className="px-10 text-gray-500 font-medium items-center">
        <tr>
        <th>Descriptions</th>
        <th>Ref/Check Numbers</th>
        <th>Type</th>
        <th>Deposit</th>
        <th>Withdraw</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-[1.5px]">
          <td className="flex py-3 gap-4">
            <div className="text-white">
              <UpDownIcon bgColor="bg-darkGreen" textColor="darkGreen" />
            </div>
            <div className="text-black">
              <h5 className="font-medium text-base">
                Buy Online At Walmart.com
              </h5>
              <p className="text-gray-500 font-medium">2357 4356 321 1242</p>
            </div>
          </td>
          <td className="text-gray-500 font-medium">276128</td>
          <td className="text-gray-500 font-medium">Payment</td>
          <td className="font-medium">$8.480,00</td>
          <td className="font-medium">$0.000,00</td>
        </tr>
        <tr className="border-b-[1.5px]">
          <td className="flex py-3 gap-4">
            <div>
              <UpDownIcon bgColor="bg-primaryGray" textColor="darkGreen" />
            </div>
            <div className="text-black">
              <h5 className="font-medium text-base">
                Cash withdrawal by ATM
              </h5>
              <p className="text-gray-500 font-medium">2357 4356 321 1242</p>
            </div>
          </td>
          <td className="text-gray-500 font-medium">276128</td>
          <td className="text-gray-500 font-medium">Payment</td>
          <td className="font-medium">$8.480,00</td>
          <td className="font-medium">$0.000,00</td>
        </tr>
        <tr className="border-b-[1.5px]">
          <td className="flex py-3 gap-4">
            <div>
              <UpDownIcon bgColor="bg-primaryGreen" textColor="darkGreen" />
            </div>
            <div className="text-black">
              <h5 className="font-medium text-base">
                Payment for income project
              </h5>
              <p className="text-gray-500 font-medium">2357 4356 321 1242</p>
            </div>
          </td>
          <td className="text-gray-500 font-medium">276128</td>
          <td className="text-gray-500 font-medium">Payment</td>
          <td className="font-medium">$8.480,00</td>
          <td className="font-medium">$0.000,00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
