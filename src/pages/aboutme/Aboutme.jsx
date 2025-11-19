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
    <div className={styles.ctAboutme}>
        <Divisor position="up"/>
        <Contact/>
        <main className={styles.ctContentAbout}>
          <p className={styles.txtTitle}>About Me</p>
          <p className={styles.txtParagraph}>Hi! I&apos;m Alexandra and I&apos;m a Full-Stack Developer with a strong foundation in architecture and project management. My journey from designing physical spaces to creating digital products has strengthened my analytical thinking, creativity, and user-centered mindset. I enjoy building clean, maintainable web applications using modern technologies.</p>
          <p className={styles.txtParagraph}>Curious and continuous learner, I&apos;m passionate about technology that improves people&apos;s lives. I aim to contribute what I&apos;ve learned both technically and personally to build meaningful, efficient, and sustainable digital products.</p>
          <p className={styles.txtParagraph}>With these knowledge, skills and the <button className={styles.btTools} onClick={goTools}><strong>tools</strong></button> I handle I feel that I can contribute to the needs of society through development.</p>
          <Button text="PROJECTS" style="btStroke" onclick={handleClick}/>
          <h1 className={styles.txtMain}>María Alexandra Galarza Gallardo&apos;s Portfolio</h1>
        </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Aboutme