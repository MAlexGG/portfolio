import { createContext, useContext, useState } from "react"

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "en" ? "es" : "en"));
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);