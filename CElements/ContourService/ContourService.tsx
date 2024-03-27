import Image from 'next/image';
import React from 'react'
import { CiStar, CiDeliveryTruck, CiSearch } from "react-icons/ci";

const ContourService = ({ text, icon }: { icon?: any, text: string }) => {
    return (
       <>
        <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura border border-[#E6EAEE]'>
            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor min-h-[36px] min-w-[36px] max-h-[36px] max-w-[36px] block'><Image width={24} height={500} src={icon} alt="setting_icon_img" /></span>
            </div>
            <div className='space-y-1 md:space-y-2'>
                <p className='text-darkColor text-start text-lg md:text-xl font-bold '>{text}</p>
            </div>
        </div>
       </>
    )
}

export default ContourService