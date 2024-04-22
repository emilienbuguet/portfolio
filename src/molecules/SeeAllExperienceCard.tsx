import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SeeAllExperienceCard() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onClick = useCallback(() => {
        navigate(`/experiences`)
    }, [navigate]);

    return (
        <div className='border-2 hover:border-primary rounded-xl w-full h-48 md:h-96 p-4 md:p-8 flex flex-col justify-center items-center cursor-pointer' onClick={onClick}>
            <div className='text-center'>
                <div className='text-xl md:text-4xl font-abhaya font-extrabold'>
                    {t(`molecules_see_all_experiences_card`)}
                </div>
                <div className='mt-20 flex justify-center'>
                    <div className="h-6 w-6 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-primary">
                            <FontAwesomeIcon icon={faArrowRight} className='text-white text-md md:text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeeAllExperienceCard;
