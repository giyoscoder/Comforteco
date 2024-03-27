import React from 'react'
import { brand_showcase } from '../../public/Assets/Images';
import Image from 'next/image';


const Showcase = ({ img, title, about }: { img?: any, title: string, about: string }) => {

  return (
    <div className='md:flex items-center justify-between pt-16 md:pt-24'>
      <div>
        <h1 className={`font-russo  mx-auto text-center md:text-start text-[30px] md:text-6xl text-darkColor font-normal leading-[44px] md:leading-[72px] mt-8  -tracking-[1.2px] md:max-w-[${title.length == 18 ? 447 : 503}px]`}>{title}</h1>
        <p className='text-lightColor text-center md:text-start text-base md:text-2xl font-jura font-semibold leading-[28.8px] mt-4 md:mt-6'>{about}</p>
      </div>
      <div className='py-10'>
        <Image src={img ? img : brand_showcase} alt="img" priority  />
      </div>
    </div>
  )
}

export default Showcase