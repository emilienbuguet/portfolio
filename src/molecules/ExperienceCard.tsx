import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ExperienceCard({name}: ExperienceCardProps) {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onClick = useCallback(() => {
        navigate(`/experiences/${name}`)
    }, [navigate, name]);

    return (
        <div className='border-2 hover:border-primary rounded-xl w-full h-48 md:h-96 flex flex-col cursor-pointer' onClick={onClick}>
            <div className='h-1/6 bg-primary rounded-t-lg flex items-center justify-center text-white font-abhaya font-extrabold text-xl md:text-3xl'>
                {t(`experience_company_name_${name}`)}
            </div>
            <div className='flex flex-col p-4 h-full items-center gap-4 justify-center'>
                <div className='flex-1 flex justify-center items-center'>
                    <div className='text-xl md:text-2xl lg:text-3xl font-abhaya font-extrabold text-center text-gray-600'>
                        {t(`experience_title_${name}`)}
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="h-6 w-6 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-primary">
                        <FontAwesomeIcon icon={faArrowRight} className='text-white text-md md:text-2xl' />
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='text-xl md:text-2xl lg:text-4xl font-abhaya font-extrabold'>
                    {t(`experience_title_${name}`)}
                </div>
                <div className='text-xl md:text-2xl lg:text-4xl font-abhaya font-extrabold'>
                    {t(`experience_company_name_${name}`)}
                </div>
                <div>
                    {t(`experience_card_description_${name}`)}
                </div>
            </div>
            <div>{t("molecules_experience_card_button")}</div> */}
        </div>
    );
}

export interface ExperienceCardProps {
    name: string;
}

export default ExperienceCard;