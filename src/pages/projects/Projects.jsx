import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'
import styles from './Projects.module.css' 
import { Link } from 'react-router'
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations'

function Projects() {

  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <div className={styles.ctProjects}>
      <Divisor position="up"/>
      <Navbar/>
      <main className={styles.ctProjectType}>
          <Link to={"/pedagogical"} state={true} className={styles.btProjects}>{t.pedagogical}</Link>
          <Link to={"/professional-personal"} state={true} className={styles.btProjects}>{t.professional}</Link>
      </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Projects