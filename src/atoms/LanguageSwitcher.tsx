import { useTranslation } from 'react-i18next';
import { useCallback } from "react";
import clsx from 'clsx';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const onClick = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        console.log(i18n.language)
    }, [i18n])

    return (
        <div className='border flex text-xs rounded-md focus:outline-none focus:ring-2 focus:ring-primary'>
            <div className={clsx('bg-background rounded-l-md p-2', i18n.language === 'fr' ? "font-bold" : "")}>
                <button onClick={() => onClick('fr')}>🇫🇷 Fr</button>                
            </div>
                
            <div className={clsx('bg-background rounded-r-md p-2', i18n.language == 'en' ? "font-bold" : "")}>
                <button onClick={() => onClick('en')}>🇬🇧 En</button>
            </div>
        </div>
    );
}



export default LanguageSwitcher;