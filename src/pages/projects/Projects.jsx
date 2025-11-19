import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'
import styles from './Projects.module.css' 
import { Link } from 'react-router'

function Projects() {
  return (
    <div className={styles.ctProjects}>
      <Divisor position="up"/>
      <Navbar/>
      <main className={styles.ctProjectType}>
          <Link to={"/pedagogical"} state={true} className={styles.btProjects}>Pedagogical Projects</Link>
          <Link to={"/professional-personal"} state={true} className={styles.btProjects}>Professional & Personal Projects</Link>
      </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Projects