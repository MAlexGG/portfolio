import home from '../../assets/img/home.svg'
import aboutme from '../../assets/img/aboutme.svg'
import tools from "../../assets/img/tools.svg";
import projects from "../../assets/img/projects.svg";
import green from "../../assets/img/green.svg";
import styles from './Navbar.module.css'
import InternalLink from '../internalLink/InternalLink';

function Navbar() {

  return (
    <nav className={styles.ctNav}>
        <InternalLink link="/" image={home} alt="navigation to home page" text="home"/>
        <InternalLink link="/aboutme" image={aboutme} alt="navigation to about me page" text="about me"/>
        <InternalLink link="/projects" image={projects} alt="navigation to projects page" text="projects"/>
        <InternalLink link="/tools" image={tools} alt="navigation to tools page" text="tools"/>
        <InternalLink link="/sustainability" image={green} alt="navigation to green page" text="green"/>
    </nav>
  )
}

export default Navbar