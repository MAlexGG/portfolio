import styles from './Contact.module.css'
import ExternalLink from '../externalLinks/ExternalLink'
import pdf from '../../assets/pdf/CV_Galarza_Gallardo_EN.pdf'
import refresh from '../../assets/img/refresh.svg'
import contact from '../../assets/img/contact.svg'
import linkedin from '../../assets/img/linkedin.svg'
import cv from '../../assets/img/cv.svg'
import github from '../../assets/img/github.svg'
import { useNavigate } from 'react-router'

function Contact() {
    
    const navigate = useNavigate();
    const handleRefresh = () => {
        navigate("/");
    }

  return (
    <header className={styles.ctMain}>
        <button className={styles.btRefresh} onClick={handleRefresh}>
            <img className="img-refresh" src={refresh} alt="refresh button" />
            <p className={styles.btLabel}>refresh</p>
        </button>
        <div className={styles.ctLinks}>
            <ExternalLink href="mailto:alexandragalarzag@gmail.com" image={contact} text="e-mail" alt="link to contact via email"/>
            <ExternalLink href="http://www.linkedin.com/in/magalarza" image={linkedin} text="linkedIn" alt="link to linkedin profile"/>
            <ExternalLink href={pdf} image={cv} text="cv" alt="link to download curriculum vitae"/>
            <ExternalLink href="https://github.com/MAlexGG" image={github} text="github" alt="link to github profile"/>
        </div>
    </header>
  )
}

export default Contact