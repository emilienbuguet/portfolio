import { useTranslation } from 'react-i18next';
import NavBarItem from '../atoms/NavBarItem';
import LanguageSwitcher from '../atoms/LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function Header() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onClick = useCallback(() => {
        navigate(`/`)
    }, [navigate]);

    return (
        <header className="py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center hover:text-primary cursor-pointer pb-4 w-full md:w-auto md:pb-0 border-b border-gray-300 md:border-none justify-center md:justify-start" onClick={onClick}>
                <div className="rounded-full overflow-hidden bg-white w-14 h-14 flex-shrink-0">
                    <img src="/portfolio/assets/bachelor_photo.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-2xl ml-3 font-abhaya font-extrabold">Emilien Buguet</h1>
            </div>
            
            <div className="flex flex-col w-full md:w-auto pt-4 md:pt-0 md:flex-row items-center gap-12 pb-4 md:pb-0 border-b border-gray-300 md:border-none">
                <NavBarItem label={t("header_page_home")} path="" />
                <NavBarItem label={t("header_page_expericences")} path="experiences" />
                <NavBarItem label={t("header_page_technologies")} path="technologies" />
                <NavBarItem label={t("header_page_about")} path="about" />
                <LanguageSwitcher />
            </div>
        </header>
    );
}


export default Header;