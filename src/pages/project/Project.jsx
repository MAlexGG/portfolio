import { useLocation } from 'react-router-dom'
import styles from './Project.module.css'

function Project() {

    const location = useLocation();

    console.log(location.state)
  return (
    <div className={styles.ctProject}>Project</div>
  )
}

export default Project