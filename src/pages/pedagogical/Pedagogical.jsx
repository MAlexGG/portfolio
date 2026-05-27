import styles from './Pedagogical.module.css'
import Title from '../../components/title/Title'
import { useState } from 'react'
import pedagogicalList from '../../assets/data/pedagogical.json'
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar'
import EmptyCard from '../../components/emptyCard/EmptyCard';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations'

function Pedagogical() {

  const location = useLocation();
  const [visible, setVisible] = useState(location.state);
  const { language } = useLanguage();
  const t = translations[language].projects.pedagogical.projects;

  const data = pedagogicalList.projects.map(project => ({
    ...project,
    ...t[project.id]
  }))

  return (
    <div className={styles.ctPedagogical}>
       {
       visible ? 
       <Title titleList="PEDAGOGICAL PROJECTS" setVisible={setVisible}/>
        :
        <div className={styles.ctContent}>
          <Navbar background="dark"/>
          <main className={styles.ctCards}>
            <EmptyCard/>
            {data?.map((card, index) => (
              <Card key={index} card={card}/>
            )).reverse()}
          </main>
        </div>
      }
    </div>
  )
}

export default Pedagogical