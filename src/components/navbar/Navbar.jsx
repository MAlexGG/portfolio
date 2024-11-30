import { useNavigate } from 'react-router';
import home from '../../assets/img/home.svg'
import tools from "../../assets/img/tools.svg";
import projects from "../../assets/img/projects.svg";
import green from "../../assets/img/green.svg";
import styles from './Navbar.module.css'
import InternalLink from '../internalLink/InternalLink';

function Navbar() {

  return (
    <nav className={styles.ctNav}>
        <InternalLink link="/" image={home} alt="navigation to home page" text="home"/>
        <InternalLink link="/projects" image={projects} alt="navigation to projects page" text="projects"/>
        <InternalLink link="/tools" image={tools} alt="navigation to tools page" text="tools"/>
        <InternalLink link="/sustainability" image={green} alt="navigation to green page" text="green"/>
    </nav>
  )
}

export default Navbar