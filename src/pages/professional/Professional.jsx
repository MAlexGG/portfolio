import { useState } from 'react';
import styles from './Professional.module.css'
import professionalList from '../../assets/data/professional.json'
import Title from '../../components/title/Title';
import Navbar from '../../components/navbar/Navbar';
import EmptyCard from '../../components/emptyCard/EmptyCard';
import Card from '../../components/card/Card';
import { useLocation } from 'react-router-dom';

function Professional() {

    const location = useLocation();
    const [visible, setVisible] = useState(location.state);
    const data = professionalList.projects;

  return (
    <div className={styles.ctProfessional}>
       {
       visible ? 
       <Title titleList="PROFESSIONAL PERSONAL PROJECTS" setVisible={setVisible}/>
        :
        <div className={styles.ctContent}>
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