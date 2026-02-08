import styles from './Aboutme.module.css'
import Contact from "../../components/contact/Contact"
import Divisor from "../../components/divisor/Divisor"
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router'
import { useLanguage } from '../../context/LanguageContext'
import {translations} from '../../translations';

function Aboutme() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects")
  }

  const goTools = () => {
    navigate("/tools")
  }

  const {language} = useLanguage();
  const t = translations[language].aboutme;

  return (
    <div className={styles.ctAboutme}>
        <Divisor position="up"/>
        <Contact/>
        <main className={styles.ctContentAbout}>
          <p className={styles.txtTitle}>{t.title}</p>
          <p className={styles.txtParagraph}>{t.paragraph_one}</p>
          <p className={styles.txtParagraph}>{t.paragraph_two}</p>
          <p className={styles.txtParagraph}>{t.paragraph_three_start}
            <button className={styles.btTools} onClick={goTools}>
              <strong>{t.tools_button}</strong>
            </button>
          {t.paragraph_three_end}</p>
          <Button text={t.projects_button} style="btStroke" onclick={handleClick}/>
          <h1 className={styles.txtMain}>{t.h1}</h1>
        </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Aboutme