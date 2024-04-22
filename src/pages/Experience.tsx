import { useTranslation } from 'react-i18next';
import {  useParams } from 'react-router-dom';
import PageTitle from '../atoms/Title';
import Technology from '../atoms/Technology';
import TechnologyList from '../molecules/TechnologyList';
import { useMemo } from 'react';
import ExperienceCard from '../molecules/ExperienceCard';
import SeeAllExperienceCard from '../molecules/SeeAllExperienceCard';

interface ExperienceData {
    technologies: string[];
    nbTask: number;
}

const experiences: Record<string, ExperienceData> = {
    amocer: {
        technologies: ['typescript', 'react', 'aws', 'graphql', 'python'],
        nbTask: 3, 
    },
    gotombola: {
        technologies: ['python', 'typescript', 'golang', 'aws', 'graphql'],
        nbTask: 3,
    },
    magic_makers: {
        technologies: ['python'],
        nbTask: 3,
    },
    arcom: {
        technologies: ['cpp'],
        nbTask: 2,
    },
    edgar: {
        technologies: ['golang', 'aws', 'python', 'terraform', 'docker', 'graphql', 'mongodb'],
        nbTask: 4,
    },
    epitech: {
        technologies: ['c', 'cpp', 'haskell', 'golang', 'docker'],
        nbTask: 3,
    },
    unical: {
        technologies: ['aws', 'docker', 'kotlin'],
        nbTask: 2,
    },
};

export function Experience() {
    const { experience } = useParams();
    const { t } = useTranslation();
    const { technologies, nbTask } = experiences[experience as keyof typeof experiences] || {};
    
    const nextExperience = useMemo(() => {
        const experienceKeys = Object.keys(experiences);
        const currentIndex = experienceKeys.indexOf(experience || '');
        if (currentIndex !== -1 && currentIndex < experienceKeys.length - 1) {
            return experienceKeys[currentIndex + 1];
        }
        return experienceKeys[0];
    }, [experience, experiences]);


    return (
        <div className="flex flex-col pt-12 md:pt-24">
            <PageTitle text={t(`experience_title_${experience}`)}/>
            <div className='font-abhaya text-3xl md:text-6xl text-gray-600'>{t(`experience_company_name_${experience}`)}</div>
            <div className='font-abhaya text-2xl md:text-3xl text-primary'>{t(`experience_date_${experience}`)}</div>
            <div className="font-abhaya text-3xl md:text-4xl pt-16 md:pt-28  font-extrabold pb-4">{t("pages_experience_used_description_title")}</div>
            <div className='font-abhaya text-2xl md:text-3xl'>{t(`experience_company_description_${experience}`)}</div>
            <div className="font-abhaya text-3xl md:text-4xl pt-16  font-extrabold pb-2">{t("pages_experience_used_tasks_title")}</div>
            <ul className="list-disc pl-6 md:pl-12 pb-16 space-y-2">
                {[...Array(nbTask)].map((_, index) => (
                    <li key={index} className="font-abhaya text-2xl md:text-3xl">
                        {t(`experience_${experience}_task_${index + 1}`)}
                    </li>
                ))}
            </ul>
            <TechnologyList title={t("pages_experience_used_technologies_title")}>
                {technologies.map((techno: string) => (
                    <Technology name={techno} />
                ))}
            </TechnologyList>
            <div className='font-abhaya text-3xl md:text-4xl pt-16 font-extrabold pb-4'>{t("pages_experience_other_experience")}</div>
            <div className='flex w-full lg:w-1/2 gap-6 md:gap-12 lg:pr-6 items-center'>
                <ExperienceCard name={nextExperience} />
                <SeeAllExperienceCard />
            </div>
    </div>
    );
}


export default Experience;