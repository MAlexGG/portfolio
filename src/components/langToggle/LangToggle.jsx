import { useLanguage } from "../../context/LanguageContext";
import styles from './LangToggle.module.css'


const LangToggle = () => {

    const { language, toggleLanguage } = useLanguage();
    
    return (
        <div className={styles.ctLangToggle}>
            <div className={`${styles.ctToggle} ${language === "es" ? styles.es : ""}`} onClick={toggleLanguage}>
                <div className={`${styles.btToggle} ${language === "es" ? styles.en : ""}`}>
                    <p className={styles.txtToggle}>{language === "en" ? "ES": "EN"}</p>
                </div>
            </div>
            <p className={styles.btLabel}>language</p>
        </div>
    )

}

export default LangToggle;