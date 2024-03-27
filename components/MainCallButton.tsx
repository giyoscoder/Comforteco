"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";

const MainCallButton = () => {
    const { t } = useTranslation('superiority');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

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
        <div>
            <div className='relative'>
                {!isButtonVisible && <a href='tel:+998917715656' className='block  fixed bottom-5 z-[60] left-1/2 -translate-x-[50%]'>
                    <button className='bg-mainColor animate-bounce w-full py-4 px-6 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-xs sm:text-base'>{t('button')}</span></button>
                </a>}
            </div>
        </div>
    )
}

export default MainCallButton