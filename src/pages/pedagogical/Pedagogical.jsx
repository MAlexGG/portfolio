import styles from './Pedagogical.module.css'
import Title from '../../components/title/Title'
import { useState } from 'react'
import pedagogicalList from '../../assets/data/pedagogical.json'
import Card from '../../components/card/Card';

function Pedagogical() {

  const [visible, setVisible] = useState(true);
  const data = pedagogicalList.projects;


  return (
    <div className={styles.ctPedagogical}>
       {
       visible ? 
       <Title titleList="PEDAGOGICAL PROJECTS" setVisible={setVisible}/>
        :
        <div className={styles.ctCards}>
          {data?.map((card, index) => (
            <Card key={index} card={card}/>
          ))}
        </div>
      }

        
    </div>
  )
}

export default Pedagogical