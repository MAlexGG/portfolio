import Navbar from '../../components/navbar/Navbar'
import styles from './Sustainability.module.css'
import Divisor from '../../components/divisor/Divisor'

function Sustainability() {
  return (
    <div className={styles.ctSustainability}>
      <Divisor position="up"/>
      <Navbar/>
      <Divisor position="down"/>
    </div>
  )
}

export default Sustainability