import styles from './Pedagogical.module.css'
import Title from '../../components/title/Title'
import { useState } from 'react'
import pedagogicalList from '../../assets/data/pedagogical.json'
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar'
import EmptyCard from '../../components/emptyCard/EmptyCard';

function Pedagogical() {

  const [visible, setVisible] = useState(true);
  const data = pedagogicalList.projects;


  return (
    <div className={styles.ctPedagogical}>
       {
       visible ? 
       <Title titleList="PEDAGOGICAL PROJECTS" setVisible={setVisible}/>
        :
        <div>
          <Navbar background="dark"/>
          <div className={styles.ctCards}>
            <EmptyCard/>
            {data?.map((card, index) => (
              <Card key={index} card={card}/>
            )).reverse()}
          </div>
        </div>
      }
    </div>
  )
}

export default Pedagogical