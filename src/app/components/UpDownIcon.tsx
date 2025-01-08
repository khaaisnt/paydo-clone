import React from 'react'
import { LuArrowUpDown } from 'react-icons/lu'

const UpDownIcon = ({ bgColor, textColor, handler = () => {} }) => {
  return <div
  className={`${bgColor} duration-300 p-3 rounded-full`}
  >
    <LuArrowUpDown className={`text-xl ${textColor}`} />
  </div>;
};

export default UpDownIcon
