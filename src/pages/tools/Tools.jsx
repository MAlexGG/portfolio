import styles from './Tools.module.css'
import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations'

function Tools() {

  const { language } = useLanguage();
  const t = translations[language].tools;

  return (
    <div className={styles.ctTools}>
      <Divisor position="up"/>
      <Navbar/> 
      <main className={styles.ctContent}>
        <p className={styles.txtTitle}>{t.title}</p>
        <p className={styles.txtParagraph}>{t.paragraph_one}</p> 
        <p className={styles.txtParagraph}>{t.paragraph_two}</p>
        <p className={styles.txtParagraph}>{t.paragraph_three}</p>
    </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Tools