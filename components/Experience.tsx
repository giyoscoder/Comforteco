"use client"
import React from 'react'
import { experience_img } from '../public/Assets/Images/index';
import { useTranslation } from 'react-i18next'
import Image from 'next/image';

const Experience = () => {
    const { t } = useTranslation('experience')
    return (
        <section id='about' className='py-24 bg-[#F9FAFB] '>
            <div className="container">
                <div className='md:flex items-center justify-between lg:gap-16'>
                    <div className='basis-1/2 md:px-8'>
                        <p className='text-sm md:text-base text-mainColor font-jura font-medium '>{t('pre_title')}</p>
                        <h2 className='text-[28px] md:text-5xl text-darkColor font-russo font-normal leading-[38px] md:leading-[57.6px] -tracking-[0.96px] max-w-[395px] mt-3'>{t('title')}</h2>
                        <p className='text-lg md:text-base text-lightColor font-jura font-normal leading-7 mt-4 md:mt-5'>{t('about')}</p>
                        <p className='text-black text-lg md:text-xl font-jura font-bold mt-5'>{t('phone')}</p>
                    </div>
                    <div className="basis-1/2 mt-12 md:mt-0">
                        <Image width={500} height={500} src={experience_img} alt="experience_img" className='mx-auto' />
                    </div>
                </div>

                <div className='mt-16'>
                    <h2 className='text-[28px] md:text-4xl text-center text-darkColor font-russo font-normal leading-[38px] md:leading-[57.6px] -tracking-[0.96px]  mt-3'>{t('info_title')}</h2>
                    <p className='text-lg md:text-base text-lightColor font-jura font-normal leading-7 mt-4 md:mt-5'>{t('info_text')}</p>
                </div>
            </div>
        </section>
    )
}

export default Experience