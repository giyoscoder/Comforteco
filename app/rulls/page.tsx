import Showcase from "@/CElements/CShowcase/Showcase"
import ContourService from "@/CElements/ContourService/ContourService"
import { icon_boiler, icon_boiler_repair, icon_two_boiler, icon_remont, icon_elector, icon_setting, icon_dilever } from '../../public/Assets/Images';
import Company from "@/CElements/Company/Company";
const DATA = [
    { id: 1, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 3, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Чистка котла', icon: icon_boiler_repair },
    { id: 5, text: 'Ремонт напольных котлов', icon: icon_two_boiler },
    { id: 6, text: 'Ремонт настенных котлов', icon: icon_elector },
]

const TEXT_LIST = [
    'Наш сервисный центр по ремонту котлов Rulls готов предложить вам высококачественное обслуживание и решение любых проблем, связанных с вашим отопительным оборудованием. Благодаря нашему богатому опыту и профессиональной команде специалистов, мы готовы взять на себя ответственность за техническое обслуживание, ремонт и диагностику котлов Rulls',
    'Мы осознаем важность надежности и эффективности вашего отопительного оборудования, поэтому предлагаем только высокотехнологичные и проверенные временем решения для устранения возникших проблем. Наша команда специалистов обладает широкими знаниями и опытом работы с котлами Rulls, что позволяет нам оперативно и качественно выполнять любые технические работы.',
    'Мы предлагаем не только ремонт и обслуживание котлов Rulls, но и оказываем консультации по выбору оптимальной модели котла под ваши нужды. Независимо от типа или сложности проблемы, наша команда специалистов предоставит вам профессиональное обслуживание, чтобы обеспечить бесперебойную работу вашего оборудования.',
    'Доверьте нам ремонт и обслуживание котлов Rulls, и вы сможете быть уверены, что ваше отопление будет функционировать на высшем уровне. Наш сервисный центр гарантирует качество выполняемых работ, применение оригинальных деталей и комплектующих, а также выгодные цены на все виды услуг.',
    'Мы всегда готовы помочь вам с ремонтом котлов Ferroli и обеспечить их надежную и эффективную работу. Не откладывайте важные технические работы на потом – обратитесь к нам, и мы сделаем все возможное, чтобы ваш котел Ferroli работал безупречно и обеспечивал комфортное отопление в вашем доме или офисе.'
]

const Rulls = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Rulls' about='Постгарантийное обслуживание' />

            <section id='rulls'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>

                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>

            <section>
                <Company text='О компании' data={TEXT_LIST} />

            </section>
        </div>
    )
}

export default Rulls