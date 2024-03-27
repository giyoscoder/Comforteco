// 'use client'
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase'
import { extra_icon_img, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img, icon_clean, } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title:'Ремонт котлов Atlantic в Ташкенте | Сервисный центр Atlantic | ServesKotlov.uz',
    description: 'Сервисный центр Atlantic в Ташкенте. Опытные мастера, оригинальные запчасти, гарантия на ремонт. Ремонт котлов Atlantic любой сложности. Звоните: +998 (71) 200-00-00'
}

const DATA = [
    { id: 1, text: 'Чистка котла', icon: icon_clean },
    { id: 2, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 5, text: 'Ремонт напольных котлов', icon: icon_remont },
    { id: 6, text: 'Ремонт настенных котлов', icon: icon_wall_repair },
];

const TEXT_LIST = ['Наш сервисный центр – это надежный и профессиональный партнер в области обслуживания и ремонта котлов от ведущего мирового производителя – Atlantic. Мы предлагаем полный комплекс услуг, связанных с обслуживанием газовых и электрических котлов этой надежной марки.', 'Одним из наших главных преимуществ является наличие команды опытных специалистов, обладающих широкими знаниями и навыками в области работы с котлами Atlantic. Каждый сотрудник нашего сервисного центра проходит специальное обучение и имеет необходимую сертификацию, что гарантирует качественное и профессиональное обслуживание вашего котла.', 'Мы предлагаем не только ремонт и обслуживание котлов Atlantic, но и комплексные услуги по поставке, монтажу и настройке оборудования. Мы всегда готовы предоставить профессиональную консультацию по выбору, установке и эксплуатации котлов, а также помочь определить наилучшую модель, исходя из ваших потребностей и бюджета.', 'Наши сервисные услуги включают в себя плановое техническое обслуживание, диагностику и ремонт котлов, замену неисправных деталей, чистку и промывку системы отопления, а также проверку и настройку работы котла на оптимальные показатели. Мы обеспечиваем оперативное выполнение работ, используя только оригинальные запчасти и современное оборудование.', 'Весь процесс обслуживания и ремонта происходит с учетом высоких стандартов качества и безопасности. Мы работаем по прозрачным ценам и всегда предоставляем подробную информацию о выполненных работах и замененных деталях.', 'Выбрав наш сервисный центр котлов Atlantic, вы получите не только надежность и качество услуг, но и полное освобождение от забот по обслуживанию и ремонту вашего котла. Мы ценим каждого клиента и гарантируем индивидуальный подход к каждому запросу.', 'Доверьте обслуживание и ремонт вашего котла нам, и вы убедитесь в профессионализме и ответственности нашей команды. Позвоните нам прямо сейчас и обсудите все детали с нашими дружелюбными менеджерами. Мы готовы помочь вам обеспечить комфорт и безопасность в вашем доме, сотни клиентов уже доверят нам.']

const TEXT_LIST_TWO = [
    'Сервисный центр Atlantic - гарантия тепла и уюта в вашем доме',
    '• Опытные мастера: наша команда состоит из высококвалифицированных специалистов, которые имеют большой опыт работы с котлами Atlantic и Airfel.',
    '• Современное оборудование: мы используем только профессиональное оборудование и инструменты для диагностики и ремонта котлов.',
    '• Оригинальные запчасти: мы используем только оригинальные запчасти Atlantic и Airfel, что гарантирует высокое качество ремонта.',
    '• Доступные цены: мы предлагаем доступные цены на ремонт и сервисное обслуживание котлов.',
    '• Гарантия качества: мы предоставляем гарантию на все виды работ.'
]

const TEXT_LIST_THREE = [
    '• Регулярное сервисное обслуживание: гарантирует бесперебойную работу вашего котла и продлевает срок его службы.',
    '• Профессиональная чистка: удаляет загрязнения и накипь, которые могут привести к поломке котла.',
    '• Настройка и регулировка: оптимизирует работу котла и обеспечивает его максимальную эффективность.',
    '• Экономия средств: предотвращает дорогостоящий ремонт в будущем.'
]

const Atlantic = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Atlantic' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
                <Company text='Ваш надежный помощник в мире отопительной техники' data={TEXT_LIST_TWO} />
                <Company text='Сервисное обслуживание котлов Atlantic и Airfel - залог вашего спокойствия' data={TEXT_LIST_THREE} />
            </section>
            <MainCallButton />
        </div>
    )
}

export default Atlantic