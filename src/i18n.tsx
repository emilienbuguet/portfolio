import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import french from "./translations/french.json"
import english from "./translations/english.json"

const resources = {
    en: {
        translation: english
    },
    fr: {
        translation: french
    }
}

i18next.use(initReactI18next).init({resources, lng:"en"});

export default i18next;