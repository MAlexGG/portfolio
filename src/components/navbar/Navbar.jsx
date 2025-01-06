/* eslint-disable react/prop-types */
import home from '/img/icons/home.svg'
import tools from "/img/icons/tools.svg";
import projects from "/img/icons/projects.svg";
import green from "/img/icons/green.svg";
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