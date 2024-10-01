import { useTranslation } from 'react-i18next';
import NavBarItem from '../atoms/NavBarItem';
import LanguageSwitcher from '../atoms/LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import clsx from 'clsx';

export function Header() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onClick = useCallback(() => {
        navigate(`/`);
    }, [navigate]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [setIsMenuOpen, isMenuOpen]);

    return (
        <header className="py-4 flex flex-col md:flex-row justify-between items-center">
            <div className='flex justify-between w-full md:w-auto items-center border-b p-4 border-gray-300 md:border-none'>
                <div className="flex items-center hover:text-primary transition-colors duration-500 cursor-pointer md:pb-0 justify-center md:justify-start" onClick={onClick}>
                    <div className="rounded-full overflow-hidden bg-white w-14 h-14 flex-shrink-0">
                        <img src="/portfolio/assets/bachelor_photo.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-2xl ml-3 font-abhaya font-extrabold">Emilien Buguet</h1>
                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div
                className={clsx(
                    "flex flex-col w-full md:w-auto md:flex-row items-center gap-12 pb-4 md:pb-0 border-b border-gray-300 md:border-none transition-all duration-500 ease-in-out overflow-hidden",
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                )}
            >
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
