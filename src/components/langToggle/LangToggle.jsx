import { useLanguage } from "../../context/LanguageContext";
import styles from './LangToggle.module.css'
import { translations } from '../../translations'

const LangToggle = () => {

    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].lang;
    
    return (
        <div className={styles.ctLangToggle}>
            <div className={`${styles.ctToggle} ${language === "es" ? styles.es : ""}`} onClick={toggleLanguage}>
                <div className={`${styles.btToggle} ${language === "es" ? styles.en : ""}`}>
                    <p className={styles.txtToggle}>{language === "en" ? "ES": "EN"}</p>
                </div>
            </div>
            <p className={styles.btLabel}>{t.language}</p>
        </div>
    )

}

export default LangToggle;