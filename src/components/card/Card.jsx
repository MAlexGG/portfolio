/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Card.module.css'

function Card({card}) {

    const {title, subtitle} = card;
    const [flip, setFlip] = useState(true);

    const handleFlip = () => {
        setFlip(!flip);
    }

  return (
    <div className={flip ? styles.flipContainer : `${styles.flipContainer} ${styles.clicked}`} onClick={handleFlip}>
        <div className={styles.flipper}>
            <div className={styles.front}>
                <h3 className={styles.txtTitle}>{title}</h3>
                <p className={styles.txtSubtitle}>{subtitle}</p>
            </div>
            <div className={styles.back}>
                <p>{title} : Este es el back</p>
            </div>

        </div>
    </div>
  )
}

export default Card