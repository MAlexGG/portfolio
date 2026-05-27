import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations';
import styles from './EmptyCard.module.css'

function EmptyCard() {

  const { language } = useLanguage();
  const t = translations[language].emptyCard;

  return (
    <div className={styles.ctEmptyCard} tabIndex="0">
        <h3 className={styles.txtTitle}>{t.title}</h3>
        <p className={styles.txtSubtitle}>{t.text}</p>
    </div>
    
  )
}

export default EmptyCard