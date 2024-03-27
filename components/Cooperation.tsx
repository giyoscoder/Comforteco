"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { instance } from '../instance/instance';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';


const Cooperation = () => {
    const [cooperateImg, setCooperateImg] = useState([])
    const { t } = useTranslation('cooperation');

    useEffect(() => {
        instance.get('/partners').then(data => setCooperateImg(data?.data?.data))
    }, [])


    return (
        <section className='bg-[#F9FAFB] py-16 md:py-[42px] mt-16 md:mt-24'>
            <div className="container">
                <p className='text-center text-lightColor text-lg md:text-base font-jura font-normal leading-6 '>{t('title')}</p>
                {/* <div className='flex flex-wrap gap-8  lg:flex-nowrap items-center justify-evenly lg:justify-between mt-8'>
                    {cooperateImg.map(img => <div key={img}><img src={img} alt='ariston_img' /></div>)} 
                </div> */}
                <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={60}
                    breakpoints={{
                        320: {
                            slidesPerView:3,
                            spaceBetween: 30
                        },
                        768:{
                            slidesPerView: 5,
                            spaceBetween: 60
                        }
                    }}
                    autoplay={{
                        delay: 300,
                        disableOnInteraction: true,
                        waitForTransition:true
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper cooperation_slider"
                >
                    {cooperateImg.map(a => <SwiperSlide key={a}><img src={a} alt="" /></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default Cooperation