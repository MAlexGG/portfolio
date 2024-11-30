import Letters from '../../components/letters/Letters'
import styles from './FrontPage.module.css'

function FrontPage() {

  /* useEffect(() => {
    setTimeout(() => {
      navigate("/pedagogical")
    }, 8000)
  }, []) */

  return (
    <div className={styles.ctFrontPage}>
        <Letters letters="PEDAGOGICAL"/>
        <Letters letters="PROJECTS"/>
    </div>
  )
}

export default FrontPage