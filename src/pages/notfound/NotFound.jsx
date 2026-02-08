import { useLanguage } from '../../context/LanguageContext';
import styles from './NotFound.module.css'
import { translations } from '../../translations'

function NotFound() {

  const { language } = useLanguage();
  const t = translations[language].notfound;

  return (
    <main className={styles.ctNotFound}>
        <h2 className={styles.txtTitle}>{t.title}</h2>
    </main>

  )
}

export default NotFound