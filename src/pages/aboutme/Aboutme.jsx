import styles from './Aboutme.module.css'
import Contact from "../../components/contact/Contact"
import Divisor from "../../components/divisor/Divisor"

function Aboutme() {
  return (
    <main className={styles.ctAboutme}>
        <Divisor/>
        <Contact/>
        <div className={styles.ctContentAbout}>
          <p className={styles.txtTitle}>About Me</p>
          <p className={styles.txtParagraph}>Hi! I'm Alexandra and I'm a Fullstack developer creative and with initiative, interested in the world of programming, I'm passionate about solving problems in an efficient way and with a lot of emphasis on detail, I have more than 10 years of experience as an architect which gives me extensive knowledge in design and user experience, in addition to my studies in UX Design and sustainability that allow me to understand current problems in a global way.</p>
          <p className={styles.txtParagraph}>With these knowledge, skills and the <button className={styles.btTools}><strong>tools</strong></button> I handle I feel that I can contribute to the needs of society through programming.</p>
          <button className={styles.btProjects}>Projects</button>
      </div >
    </main>
  )
}

export default Aboutme