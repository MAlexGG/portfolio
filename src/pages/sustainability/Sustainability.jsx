import Navbar from '../../components/navbar/Navbar'
import styles from './Sustainability.module.css'
import Divisor from '../../components/divisor/Divisor'
import digitalBeacon from '../../../public/img/icons/digitalBeacon.jpg'
import pageSpeed from '../../../public/img/icons/pageSpeed.jpg'
import greenHost from '../../../public/img/icons/green_host.png'
import carbonCalculator from '../../../public/img/icons/websiteCarbonCalculator.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../translations'

function Sustainability() {

  const { language } = useLanguage();
    const t = translations[language].green; 

  return (
    <div className={styles.ctSustainability}>
      <Divisor position="up"/>
      <Navbar/>
      <main className={styles.ctContent}>
        <p className={styles.txtTitle}>{t.title}</p>
        <p className={styles.txtParagraph}>{t.paragraph_one}</p>
        <p className={styles.txtParagraph}>{t.paragraph_two}</p>
        <p className={styles.txtParagraph}>{t.paragraph_three}</p>
        <section className={styles.ctGreen}>
          <img className={styles.imgFootprint} src={digitalBeacon} alt={t.alt_digital_beacon} />
          <img className={styles.imgFootprint} src={pageSpeed} alt={t.alt_page_speed} />
          <img className={styles.imgFootprint} src={greenHost} alt={t.alt_green_host}/>
          <img className={styles.imgFootprint} src={carbonCalculator} alt={t.alt_carbon_calculator} />
        </section>
      </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Sustainability