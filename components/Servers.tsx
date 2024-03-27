"use client"
import React from 'react'
import { extra_icon_img, heating_icon_img, setting_icon_img, pipes_icon_img, water_pressure_img, plumber_icon_img, } from '../public/Assets/Images/index';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Servers = () => {
    const { t } = useTranslation('contourService');
    return (
        <section className='container'>
            <h2 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>{t('comforteco_one_title')}</h2>
            <div className='grid md:grid-cols-2 grid-flow-row-dense gap-6 md:gap-8 mt-12 md:mt-16'>

                <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={setting_icon_img} alt="setting_icon_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_one')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_one_price')}</p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={pipes_icon_img} alt="pipes_icon_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_two')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_two_price')}</p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={heating_icon_img} alt="heating_icon_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_three')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_three_price')}</p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={water_pressure_img} alt="water_pressure_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg  md:text-xl font-bold '>{t('comforteco_four')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_four_price')}</p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={plumber_icon_img} alt="plumber_icon_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_five')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_five_price')}</p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-16 p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                    <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                        <Image width={24} height={500} src={extra_icon_img} alt="extra_icon_img" />
                    </div>
                    <div className='space-y-1 md:space-y-2'>
                        <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_six')}</p>
                        <p className='text-lightColor text-base font-normal'>{t('comforteco_six_price')}</p>
                    </div>
                </div>
            </div>

            <div className='my-[96px]'>
                <h2 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>{t('comforteco_seven_title')}</h2>
                <div className='grid md:grid-cols-2 grid-flow-row-dense gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={setting_icon_img} alt="setting_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_seven')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_seven_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={pipes_icon_img} alt="pipes_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_eight')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_eight_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={heating_icon_img} alt="heating_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_nine')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_nine_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={water_pressure_img} alt="water_pressure_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg  md:text-xl font-bold '>{t('comforteco_ten')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_ten_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={plumber_icon_img} alt="plumber_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_eleven')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_eleven_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={extra_icon_img} alt="extra_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco_twelve')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco_twelve_price')}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='my-[96px]'>
                <h2 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>{t('comforteco__one_title')}</h2>
                <div className='grid md:grid-cols-2 grid-flow-row-dense gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={setting_icon_img} alt="setting_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco__one')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__one_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={pipes_icon_img} alt="pipes_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco__two')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__two_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={heating_icon_img} alt="heating_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco__three')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__three_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={water_pressure_img} alt="water_pressure_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg  md:text-xl font-bold '>{t('comforteco__four')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__four_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={plumber_icon_img} alt="plumber_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco__five')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__five_price')}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <Image width={24} height={500} src={extra_icon_img} alt="extra_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>{t('comforteco__six')}</p>
                            <p className='text-lightColor text-base font-normal'>{t('comforteco__six_price')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servers