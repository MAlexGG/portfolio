/* eslint-disable react/prop-types */
import styles from './ExternalLink.module.css'

function ExternalLink({href, image, alt, text}) {
  return (
    <div className={styles.ctIco}>
        <a href={href} target="_blank" rel='noopener noreferrer'><img className={styles.imgContact} src={image} alt={alt} /></a> 
        <p className={styles.btLabelAbout}>{text}</p>
    </div>
  )
}

export default ExternalLink