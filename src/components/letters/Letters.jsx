import styles from './Letters.module.css'

// eslint-disable-next-line react/prop-types
function Letters({letters}) {

   // eslint-disable-next-line react/prop-types
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