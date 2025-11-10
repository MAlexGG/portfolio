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
        <p className={styles.txtParagraph}>I have completed several bootcamps and courses, where I learned to manage projects using agile methodologies and to apply SOLID principles, develop with TDD, and perform unit and feature testing. I also earned a UX Design certificate and hold credentials in Green Software, as sustainable development and green coding are areas I&apos;m passionate about.</p> 
        <p className={styles.txtParagraph}>For UI design, I use tools such as Adobe Illustrator, Photoshop, and Figma. In agile workflows, I rely on Jira and Trello. My development stack includes HTML5, CSS3, JavaScript, React, Next.js, PHP, Laravel, Java, Spring Boot, Python, MySQL, PostgreSQL, Node.js, JWT and more. For testing, I use Jest, React Testing Library, Vitest, PHPUnit, and JUnit, and most of my projects are available on GitHub.</p>
        <p className={styles.txtParagraph}>To assess accessibility, I use Axe DevTools and PageSpeed Insights, and to evaluate sustainability, I rely on Digital Beacon and the Website Carbon Calculator.</p>
    </div>
      <Divisor position="down"/>
    </div>
  )
}

export default Tools