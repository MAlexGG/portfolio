/* eslint-disable react/prop-types */
import home from '/img/icons/home.svg'
import tools from "/img/icons/tools.svg";
import projects from "/img/icons/projects.svg";
import green from "/img/icons/green.svg";
import styles from './Navbar.module.css'
import InternalLink from '../internalLink/InternalLink';
import LangToggle from '../langToggle/LangToggle';
import { translations } from '../../translations'

function Navbar({background}) {

  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className={background == "dark" ? `${styles.ctNav} ${styles.dark}`: styles.ctNav}>
        <InternalLink link="/aboutme" image={home} alt="navigation to about me page" text={t.home} background={background}/>
        <InternalLink link="/projects" image={projects} alt="navigation to projects page" text={t.projects} background={background}/>
        <InternalLink link="/tools" image={tools} alt="navigation to tools page" text={t.tools} background={background}/>
        <InternalLink link="/sustainability" image={green} alt="navigation to green page" text={t.green} background={background}/>
        <div className={styles.ctLangToggle}>
          <LangToggle/>
        </div>
        
    </nav>
  )
}
import { useLanguage } from '../../context/LanguageContext';

export default Navbar