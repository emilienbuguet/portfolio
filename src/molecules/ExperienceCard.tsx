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
        <div className='border-2 hover:border-primary rounded-xl w-full h-48 md:h-96 flex flex-col cursor-pointer relative' onClick={onClick}>
            <div className='h-1/3 border-b-2 rounded-t-lg'>
                <img className='w-full h-full object-cover rounded-t-lg'  src={`/portfolio/experiences/${name}_banner.png`}/>
            </div>
            <div className="w-12 h-12 md:w-24 md:h-24 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                <img className='rounded-lg w-full h-full object-cover' src={`/portfolio/experiences/${name}_logo.png`}/>
            </div>
            <div className='flex flex-col md:gap-2 p-2 md:p-4 pt-10 md:pt-16 font-abhaya'>
                <div className='font-extrabold text-md md:text-2xl'>
                    {t(`experience_title_${name}`)}
                </div>
                <div className=' text-sm md:text-xl'>
                    {t(`experience_company_name_${name}`)}
                </div>
            </div>
        </div>
    );
}

export interface ExperienceCardProps {
    name: string;
}

export default ExperienceCard;