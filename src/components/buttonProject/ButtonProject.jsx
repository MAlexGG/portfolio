/* eslint-disable react/prop-types */
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations';
import styles from './ButtonProject.module.css'

function ButtonProject({text, link, btStyle}) {

  const { language } = useLanguage();
  const t = translations[language].lang.code;

  return (
    <>
    {
        link !== "" 
        ? 
        <a className={styles[btStyle]} href={link} rel="noreferrer" target="_blank">{text}</a> 
        :
        <button disabled className={`${styles[btStyle]} ${styles.btNotReady}`}>{`${text} ${t === "en" ? "NOT READY" : "NO LISTO"}`}</button>
    }
    </>
    
  )
}

export default ButtonProject