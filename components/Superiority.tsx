"use client"
import React, { useEffect, useState } from 'react'
import { CiStar, CiDeliveryTruck, CiSearch } from "react-icons/ci";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
// import { FaPhoneAlt } from "react-icons/fa";
import { service_img } from '../public/Assets/Images'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
// import MainCallButton from './MainCallButton';

const Superiority = ({img}:{img:any}) => {
    
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const { t } = useTranslation('superiority');

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition + windowHeight + 300 >= documentHeight) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    return (
        <section className='pt-16 md:pt-24'>
            <div className="container">
                <div>
                    <h2 className='font-russo text-darkColor text-[28px] md:text-5xl font-normal leading-[38px] md:leading-[44px] -tracking-[0.96px]'>{t('title')}</h2>
                    <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-7 md:leading-[30px] max-w-[511px] mt-4 md:mt-5'>{t('about')}</p>
                </div>

                <div className='py-16 flex flex-col  md:flex-row md:items-center justify-between'>
                    <div className='space-y-10 md:space-y-12'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiStar size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>{t('quality')}</p>
                                <p className='text-base text-lightColor font-normal leading-6'>{t('quality_text')}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiDeliveryTruck size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>{t('checkout')}</p>
                                <p className='text-base text-lightColor font-normal leading-6'>{t('checkout_text')}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiSearch size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>{t('diagnostics')}</p>
                                <p className='text-base text-lightColor font-normal leading-6'>{t('diagnostics_text')}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><HiOutlineHandThumbUp size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>{t('repair')}</p>
                                <p className='text-base text-lightColor font-normal leading-6'>{t('repair_text')}</p>
                            </div>
                        </div>

                    </div>

                    {/* <div className='md:hidden my-12'>
                        <button className=' bg-mainColor py-3 px-5 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-base'>Вызвать мастера</span></button>
                    </div> */}

                    <div>
                        <Image width={500} height={500} src={img} alt='servise_img' className='mx-auto mt-10' />
                    </div>

                </div>

                {/* <div className='relative'>
                    {!isButtonVisible && <a href='tel:+998 95-157-50-50' className='block  fixed bottom-5 z-[60] left-1/2 -translate-x-[50%]'>
                        <button className='bg-mainColor animate-bounce w-full py-4 px-6 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-xs sm:text-base'>{t('button')}</span></button>
                    </a>}
                </div> */}
                {/* <MainCallButton /> */}
            </div>
        </section>
    )
}

export default Superiority