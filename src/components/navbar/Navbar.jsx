/* eslint-disable react/prop-types */
import home from '../../assets/img/home.svg'
import tools from "../../assets/img/tools.svg";
import projects from "../../assets/img/projects.svg";
import green from "../../assets/img/green.svg";
import styles from './Navbar.module.css'
import InternalLink from '../internalLink/InternalLink';

function Navbar({background}) {

  return (
    <nav className={background == "dark" ? `${styles.ctNav} ${styles.dark}`: styles.ctNav}>
        <InternalLink link="/aboutme" image={home} alt="navigation to about me page" text="home" background={background}/>
        <InternalLink link="/projects" image={projects} alt="navigation to projects page" text="projects" background={background}/>
        <InternalLink link="/tools" image={tools} alt="navigation to tools page" text="tools" background={background}/>
        <InternalLink link="/sustainability" image={green} alt="navigation to green page" text="green" background={background}/>
    </nav>
  )
}

export default Navbar