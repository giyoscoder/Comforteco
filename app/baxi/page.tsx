// 'use client'
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase';
import { extra_icon_img, icon_elector, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img, icon_clean, } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ремонт котлов Baxi в Ташкенте | Сервисный центр Baxi | ',
    description: 'Ремонт котлов Baxi любой сложности. Сервисное обслуживание, чистка, настройка. Выезд мастера в день обращения. '
}

const DATA = [
    { id: 1, text: 'Настенные газовые котлы', icon: icon_elector },
    { id: 2, text: 'Настенные конденсационные котлы', icon: icon_boiler },
    { id: 3, text: 'Напольные атмосферные котлы', icon: icon_setting },
    { id: 4, text: 'Напольные конденсационные', icon: icon_boiler_repair },
    { id: 5, text: 'Бойлеры к котлам', icon: icon_wall_repair },
];

const TEXT_LIST = [
  'Итальянская компания BAXI S.p.A. занимается производством оборудования для отопления и горячего водоснабжения уже более 50 лет. Ассортимент выпускаемой продукции включает настенные стандартные и конденсационные газовые отопительные котлы, напольные газовые котлы с чугунным теплообменником и электрические накопительные водонагреватели.',
  'Общий годовой оборот компании составляет около 270 миллионов евро. В компании занято 800 сотрудников. Более 75% выпускаемой продукции поставляется на экспорт в 70 стран по всему миру.',
  'Компания BAXI S.p.A. была основана в 1924 году австрийской семьей Westen, которая открыла в городе Bassano Del Grappa фабрику по производству эмалированной посуды.','В период с 1978 по 1984 год компания входила в группу Zanussi и занималась производством газовых котлов, электрических водонагревателей, стальных радиаторов и стальных ванн.','C 1984 по 1998 года компания называлась Ocean Idroclima и входила в группу компаний El.Fi. С середины 80-х годов начинается активное развитие экспорта производимой продукции в мировом масштабе.','В феврале 1999 года компания получает новое имя — BAXI S.p.A. и входит в состав холдинга BAXI GROUP, а начиная с 2009 года — в группу BDR Thermea.', 'Сегодня внутри холдинга BDR Thermea завод BAXI S.p.A. является центром по производству настенных газовых котлов. Общий объем выпускаемой продукции составляет около 500000 единиц газовых настенных котлов в год, включая такие популярные серии, как MAIN, LUNA, ECO, NUVOLA.','В 1993 году компания BAXI S.p.A. одной из первых в отопительном секторе получила международный сертификат системы качества производства ISO 9001.','В конце 2001 года завод BAXI S.p.A. был удостоен сертификата экологичности производства ISO 14001.', 'Вся продукция, выпускаемая на заводе BAXI S.p.A., отличается высоким качеством и надежностью. А благодаря квалифицированной сервисной и технической поддержке продукция под маркой BAXI завоевала заслуженное доверие покупателей во многих странах мира.'
]

const TEXT_LIST_TWO = [
    'Наш сервисный центр предлагает широкий спектр профессиональных услуг по ремонту котлов Baxi в Ташкенте. Мы специализируемся на обслуживании данного бренда котлов, обеспечивая высокое качество ремонта и надежность работы вашего оборудования. Наши услуги включают в себя:',
    'Диагностика и выявление неисправностей: Наши опытные специалисты проводят тщательную проверку вашего котла Baxi, чтобы точно определить причину неисправности.',
    'Ремонт и замена деталей: Мы осуществляем качественный ремонт и замену деталей котлов Baxi, используя только оригинальные запчасти.',
    'Плановое техническое обслуживание: Мы также предлагаем услуги по плановому обслуживанию котлов Baxi, чтобы предотвратить возможные поломки и обеспечить их бесперебойную работу.',
    'Консультации по эксплуатации и обслуживанию: Наши специалисты готовы поделиться своим опытом и советами по правильной эксплуатации и обслуживанию котлов Baxi',
    'Мы ценим ваш комфорт и безопасность, поэтому гарантируем профессиональный подход и быстрое реагирование на все ваши запросы. Доверьте ремонт вашего котла Baxi нашим опытным специалистам и наслаждайтесь надежной работой вашего оборудования!',
]

const TEXT_LIST_THREE = [
    'Почему выбор нашего сервисного центра - это лучшее решение для ремонта котлов Baxi в Ташкенте? Мы гордимся предоставлением высококачественных услуг и стремимся удовлетворить потребности каждого клиента. Вот несколько преимуществ, которые вы получаете, обратившись к нам:',
    'Опытные специалисты: Наша команда состоит из опытных и профессионально обученных мастеров, которые имеют богатый опыт работы с котлами Baxi. Мы знаем это оборудование вдоль и поперек, что позволяет нам быстро и эффективно решать любые проблемы.',
    'Использование оригинальных запчастей: Мы уделяем особое внимание качеству и надежности ремонта, поэтому используем только оригинальные запчасти Baxi. Это гарантирует долговечность и надежность вашего оборудования после ремонта.',
    'Гарантия качества: Мы уверены в качестве нашей работы и предоставляем гарантию на выполненные ремонтные работы. Это демонстрирует наше доверие к своим специалистам и обеспечивает вас защитой в случае возникновения проблем.',
    'Поддержка клиентов: Мы ценим каждого клиента и готовы предоставить вам всю необходимую поддержку и консультации. Наша дружелюбная команда всегда готова ответить на ваши вопросы и помочь вам с вашим котлом Baxi.',
    'Обратившись к нам, вы можете быть уверены в качественном и надежном ремонте вашего котла Baxi. Доверьте своё оборудование профессионалам и наслаждайтесь его бесперебойной работой!'
]

const TEXT_LIST_FOUR = [
    'Мы понимаем, что неполадки с котлом Baxi могут привести к неудобствам и потере комфорта в вашем доме. Поэтому мы предлагаем простой и эффективный процесс ремонта, который направлен на быстрое восстановление работы вашего оборудования.',
    'Прием заявки: Ваше обращение к нам является первым шагом к решению проблемы с котлом Baxi. Вы можете связаться с нами по телефону или заполнить форму на нашем сайте. Мы оперативно реагируем на все запросы и назначаем встречу с нашим специалистом в удобное для вас время',
    'Диагностика и оценка: Наши опытные мастера проведут тщательную диагностику вашего котла Baxi, чтобы выявить причину неисправности. Мы обсудим с вами результаты диагностики и предложим оптимальное решение для ремонта',
    'Ремонт и замена деталей: После вашего согласия на ремонт, наши специалисты приступят к выполнению необходимых работ. Мы используем только качественные оригинальные запчасти Baxi, чтобы обеспечить долгосрочную надежность вашего оборудования.',
    'Тестирование и проверка: По завершении ремонта мы проведем тестирование вашего котла Baxi, чтобы убедиться, что все функции работают корректно. Мы не оставляем никаких шансов на повторное возникновение проблемы.',
    'Обратная связь: Важно для нас знать ваше мнение о качестве нашей работы. Мы будем рады услышать ваши отзывы и предложения, чтобы постоянно улучшать качество наших услуг и обеспечить ваш комфорт и удовлетворение',
    'Доверьте ремонт вашего котла Baxi нашим профессионалам, и вы получите быстрое и качественное решение вашей проблемы. Обратитесь к нам сейчас, и наши специалисты помогут вернуть комфорт и спокойствие в ваш дом!'
]


const Baxi = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Baxi' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
                <Company text='Наши услуги' data={TEXT_LIST_TWO} />
                <Company text='Преимущества выбора нашего сервисного центра для ремонта котлов Baxi в Ташкенте' data={TEXT_LIST_THREE} />
                <Company text='Процесс ремонта котлов Baxi: Шаги к вашему комфорту' data={TEXT_LIST_FOUR} />
            </section>
            <MainCallButton/>
        </div>
    )
}

export default Baxi