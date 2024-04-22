import { useTranslation } from 'react-i18next';
import PageTitle from '../atoms/Title';
import TechnologyList from '../molecules/TechnologyList';
import Technology from '../atoms/Technology';

export function Technologies() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col pt-12 md:pt-24">
            <PageTitle text={t("pages_technologies_title")}/>
            <div className='font-abhaya text-3xl pt-10 text-gray-600'>{t("pages_technologies_description")}</div>
            <div className='flex flex-col space-y-16 pt-36'>
                <TechnologyList title={t("pages_technologies_languages_title")}>
                    <Technology name={"golang"}/>
                    <Technology name={"typescript"} />
                    <Technology name={"python"} />
                    <Technology name={"c"} />
                    <Technology name={"cpp"} />
                    <Technology name={"haskell"} />
                    <Technology name={"kotlin"} />
                </TechnologyList>
                <TechnologyList title={t("pages_technologies_databases_title")}>
                    <Technology name={"graphql"}/>
                    <Technology name={"mongodb"}/>
                    <Technology name={"mysql"}/>
                </TechnologyList>
                <TechnologyList title={t("pages_technologies_cloud_title")}>
                    <Technology name={"aws"}/>
                    <Technology name={"azure"}/>
                </TechnologyList>
                <TechnologyList title={t("pages_technologies_infrastructure_title")}>
                    <Technology name={"terraform"}/>
                    <Technology name={"docker"}/>
                </TechnologyList>
                <TechnologyList title={t("pages_technologies_web_title")}>
                    <Technology name={"react"}/>
                    <Technology name={"django"}/>
                </TechnologyList>
            </div>
        </div>
    );
}


export default Technologies;