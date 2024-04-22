import { useTranslation } from 'react-i18next';
import ExperienceCard from '../molecules/ExperienceCard';
import PageTitle from '../atoms/Title';
import SeeAllExperienceCard from '../molecules/SeeAllExperienceCard';

export function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col pt-12 md:pt-24">
            <div className='font-abhaya text-2xl md:text-4xl py-2 text-primary font-extrabold'>{t("pages_home_over_title")}</div>
            <PageTitle text={t("pages_home_title")} />
            <div>
                <div className='font-abhaya text-2xl md:text-3xl pt-10 text-gray-600'>{t("pages_home_description")}</div>
                <div className='font-abhaya text-2xl md:text-3xl pt-1 text-gray-600'>{t("pages_home_description_second")}</div>
            </div>
            <div className='font-abhaya text-3xl md:text-4xl font-extrabold pt-24 md:pt-36 pb-10'>
                {t("pages_home_experiences_title")}
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-12'>
                <ExperienceCard name='edgar' />
                <ExperienceCard name='amocer' />
                <ExperienceCard name='epitech' />
                <SeeAllExperienceCard />
            </div>
        </div>
    );
}


export default Home;