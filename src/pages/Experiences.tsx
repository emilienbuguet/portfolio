import { useTranslation } from 'react-i18next';
import PageTitle from '../atoms/Title';
import ExperienceCard from '../molecules/ExperienceCard';

export function Experiences() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col pt-12 md:pt-24">
            <PageTitle text={t("pages_experiences_title")}/>
            <div className='font-abhaya text-2xl md:text-3xl pt-10 text-gray-600'>{t("pages_experiences_description")}</div>
            <div className='font-abhaya text-3xl md:text-4xl font-extrabold pt-36 pb-8'>
                {t("pages_experiences_professional_title")}
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-12'>
                <ExperienceCard name='amocer' />
                <ExperienceCard name='gotombola' />
                <ExperienceCard name='magic_makers' />
                <ExperienceCard name='arcom' />
            </div>
            <div className='font-abhaya text-3xl md:text-4xl font-extrabold pt-16 pb-10'>
                {t("pages_experiences_scholar_title")}
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-12'>
                <ExperienceCard name='edgar' />
                <ExperienceCard name='epitech' />
                <ExperienceCard name='unical' />
            </div>
        </div>
    );
}


export default Experiences;