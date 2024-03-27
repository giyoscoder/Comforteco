import Company from '@/CElements/Company/Company';
import ContourService from '../../CElements/ContourService/ContourService';
import Showcase from "../../CElements/CShowcase/Showcase";
import { icon_boiler, icon_boiler_repair, icon_two_boiler, icon_remont, icon_elector, icon_setting, icon_dilever } from '../../public/Assets/Images';

const DATA = [
    { id: 1, text: 'Бесплатный выезд мастеров', icon: icon_dilever },
    { id: 3, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 5, text: 'Ремонт двух контурных котлов', icon: icon_two_boiler },
    { id: 6, text: 'Ремонт настенных котлов', icon: icon_elector },
    { id: 7, text: 'Ремонт напольных котлов', icon: icon_remont },
];

const TEXT_LIST = [
    'Отчетность о показателях устойчивого развития отражает усилия Fondital по защите окружающей среды, общества и этически ответственному управлению.',
    'Результатом этого процесса стало второе издание Отчета об устойчивом развитии, в котором представлен доклад за трехлетний период 2020-2021-2022 годов, составленный в соответствии с международными стандартами Global Reporting Initiative (GRI) и проверенный независимой третьей стороной.',
    'Устойчивость компании имеет решающее значение в быстро меняющемся мире: она представляет собой бизнес-модель, которой необходимо следовать, чтобы работать сегодня и в будущем.',
    'Интеграция устойчивой практики в деятельность компании способствует сохранению ресурсов, позитивному воздействию на общество и окружающую среду, а также реагированию на потребности все более чувствительных потребителей.'
]

const Fondital = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Fondital' about='Постгарантийное обслуживание' />
            <section id='fondital'>
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

export default Fondital