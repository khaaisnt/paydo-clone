import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const InvoiceCard = ({ title2, title, subtitle, percent, textColor, handler = () => {} }) => {
  return (
    <div className='p-5 border-2 w-full border-primaryGray'>
        <div className='flex justify-between items-center'>
            <h5 className='text-lg text-gray-500'>{title2}</h5>
            <FiArrowUpRight className='text-xl' />
        </div>
        <div className='my-3'>
            <h1 className='text-4xl font-medium'>{title}</h1>
        </div>
        <div className='flex font-medium justify-between items-center'>
            <h5>{subtitle}</h5>
            <h5 className={textColor}>{percent}</h5>
        </div>
    </div>
  )
}

export default InvoiceCard
