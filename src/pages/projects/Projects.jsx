import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'
import styles from './Projects.module.css' 

function Projects() {
  return (
    <div className={styles.ctProjects}>
      <Divisor position="up"/>
      <Navbar/>
      <Divisor position="down"/>
    </div>
  )
}

export default Projects