/* eslint-disable react/prop-types */
import styles from './ButtonProject.module.css'

function ButtonProject({text, link, btStyle}) {

  return (
    <>
    {
        link !== "" 
        ? 
        <a className={styles[btStyle]} href={link} rel="noreferrer" target="_blank">{text}</a> 
        :
        <button disabled className={`${styles[btStyle]} ${styles.btNotReady}`}>{text} NOT READY</button>
    }
    </>
    
  )
}

export default ButtonProject