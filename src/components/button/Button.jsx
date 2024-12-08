/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button({text, style, onclick}) {
  return (
    <button className={`${styles.btMain} ${styles[style]}`} onClick={onclick}>{text}</button>
  )
}

export default Button