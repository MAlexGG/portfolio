/* eslint-disable react/prop-types */
import styles from './Title.module.css'
import Letters from "../letters/Letters";
import { useEffect } from 'react';

function Title({titleList, setVisible}) {

  const array = titleList.split(" ");

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 8000)
  }, []) 

  return (
    <div className={styles.ctTitle}>
    {
        array.map((word, index) => (
            <Letters key={index} letters={word}/>
        ))
    }
    </div>
    

    
  )
}

export default Title