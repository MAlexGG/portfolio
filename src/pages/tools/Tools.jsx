import styles from './Tools.module.css'
import Navbar from '../../components/navbar/Navbar'
import Divisor from '../../components/divisor/Divisor'

function Tools() {
  return (
    <div className={styles.ctTools}>
      <Divisor position="up"/>
      <div className={styles.ctNavbar}>
        <Navbar/> 
      </div>
       
      <div className={styles.ctContent}>
        <p className={styles.txtTitle}>Technologies and Tools</p>
        <p className={styles.txtParagraph}>I have studied several bootcamps and courses. I learned to do projects with agile methodologies and applying SOLID, developing with TDD and doing unit and feature tests. Also I completed a certificate in UX Design, and I have green software certificates because green coding is something that I&apos;m interested in.</p> 
        <p className={styles.txtParagraph}>The tools that I have been using for UX/UI are Adobe Illustrator, Adobe Photoshop, Figma, Adobe XD. For agile methodologies are Jira, Trello, Miró. The technologies for develoment that I work on are HTML5, CSS3, Bootstrap, Tailwindcss, Sass, Javascript, React.js, Next.js, Styled Components, CSS Modules, Vue.js, PHP, Laravel, Java, Spring Boot, Python, MySQL, PostgreSQL, Composer, Node.js, Axios, Json-server and more... For testing I use Jest, React Library Testing, Vitest, PHPUnit, JUnit and most of my projects are in Github.</p>
    </div>
      <Divisor position="down"/>
    </div>
  )
}

export default Tools