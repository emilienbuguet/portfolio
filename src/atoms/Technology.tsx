import { useTranslation } from 'react-i18next';

export function Technology({name, image, label}: TechnologyProps) {
    const { t } = useTranslation();

    return (
        <div className={'bg-gray-200 text-secondary rounded-lg font-abhaya text-xl md:text-2xl font-bold flex h-10 md:h-14 items-center justify-center text-center p-2 px-4 gap-4'}>
            <img src={image || `/technologies/${name}.png`} alt={name} className="h-6 md:h-8"/>
            {label ? label : t(`atoms_technology_name_${name}`)}
        </div>
    );
}

export interface TechnologyProps {
    name: string;
    image?: string;
    label?: string;
}

export default Technology;