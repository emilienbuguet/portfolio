import { useTranslation } from 'react-i18next';
import PageTitle from '../atoms/Title';
import image from '/assets/bachelor_photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function About() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col pt-12 md:pt-24">
            <div className='flex flex-col md:flex-row pb-24 w-full md:space-x-6'>
                <div className='flex flex-col w-full md:w-3/5 justify-stretch'>
                    <PageTitle text={t("pages_about_title")}/>
                    <div className='flex flex-col justify-between h-full font-abhaya text-2xl md:text-3xl text-gray-600'>
                        <div className='pt-16'>
                            {t("pages_about_paragraph_1")}
                        </div>
                        <div>
                            {t("pages_about_paragraph_2")}
                        </div>
                        <div>
                            {t("pages_about_paragraph_3")}
                        </div>
                        <div>
                            {t("pages_about_paragraph_4")}
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 pt-8 md:pt-0">
                    <img src={image} alt={"me"} className='object-cover'/>
                </div>
            </div>
            <PageTitle text={t('pages_about_contact_me')}/>
            {/* <div className='font-abhaya text-2xl md:text-3xl text-gray-600 pt-16'>{t("pages_about_contact_me_description")}</div> */}
            <div className="flex flex-col space-y-4 pt-8 pl-4">
                <a href="https://fr.linkedin.com/in/emilien-buguet-8753421bb" target="_blank" rel="noopener noreferrer" className="text-md md:text-2xl text-gray-600 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <div>Linkedin</div>
                </a>
                <a href="mailto:emilien.buguet@epitech.eu" className="text-md md:text-2xl text-gray-600 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div>emilien.buguet@epitech.eu</div>
                </a>
            </div>
        </div>
    );
}



export default About;