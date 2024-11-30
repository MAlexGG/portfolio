import styles from './Tools.module.css'
import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'

function Tools() {
  return (
    <div className={styles.ctTools}>
      <Divisor position="up"/>
      <Navbar/>  
      <Divisor position="down"/>
    </div>
  )
}

export default Tools