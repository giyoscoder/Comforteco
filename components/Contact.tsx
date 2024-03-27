"use client"
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, FaTelegram, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { set, useForm } from 'react-hook-form';
import { instance } from '../instance/instance';
import { toast } from 'react-toastify';
import { watch } from 'fs';
type Inputs = {
  phone: string | any
  data: undefined | any
  setData: undefined | any
}

const Contact = () => {
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitSuccessful, isLoading, isSubmitted, isValid } } = useForm<Inputs>()
  const [data, setData] = useState<any>();
  const [error, setErrors] = useState(false);


  const submitHandler = (e: Inputs) => {
    if (e.phone != '' && e.phone.length >= 12) {
      instance.post('/call', e).then(data => setData(data.data))
      reset()
      toast.success(' Success!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: undefined,
      });
    } else {
      // toast.error('Wrong!', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: undefined,
      // });
      setErrors(true)
    }
  }

  useEffect(() => {
    setErrors(false)
  }, [watch('phone')])


  const { t } = useTranslation('contact')

  return (
    <section id='contact'>
      <div className="container">
        <div className="bg-[#F9FAFB] rounded-2xl py-10 px-6 md:py-16 text-center">
          <p className='text-[28px] text-5xl text-darkColor font-russo font-normal leading-[44px] -tracking-[0.96px]'>{t('title')}</p>
          <p className='text-lg md:text-xl text-lightColor font-jura font-normal leading-[28px] md:leading-[30px] mt-5 max-w-[768px] mx-auto'>{t('about')}</p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col md:flex-row items-start justify-center gap-4 mt-8'>
              <div className='md:max-w-[360px] w-full'> <input type='text' className={`${error && 'border border-red-500 bg-red-50'}`} placeholder={t('input_placeholder')} {...register('phone', {
              })} />
                {error && <p className='text-red-500 text-start text-sm'>Raqamingizni to'g'ri kiriting !</p>}
              </div>
              <button type='submit' className='bg-mainColor w-full md:max-w-[173px] font-jura text-white text-base font-medium py-3 px-5 rounded-lg'>{t('button_text')}</button>
            </div>
          </form>
          <p className='text-base text-lightColor font-jura font-normal leading-5  mt-4 mx-auto max-w-[535px]'>{t('description')}</p>

          {/* Social media */}
          <div className='mt-8 flex flex-wrap justify-start sm:justify-evenly gap-5 text-start item-start md:justify-between'>


            <div className='md:space-y-5  gap-4 flex  items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <a href='tel:+998917715656' target='_blank' className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaPhoneAlt size={'24'} /></a>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>{t('phone')}</p>
                <p className='text-base text-mainColor font-semibold leading-6'>+998917715656</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <a href='https://t.me/servis_kotlov_tashkent' target='_blank' className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaTelegram size={'24'} /></a>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>{t('telegram')}</p>
                <p className='text-base text-mainColor font-semibold leading-6'>@servis_kotlov_tashkent</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <a href="https://www.instagram.com/serveskotlov.uz/" target='_blank' className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaInstagram size={'24'} /></a>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>{t('instagram')}</p>
                <p className='text-base text-mainColor font-semibold leading-6'>@serveskotlov.uz</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <a href='https://maps.windows.com/?form=WNAMSH&collection=point.41.273316_69.295482_Point'  target='_blank' className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiLocationOn size={'24'} /></a>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>{t('location')}</p>
                <p className='text-base text-mainColor font-semibold leading-6 sm:max-w-[228px]'>Talimarjon street, 15, Tashkent, Yashnobod, Tashkent, Uzbekistan </p>
              </div>
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact