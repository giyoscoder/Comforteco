"use client"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
const Footer = () => {
    const [locationPath, setLocationPath] = useState(false)
    const location = usePathname();
    const { t } = useTranslation('footer')

    useEffect(() => {
        if (location == '/') setLocationPath(true)
    }, [location]);

    return (
        <footer className='mt-16 md:mt-24 pt-12 pb-8 bg-mainColor'>
            <div className="container">
                <Link to={'#'} className='text-start text-white md:text-center block  font-sans font-bold text-xl md:text-base'>Serveskotlov.uz</Link>
                <ul className='flex flex-wrap items-center justify-evenly md:justify-center gap-3 md:gap-8 text-base text-white font-bold font-jura mt-8 cursor-pointer'>
                    {locationPath && <li><Link to='services' spy={true} smooth={true} offset={-150}>{t('reviews')}</Link></li>}
                    <li><Link to='about' spy={true} smooth={true} offset={-100}>{t('companies')}</Link></li>
                    {/* <li><Link to='#' spy={true} smooth={true} offset={-150}>{t('baymak')}</Link></li> */}
                    {locationPath && <li><Link to='#' spy={true} smooth={true} offset={-150}>{t('help')}</Link></li>}
                    <li><Link to='contact' spy={true} smooth={true} offset={-100}>{t('contact')} </Link></li>
                </ul>
                <div className='flex flex-col-reverse sm:flex-row items-start gap-6 sm:items-center justify-between border-t border-[#B9B9B9] mt-12 pt-8'>
                    <p className='text-base  text-[#D0D5DD] font-normal font-jura leading-6'>© 2024 Serveskotlov.uz. All rights reserved.</p>
                    <div className='flex items-center gap-8  text-white'>
                        <a href="https://t.me/servis_kotlov_tashkent" target='_black'>
                            <FaTelegram size={24} />
                        </a>
                        <a href="tel:+998 95-157-50-50"><FaWhatsapp size={24} /></a>
                        <a href="https://www.instagram.com/serveskotlov.uz/" target='_black'>
                            <FaInstagram size={24} />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer