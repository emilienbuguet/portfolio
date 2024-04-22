import { useTranslation } from 'react-i18next';
import { useCallback } from "react";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const onClick = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
    }, [i18n])

    return (
        <div className='flex'>
            <button onClick={() => onClick('en')}>🇬🇧</button>
            <div>/</div>
            <button onClick={() => onClick('fr')}>🇫🇷</button>
        </div>
    );
}



export default LanguageSwitcher;