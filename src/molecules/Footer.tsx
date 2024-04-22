import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(`/`)
    }, [navigate]);

    return (
        <footer className="bg-white py-4 border-t border-gray-300">
            <div className="flex justify-between items-center px-12 md:px-48">
                <div className='flex items-center'>
                    <span className="text-sm md:text-md mr-2 md:mr-4 underline hover:no-underline cursor-pointer font-abhaya font-semibold" onClick={onClick}>Emilien Buguet</span>

                    <a href="https://fr.linkedin.com/in/emilien-buguet-8753421bb" target="_blank" rel="noopener noreferrer" className="text-md md:text-xl text-black mr-2 md:mr-4">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="https://github.com/emilienbuguet" target="_blank" rel="noopener noreferrer" className="text-md md:text-xl text-black mr-2 md:mr-4">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="mailto:emilien.buguet@epitech.eu" className="text-md md:text-lg mr-2 text-black">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className='text-sm md:text-md font-abhaya font-bold text-end'>© 2024 Emilien Buguet</div>
            </div>
        </footer>
    );
}


export default Footer;