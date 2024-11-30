import { NavLink } from 'react-router'
import styles from './InternalLink.module.css'

function InternalLink({link, image, alt, text}) {
  return (
    <NavLink to={link} className={({isActive}) => isActive ? styles.ctNone : styles.ctIco}>
        <img className={styles.imgNavbar} src={image} alt={alt} />
        <p className={styles.btLabel}>{text}</p>
    </NavLink>
  )
}

export default InternalLink