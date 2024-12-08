import { useState } from 'react';
import styles from './Professional.module.css'
import professionalList from '../../assets/data/professional.json'
import Title from '../../components/title/Title';
import Navbar from '../../components/navbar/Navbar';
import EmptyCard from '../../components/emptyCard/EmptyCard';
import Card from '../../components/card/Card';

function Professional() {

    const [visible, setVisible] = useState(true);
    const data = professionalList.projects;

  return (
    <div className={styles.ctProfessional}>
       {
       visible ? 
       <Title titleList="PROFESSIONAL PERSONAL PROJECTS" setVisible={setVisible}/>
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

export default Professional