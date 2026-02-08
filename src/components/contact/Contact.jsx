import styles from './Contact.module.css'
import ExternalLink from '../externalLink/ExternalLink'
import pdf from '../../assets/pdf/CV_Galarza_Gallardo_EN.pdf'
import refresh from '/img/icons/refresh.svg'
import contact from '/img/icons/contact.svg'
import linkedin from '/img/icons/linkedin.svg'
import cv from '/img/icons/cv.svg'
import github from '/img/icons/github.svg'
import { useNavigate } from 'react-router'
import LangToggle from '../langToggle/LangToggle'

function Contact() {
    
    const navigate = useNavigate();
    const handleRefresh = () => {
        navigate("/");
    }

  return (
    <header className={styles.ctHeader}>
        <nav className={styles.ctLinks}>
            <ExternalLink href="mailto:alexandragalarzag@gmail.com" image={contact} text="e-mail" alt="link to contact via email"/>
            <ExternalLink href="http://www.linkedin.com/in/magalarza" image={linkedin} text="linkedIn" alt="link to linkedin profile"/>
            <ExternalLink href={pdf} image={cv} text="cv" alt="link to download curriculum vitae"/>
            <ExternalLink href="https://github.com/MAlexGG" image={github} text="github" alt="link to github profile"/>
        </nav>
        <div className={styles.ctStates}>
            <button className={styles.btRefresh} onClick={handleRefresh}>
                <img className="img-refresh" src={refresh} alt="refresh button" />
                <p className={styles.btLabel}>refresh</p>
            </button>
            <LangToggle/>
        </div>
    </header>
  )
}

export default Contact