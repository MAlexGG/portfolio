import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'
import styles from './Projects.module.css' 
import { Link } from 'react-router'

function Projects() {
  return (
    <div className={styles.ctProjects}>
      <Divisor position="up"/>
      <div className={styles.ctNavbar}>
        <Navbar/>
      </div>
      <div className={styles.ctProjectType}>
          <Link to={"/pedagogical"} className={styles.btProjects}>Pedagogical Projects</Link>
          <Link to={"/"} className={styles.btProjects}>Professional & Personal Projects</Link>
      </div>
      <Divisor position="down"/>
    </div>
  )
}

export default Projects