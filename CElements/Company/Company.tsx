import React from 'react'

const Company = ({ text, data }: { text?: string, data?: any }) => {

    return (
        <div className='my-16 md:my-24'>
            <h1 className='text-darkColor text-[32px] text-center md:text-start md:text-[20px] font-russo font-normal leading-[44px] -tracking-[1.6px] mb-12'>{text}</h1>
            <ul className='space-y-5'>
                {data?.map((val: string, idx: number) => <li key={idx} className='text-darkColor text-base md:text-xl font-medium font-jura leading-8'>{val}</li>)}
            </ul>
        </div>
    )
}

export default Company