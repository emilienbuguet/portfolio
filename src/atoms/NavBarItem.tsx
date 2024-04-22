import { useCallback } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import clsx from 'clsx';

export function NavBarItem({path, label}: NavBarItemProps) {
    const navigate = useNavigate();
    const match = useMatch(path);
    const onClick = useCallback(() => {
        navigate(path)
    }, [navigate, path]);

    return (
        <div onClick={onClick} className={clsx("text-2xl font-abhaya cursor-pointer hover:underline", match ? "underline text-primary underline-offset-4" : "")}>
            {label}
        </div>
    );
}

export interface NavBarItemProps {
    path: string;
    label: string;
}


export default NavBarItem;