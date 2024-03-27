import Catogeries from '@/components/Catogeries'
import ComfortecoCooperation from '@/components/ComfortecoCooperation'
import Comments from '@/components/Comments'
import ContourService from '@/components/ContourService'
import Experience from '@/components/Experience'
import MainCallButton from '@/components/MainCallButton'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'
import Superiority from '@/components/Superiority'
import comforteco_showcase from '@/public/Assets/Images/comforteco_showcase.png'
import comforteco_superiority from '@/public/Assets/Images/comforteco_superiority.png'
import { repair_icon_img, prevention_icon_img, service_icon_img } from '@/public/Assets/Images';
import fridge from '@/public/Assets/Images/fridge.png';
import fridge2 from '@/public/Assets/Images/fridge2.png';
import air_condition from '@/public/Assets/Images/air_condition.png';
import fridge3 from '@/public/Assets/Images/fridge3.png';
import fridge4 from '@/public/Assets/Images/fridge4.png';
import Servers from '@/components/Servers'

const DATA_SERVICES = [
    { id: 1, icon: repair_icon_img, title: 'comforteco_repair' },
    { id: 2, icon: prevention_icon_img, title: 'comforteco_prevention' },
    { id: 3, icon: service_icon_img, title: 'comforteco_boiler' },
]

const DATA_CATOGERIES = [
    { text: 'comforteco_contour', data: [fridge, fridge2, fridge] },
    { text: 'comforteco_countour_wall', data: [fridge2, fridge, fridge2] },
    { text: 'comforteco_contour_floor', data: [air_condition, air_condition, air_condition] },
    { text: 'comforteco_contour_prevention', data: [fridge3, fridge3, fridge3] },
    { text: 'comforteco_contour_gas', data: [fridge4, fridge4, fridge4] },
]

const Comforteco = () => {
    return (
        <div>
            <section>
                <Showcase title={'comfortecoTitle'} about={'comfortecoAbout'} img={comforteco_showcase} />
                <Superiority img={comforteco_superiority} />
                <ComfortecoCooperation />
                <Services data={DATA_SERVICES} />
                <Catogeries about='comforteco_about' data={DATA_CATOGERIES} />
                <Servers />
                <Experience />
                <Comments />
                <MainCallButton />
            </section>
        </div>
    )
}

export default Comforteco