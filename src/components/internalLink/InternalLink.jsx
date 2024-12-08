/* eslint-disable react/prop-types */
import { NavLink } from 'react-router'
import styles from './InternalLink.module.css'

function InternalLink({link, image, alt, text, background}) {

  return (
    <NavLink to={link} className={({isActive}) => isActive ? styles.ctNone : styles.ctIco}>
        <img className={background  == "dark" ? `${styles.imgNavbar} ${styles.imgMainColor}` : styles.imgNavbar} src={image} alt={alt} />
        <p className={background  == "dark" ? `${styles.txtLabel} ${styles.txtMainColor}`: styles.txtLabel}>{text}</p>
    </NavLink>
  )
}

export default InternalLink