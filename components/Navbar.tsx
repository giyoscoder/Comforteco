"use client"

import React, { useEffect, useState } from 'react';
import { Link as Scrollink } from 'react-scroll';
import NextLink from 'next/link';
import { FaPhoneAlt, FaBars, FaTelegram, FaInstagram } from "react-icons/fa";
// import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from '../public/Assets/Images/logo.jpg'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [navbar, setNavbar] = useState(false);
    const [lang, setLang] = useState('Ru');
    const [navDrop, setNavDrop] = useState(false)
    const [locationPath, setLocationPath] = useState(false);
    const [brands, setBrands] = useState(false)

    const { t, i18n } = useTranslation('navbar');

    const langugeHandler = (e: string) => {
        setLang(e)
        setNavDrop(false)
        i18n.changeLanguage(e)
    }

    const navbarHadler = () => {
        setNavbar(prev => !prev)
    }

    useEffect(() => {
        if (pathname != '/') {
            setLocationPath(false)
            setNavbar(false)
        }
        else {
            setLocationPath(true)
        }
    }, [pathname])

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setBrands(false)
        })
        return document.removeEventListener('scroll', () => { })
    }, [])

    return (
        <nav className='fixed top-0 left-0 w-full bg-white z-[100]'>
            <div className="container">
                {/* desktop */}
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center gap-6 lg:gap-10'>
                        <Scrollink onClick={() => router.push('/')} activeClass="active"
                            to='showcase' spy={true} smooth={true} offset={-150}
                            className='text-mainColor cursor-pointer font-sans  font-bold text-base max-w-[147px]'>
                            <Image src={logo} width={500} height={500} alt="" />
                        </Scrollink>
                        <ul className='hidden md:flex items-center  cursor-pointer gap-5 lg:gap-[32px] text-base font-medium font-jura'>
                            {locationPath && <li><Scrollink to='services' spy={true} smooth={true} offset={-150}>{t('reviews')}</Scrollink></li>}
                            {locationPath && <div className='relative z-10'>
                                <div onClick={() => setBrands(prev => !prev)} className='flex items-center gap-1'><span>Котлы</span><IoIosArrowDown className={`${brands && 'rotate-180 '} transitio duration-100 text-lightColor mt-1`} /></div>
                                <div className={`w-[200px] text-base transition-all duration-300 flex flex-col text-lightColor font-semibold bg-white shadow-md absolute rounded-2xl ${brands ? 'opacity-1 top-full' : 'opacity-0 top-9 hidden'} `}>
                                    <NextLink href='/airfel' className={`p-[10px] rounded-t-2xl transition-all duration-300 hover:bg-mainColor hover:text-white`}>Airfel</NextLink>
                                    <NextLink href='/akfa' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Akfa</NextLink>
                                    <NextLink href='/atlantic' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Atlantic</NextLink>
                                    <NextLink href='baymak' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Baymak</NextLink>
                                    <NextLink href='/baxi' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Baxi</NextLink>
                                    <NextLink href='/ferroli' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Ferroli</NextLink>
                                    <NextLink href='/fondital' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Fondital</NextLink>
                                    <NextLink href='/rulls' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Rulls</NextLink>
                                    <NextLink href='/kiturami' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Kiturami</NextLink>
                                    {/* <Link to='' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Rulls</Link> */}
                                    <NextLink href='/unit' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Unit</NextLink>
                                    <NextLink href='/viessmann' className={`p-[10px] rounded-b-2xl transition-all duration-300 hover:bg-mainColor hover:text-white`}>Viessmann</NextLink>
                                </div>
                            </div>}
                            <li><Scrollink to='about' spy={true} smooth={true} offset={-100}>{t('companies')}</Scrollink></li>
                            {locationPath && <li><Scrollink to='comments' spy={true} smooth={true} offset={-150}>{t('help')}</Scrollink></li>}
                            <li><Scrollink to='contact' spy={true} smooth={true} offset={-100}>{t('contact')}</Scrollink></li>

                        </ul>
                        {brands && <div onClick={() => setBrands(false)} className='bg-transparent h-full w-full fixed top-0 left-0' />}
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-4 text-mainColor'>
                            <a href="https://t.me/servis_kotlov_tashkent" target='_black'>
                                <FaTelegram size={24} />
                            </a>
                            <a href="https://www.instagram.com/serveskotlov.uz/" target='_black'>
                                <FaInstagram size={24} />
                            </a>
                        </div>
                        {locationPath && <div className='relative'>
                            <p onClick={() => setNavDrop(prev => !prev)} className='text-darkColor cursor-pointer text-base font-jura font-medium flex items-center gap-2 p-3 bg-[#F9FAFB] rounded-lg'><span className='capitalize'>{t('lan')}</span> <IoIosArrowDown className={`${navDrop && 'rotate-180 transition-all duration-300'}`} /></p>

                            <ul className={`absolute -right-2 transition-all duration-300 ${navDrop ? 'opacity-1 top-full' : 'opacity-0 top-9'} cursor-pointer min-w-[150px] mt-1 text-base text-darkColor bg-white p-[10px] space-y-[20px] font-hura font-bold  rounded-lg`}>
                                <li onClick={() => langugeHandler('uz')}>O’zbek tili</li>
                                <li onClick={() => langugeHandler('de')}>Узбек тили</li>
                                <li onClick={() => langugeHandler('ru')}>Русский язык</li>
                            </ul>

                        </div>}
                        <a href='tel:+998917715656' className='hidden bg-mainColor py-3 px-5 rounded-lg text-white lg:flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998917715656</span></a>
                        <div onClick={navbarHadler} className='md:hidden text-darkColor cursor-pointer'>
                            <FaBars size='24' />
                        </div>
                    </div>
                </div>

                {/* mobile  */}
                <div className='md:hidden '>
                    <div className={`pt-10 h-screen w-2/3 bg-white absolute top-0 z-[80]  ${navbar ? 'left-0' : '-left-full'}  transition-all duration-300 space-y-5`}>
                        <NextLink href={'#'} className='text-mainColor text-center block  font-sans font-bold text-base max-w-[147px] mx-auto'>
                            <Image src={logo} alt="" width={500} height={500} />
                        </NextLink>
                        <ul className='flex flex-col items-center gap-5 text-base font-medium font-jura'>
                            {locationPath && <li ><Scrollink onClick={() => navbarHadler()} to='services' spy={true} smooth={true} offset={-150}>{t('reviews')}</Scrollink></li>}
                            <li ><Scrollink onClick={() => navbarHadler()} to='about' spy={true} smooth={true} offset={-100}>{t('companies')}</Scrollink></li>
                            {/* <li><Link onClick={() => navbarHadler()} to='#' spy={true} smooth={true} offset={-150}>{t('baymak')}</Link></li> */}
                            {locationPath && <div >
                                <div onClick={() => setBrands(prev => !prev)} className='flex items-center text-center justify-center gap-1'><span>Котлы</span><IoIosArrowDown className={`${brands && 'rotate-180 '} transitio duration-100 text-lightColor mt-1`} /></div>

                                <div className={`w-[200px] text-base divide-y-[1px] text-center transition-all duration-300 flex flex-col text-lightColor font-semibold bg-white shadow-sm rounded-2xl ${!brands && ' duration-500 hidden'}`}>
                                    <NextLink href='/airfel' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Airfel</NextLink>
                                    <NextLink href='/akfa' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Akfa</NextLink>
                                    <NextLink href='/atlantic' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Atlantic</NextLink>
                                    <NextLink href='baymak' className={`p-[10px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Baymak</NextLink>
                                    <NextLink href='/baxi' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Baxi</NextLink>
                                    <NextLink href='/ferroli' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Ferroli</NextLink>
                                    <NextLink href='/fondital' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Fondital</NextLink>
                                    <NextLink href='/rulls' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Rulls</NextLink>
                                    <NextLink href='/kiturami' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Kiturami</NextLink>
                                    <NextLink href='/unit' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Unit</NextLink>
                                    <NextLink href='/viessmann' className={`p-[5px] transition-all duration-300 hover:bg-mainColor hover:text-white`}>Viessmann</NextLink>
                                </div>
                            </div>}
                            {locationPath && <li><Scrollink onClick={() => navbarHadler()} to='comments' spy={true} smooth={true} offset={-150}>{t('help')}</Scrollink></li>}
                            <li><Scrollink onClick={() => navbarHadler()} to='contact' spy={true} smooth={true} offset={-100}>{t('contact')} </Scrollink></li>
                        </ul>

                        <NextLink href="tel:+998998917715656" className='block'>
                            <button className='bg-mainColor py-3 px-5 rounded-lg mx-auto  text-white flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998917715656</span></button>
                        </NextLink>

                        {/* language */}
                        {/* <div className='relative'>
                            <p onClick={() => setNavDrop(prev => !prev)} className='text-darkColor cursor-pointer text-base font-jura font-medium flex items-center justify-center gap-2 p-3 bg-[#F9FAFB] rounded-lg'><span>{lang}</span> <IoIosArrowDown className={`${navDrop && 'rotate-180 transition-all duration-300'}`} /></p>

                            <ul className={`absolute transition-all left-1/2 -translate-x-1/2 duration-300 ${navDrop ? 'opacity-1 top-full ' : 'opacity-0 top-9'} cursor-pointer min-w-[150px] mt-1 text-base text-darkColor bg-white p-[10px] space-y-[20px] font-jura font-bold  rounded-lg`}>
                                <li onClick={() => langugeHandler('Uz')}>O’zbek tili</li>
                                <li onClick={() => langugeHandler('Уз')}>Узбек тили</li>
                                <li onClick={() => langugeHandler('Ru')}>Русский язык</li>
                            </ul>

                        </div> */}

                    </div>
                    <div onClick={navbarHadler} className={`bg-black/50 h-screen w-full absolute  top-0 ${navbar ? 'right-0' : 'right-full'} `} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar