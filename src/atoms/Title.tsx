import clsx from 'clsx';

export function PageTitle({text, className}: PageTitleProps) {

    return (
        <div className={clsx('font-abhaya text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-800', className)}>{text}</div>
    );
}

export interface PageTitleProps {
    text: string;
    className?: string;
}


export default PageTitle;