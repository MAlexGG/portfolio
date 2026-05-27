import { useState } from 'react';
import styles from './Professional.module.css'
import professionalList from '../../assets/data/professional.json'
import Title from '../../components/title/Title';
import Navbar from '../../components/navbar/Navbar';
import EmptyCard from '../../components/emptyCard/EmptyCard';
import Card from '../../components/card/Card';
import { useLocation } from 'react-router-dom';
import { translations } from '../../translations';
import { useLanguage } from '../../context/LanguageContext';

function Professional() {

    const location = useLocation();
    const [visible, setVisible] = useState(location.state);
    const { language } = useLanguage();
    const t = translations[language].projects.professional;

     const data = professionalList.projects.map(project => ({
      ...project,
      ...t.projects[project.id]
    }))

  return (
    <div className={styles.ctProfessional}>
       {
       visible ? 
       <Title titleList={t.title.toLowerCase()} setVisible={setVisible}/>
        :
        <div className={styles.ctContent}>
          <Navbar background="dark"/>
          <main className={styles.ctCards}>
            <EmptyCard/>
            {data?.map((card, index) => (
              <Card key={index} card={card} lang={translations[language].projects.title}/>
            )).reverse()}
          </main>
        </div>
      }
    </div>
  )
}

export default Professional