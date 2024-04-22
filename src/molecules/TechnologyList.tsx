export function TechnologyList({title, children}: TechnologyListProps) {
    return (
        <div className={'w-full flex flex-col'}>
            <div className={"font-abhaya text-4xl font-extrabold pb-4"}>
                {title}
            </div>
            <div className="flex flex-wrap gap-3">
                {children}
            </div>
        </div>
    );
}

export interface TechnologyListProps {
    title: string;
    children: React.ReactNode;
}

export default TechnologyList;