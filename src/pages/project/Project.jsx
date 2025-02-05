import { Link, useLocation } from 'react-router-dom'
import styles from './Project.module.css'
import close from '/img/icons/close.svg'

function Project() {

    const location = useLocation();
    const data = location.state; 

  return (
    <div className={styles.ctProject}>
      <Link to={`/${data.category}`} className={styles.btProjectClose}><img src={close} alt="close button" /></Link>
      <div className={styles.ctProjectImg}>
          <img className={styles.imgProjectImg} src={`/portfolio/img/ui/${data.img}`} alt={`design UI or schema for ${data.title}`} /> 
      </div>
      <div className={styles.ctProjectTxt}>
          <h2 className={styles.txtProjectTitle}>{data.title}</h2>
          <p className={styles.txtProjectDesc}>{data.description}</p>
          <p className={`${styles.txtProjectDesc} ${styles.txtItalic}`}><strong>Authors:</strong> {data.team}</p>
      </div>
    </div>
  )
}

export default Project