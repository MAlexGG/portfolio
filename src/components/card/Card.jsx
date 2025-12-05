/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Card.module.css'
import ButtonProject from '../buttonProject/ButtonProject';
import { Link } from 'react-router-dom';

function Card({card}) {

    const {id, title, subtitle, prototype, website, repository} = card;
    const [flip, setFlip] = useState(true);

    const handleFlip = () => {
        setFlip(!flip);
    }

  return (
    <div className={flip ? styles.flipContainer : `${styles.flipContainer} ${styles.clicked}`} onClick={handleFlip} tabIndex="0">
        <div className={styles.flipper}>
            <section className={styles.front}>
                <h3 className={styles.txtTitle}>{title}</h3>
                <p className={styles.txtSubtitle}>{subtitle}</p>
            </section>
            <section className={styles.back}>
                <Link to={`/project/${id}`} state={card}>
                    <button className={styles.btInfo}>i</button>
                </Link>
                <ButtonProject link={prototype} text="PROTOTYPE" btStyle="btStroke"/>
                <ButtonProject link={website} text="WEBSITE" btStyle="btFill"/>
                <ButtonProject link={repository} text="REPOSITORY" btStyle="btStroke"/>
            </section>
        </div>
    </div>
  )
}

export default Card