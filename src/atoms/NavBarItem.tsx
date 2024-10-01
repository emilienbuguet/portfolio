import { useCallback } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import clsx from 'clsx';

export function NavBarItem({path, label}: NavBarItemProps) {
    const navigate = useNavigate();
    const match = useMatch(path);
    const onClick = useCallback(() => {
        navigate(`/${path}`)
    }, [navigate, path]);
    //hover:text-blue-500 transition-colors duration-300 ${window.location.pathname === '/' ? 'text-blue-500 ' : ''}
    return (
        <div onClick={onClick} className={clsx("text-2xl font-abhaya cursor-pointer hover:text-primary transition-colors duration-500", match ? "text-primary font-extrabold" : "")}>
            {label}
        </div>
    );
}

export interface NavBarItemProps {
    path: string;
    label: string;
}


export default NavBarItem;