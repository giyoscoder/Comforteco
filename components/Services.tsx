"use client"
import React from 'react'
import { repair_icon_img, prevention_icon_img, service_icon_img } from '../public/Assets/Images';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Services = ({ data }: { data: any }) => {
    const { t } = useTranslation('services')
    return (
        <section id='services' className='my-16 md:my-24'>
            <div className="container">
                <h2 className='font-russo text-[28px] md:text-5xl font-normal  -tracking-[0.96px]'>{t('title')}</h2>
                <div className='grid md:grid-cols-3  gap-6 md:gap-8 mt-12 md:mt-16'>
                    {data.map((data: any) => (
                        <div key={data.id} className='bg-[#F9FAFB] rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                            <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                                <Image width={24} height={48} src={data.icon} alt='repair_icon_img' />
                            </div>
                            <div className='font-jura'>
                                <p className=' text-darkColor text-lg md:text-2xl font-bold'>{t(data.title)}</p>
                                <p className='text-lightColor text-base font-normal leading-6'>{t(data?.about)}</p>
                            </div>
                        </div>))
                    }

                    {/* <div className='bg-[#F9FAFB] rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <Image width={24} height={48} src={prevention_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-lg md:text-2xl font-bold'>{t('prevention')}</p>
                            <p className='text-lightColor text-base font-normal leading-6 mx-auto'>{t('prevention_text')}</p>
                        </div>
                    </div>

                    <div className='bg-[#F9FAFB]  rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <Image width={24} height={48} src={service_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-lg md:text-2xl font-bold'>{t('boiler')}</p>
                            <p className='text-lightColor text-base font-normal leading-6'>{t('boiler_text')}</p>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Services