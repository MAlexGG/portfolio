import Letters from '../../components/letters/Letters'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.ctHome}>
      <Letters letters="PORTFOLIO"/>
      <p className={styles.txtName}>María Alexandra Galarza Gallardo</p>
  </div>
  )
}

export default Home