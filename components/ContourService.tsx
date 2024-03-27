"use client"
import React from 'react'
import { extra_icon_img, heating_icon_img, setting_icon_img, pipes_icon_img, water_pressure_img, plumber_icon_img, } from '../public/Assets/Images/index';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const ContourService = () => {
    const { t } = useTranslation('contourService');

    return (
        <section className='my-16 md:my-24'>
            <div className="container">
                <h2 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>{t('title')}</h2>
                <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[30px] mt-4 md:mt-5'>{t('about')}</p>
                
                <div className='grid md:grid-cols-2 grid-flow-row-dense gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={setting_icon_img} alt="setting_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('card_one')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_one_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={pipes_icon_img} alt="pipes_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('card_two')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_two_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={heating_icon_img} alt="heating_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('card_three')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_three_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={water_pressure_img} alt="water_pressure_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg  md:text-xl font-bold '>{t('card_four')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_four_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={plumber_icon_img} alt="plumber_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('card_five')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_five_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={extra_icon_img} alt="extra_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('card_six')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('card_six_price')}</p>
                        </div>
                    </div>
                </div>

                <p className='text-lg md:text-xl text-center md:text-start text-lightColor font-jura font-normal leading-[30px] mt-12 md:mt-8'>{t('info')}</p>

                <div className='mt-10 md:mt-20'>
                    <h2 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>{t('rule_one')}</h2>
                    <h2 className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[30px] mt-3 md:mt-4'>{t('rule_one_about')}</h2>
                    <h3 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px] mt-10 md:mt-20'>{t('rule_two')}</h3>
                    <h3 className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[30px] mt-4 md:mt-5'>{t('rule_two_about')}</h3>
                    <h3 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px] mt-10 md:mt-20'>{t('rule_three')}</h3>
                    <h3 className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[30px] mt-4 md:mt-5'>{t('rule_three_about')}</h3>
                </div>
            </div>
        </section>
    )
}

export default ContourService