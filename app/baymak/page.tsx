// 'use client'
import React from 'react'
import { extra_icon_img, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img, icon_clean, } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import Showcase from '../../CElements/CShowcase/Showcase';
import MainCallButton from '@/components/MainCallButton';

const DATA = [
    { id: 1, text: 'Чистка котла', icon: icon_clean },
    { id: 2, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 5, text: 'Обслуживание напольного котла', icon: icon_two_boiler },
    { id: 6, text: 'Ремонт настенных котлов', icon: icon_wall_repair },
];

const TEXT_LIST = [
    'Service Center Baymak – это высококвалифицированный сервисный центр, предлагающий полный спектр услуг в области обслуживания и ремонта бытовой техники. Мы специализируемся на обслуживании продукции легендарного торгового бренда Baymak, который заслуженно признан одним из лидеров отрасли.',
    'Наша команда состоит из опытных и профессиональных техников, которые обладают глубокими знаниями и умениями в ремонте, настройке и обслуживании техники. Мы гордимся нашей способностью работать с самыми современными технологиями и обеспечивать высочайший уровень обслуживания для наших клиентов.',
    'В нашем сервисном центре мы предлагаем широкий спектр услуг, включая диагностику и ремонт бытовой техники, установку и настройку нового оборудования, а также предоставляем гарантийное обслуживание. Мы понимаем, что полноценная работоспособность бытовой техники – это ключевой аспект комфорта в доме или офисе, поэтому мы полностью посвящены устранению любых неисправностей и качественному обслуживанию вашей техники.',
    'В Service Center Baymak мы придерживаемся строгих стандартов качества и предлагаем индивидуальный подход к каждому клиенту. Мы разбираемся в особенностях каждой модели техники и точно знаем, как решить любую проблему. Наша цель – обеспечить быстрое и надежное обслуживание, чтобы вы могли как можно скорее наслаждаться функциональностью вашей техники.',
    'Откройте для себя превосходное качество обслуживания и ремонта бытовой техники в Service Center Baymak. Доверьте свою технику профессионалам и наслаждайтесь ее надежностью и безупречной работой. Мы гарантируем, что вы останетесь довольны результатом нашей работы.'
]

const Baymak = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Baymak' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
            </section>
            <MainCallButton/>
        </div>
    )
}

export default Baymak