import styles from './Letters.module.css'

function Letters({letters}) {

   const array = letters.split("");

  return (
    <div className={styles.letters}>
        {
            array.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))
        }        
    </div>
  )
}

export default Letters