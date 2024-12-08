import styles from './Aboutme.module.css'
import Contact from "../../components/contact/Contact"
import Divisor from "../../components/divisor/Divisor"
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router'

function Aboutme() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects")
  }

  const goTools = () => {
    navigate("/tools")
  }

  return (
    <main className={styles.ctAboutme}>
        <Divisor position="up"/>
        <Contact/>
        <div className={styles.ctContentAbout}>
          <p className={styles.txtTitle}>About Me</p>
          <p className={styles.txtParagraph}>Hi! I&apos;m Alexandra and I&apos;m a Fullstack developer creative and with initiative, interested in the world of programming, I&apos;m passionate about solving problems in an efficient way and with a lot of emphasis on detail, I have more than 10 years of experience as an architect which gives me extensive knowledge in design and user experience, in addition to my studies in UX Design and sustainability that allow me to understand current problems in a global way.</p>
          <p className={styles.txtParagraph}>With these knowledge, skills and the <button className={styles.btTools} onClick={goTools}><strong>tools</strong></button> I handle I feel that I can contribute to the needs of society through programming.</p>
          <Button text="PROJECTS" style="btStroke" onclick={handleClick}/>
        </div >
      <Divisor position="down"/>
    </main>
  )
}

export default Aboutme