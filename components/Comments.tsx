"use client"
import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { avatar, person_one_img, person_two_img, person_three_img, person_four_img, person_five_img } from '../public/Assets/Images/index'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import { instance } from '../instance/instance';
import Image from 'next/image';

const Skeleton = () => {
    return <div className='space-y-4 md:space-y-12'>
        <div className='flex items-center text-[#eee]'>
            <MdOutlineStarPurple500 size={20} />
            <MdOutlineStarPurple500 size={20} />
            <MdOutlineStarPurple500 size={20} />
            <MdOutlineStarPurple500 size={20} />
            <MdOutlineStarPurple500 size={20} />
        </div>
        <p className='text-2xl md:text-xl w-full bg-[#eee] rounded-md h-40 text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'></p>
        <div className='flex items-center gap-4 pb-5'>
            <div className='w-10 bg-[#eee] h-10 rounded-full'></div>
            <span className='text-xl text-darkColor font-bold font-jura'></span>
        </div>
    </div>
}

const Comments = () => {
    const { t } = useTranslation('slide_one')
    const swiperRef: any = useRef();
    const [comments, setComments] = useState<undefined | any>();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        const commentsHandler = async () => {
            await instance.get('/reviews').then(data => setComments(data?.data?.data)).finally(() => setLoading(false));
        }
        commentsHandler()
    }, []);


    return (
        <section id='comments' className='my-16 md:my-24 box-border'>
            <div className="container">
                <div className='md:grid  grid-cols-2 items-center  md:gap-16'>
                    {/* People comments  */}
                    <div className='relative '>
                        {loading ? <Skeleton /> : <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper: any) => {
                                swiperRef.current = swiper;
                            }}
                            loop={true}
                        >

                            {comments?.map((data: any, idx: number) => (
                                <SwiperSlide key={idx}>
                                    <div className='space-y-4 md:space-y-12'>
                                        <div className='flex items-center text-[#FEC84B]'>
                                            <MdOutlineStarPurple500 size={20} />
                                            <MdOutlineStarPurple500 size={20} />
                                            <MdOutlineStarPurple500 size={20} />
                                            <MdOutlineStarPurple500 size={20} />
                                            <MdOutlineStarPurple500 size={20} />
                                        </div>
                                        <p className='text-2xl md:text-xl  text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'>{t('comment')}</p>
                                        <div className='flex items-center gap-4 pb-5'>
                                            <img src={data.user_image} alt="" />
                                            <span className='text-xl text-darkColor font-bold font-jura'>{t('user')}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* <SwiperSlide>
                                <div className='space-y-4 md:space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-2xl md:text-xl  text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'>{t('comment')}</p>
                                    <div className='flex items-center gap-4 pb-5'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>{t('user')}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='space-y-4 md:space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-2xl md:text-xl  text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'>{t('comment')}</p>
                                    <div className='flex items-center gap-4 pb-5'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>{t('user')}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='space-y-4 md:space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-2xl md:text-xl  text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'>{t('comment')}</p>
                                    <div className='flex items-center gap-4 pb-5'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>{t('user')}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='space-y-4 md:space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-2xl md:text-xl  text-darkColor font-jura font-normal leading-8 md:leading-6 -tracking-[0.4px]'>{t('comment')}</p>
                                    <div className='flex items-center gap-4 pb-5'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>{t('user')}</span>
                                    </div>
                                </div>
                            </SwiperSlide> */}




                        </Swiper>}
                        <div className='absolute hidden lg:bottom-0 right-0 z-50 md:flex items-center gap-8'>
                            <div onClick={() => swiperRef.current.slidePrev()} className='border bg-white  border-[#EAECF0] rounded-full text-[#667085] p-4 cursor-pointer hover:bg-[#eee] transition-all duration-500'>
                                <FaArrowLeft size={24} />
                            </div>
                            <div onClick={() => swiperRef.current.slideNext()} className='border  bg-white border-[#EAECF0] rounded-full text-[#667085] p-4 cursor-pointer hover:bg-[#eee] transition-all duration-500'>
                                <FaArrowRight size={24} />
                            </div>
                        </div>
                    </div>

                    {/* People images */}
                    <div className='grid grid-cols-6 mt-10 md:mt-0 lg:h-[496px] gap-1 md:gap-4'>
                        <div className=' col-start-2 col-end-4 row-start-2 row-end-3'>
                            <Image width={500} height={500} src={person_one_img} alt="person_one_img" className='w-full h-full' />
                        </div>
                        <div className=' col-start-4 col-end-6 row-start-1 row-end-3'>
                            <Image width={500} height={500} src={person_two_img} alt="person_two_img" className='w-full h-full' />
                        </div>
                        <div className=' col-start-1 col-end-3 row-start-3 row-end-4'>
                            <Image width={500} height={500} src={person_three_img} alt="person_three_img" className='w-full h-full' />
                        </div>
                        <div className=' col-start-3 col-end-5 row-start-3 row-end-5'>
                            <Image width={500} height={500} src={person_four_img} alt="person_three_img" className='w-full h-full' />
                        </div>
                        <div className='col-start-5 col-end-7 row-start-3 row-end-4'>
                            <Image width={500} height={500} src={person_five_img} alt="person_five_img" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments