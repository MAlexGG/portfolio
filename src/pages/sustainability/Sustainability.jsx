import Navbar from '../../components/navbar/Navbar'
import styles from './Sustainability.module.css'
import Divisor from '../../components/divisor/Divisor'
import digitalBeacon from '../../../public/img/icons/digitalBeacon.jpg'
import pageSpeed from '../../../public/img/icons/pageSpeed.jpg'
import greenHost from '../../../public/img/icons/green_host.png'
import carbonCalculator from '../../../public/img/icons/websiteCarbonCalculator.jpg'

function Sustainability() {
  return (
    <div className={styles.ctSustainability}>
      <Divisor position="up"/>
      <Navbar/>
      <main className={styles.ctContent}>
        <p className={styles.txtTitle}>Green Software</p>
        <p className={styles.txtParagraph}>For me, it&apos;s essential to live consciously on this planet and take care of it, embracing all its complexity and seeking harmony with everything that surrounds us. I know that achieving this balance within today&apos;s system is challenging, but not impossible. Every small step counts and can transform how we relate to our environment.</p>
        <p className={styles.txtParagraph}>Technology and the internet are highly polluting, and I want to challenge myself to prove that it&apos;s possible to develop software with minimal environmental impact.</p>
        <p className={styles.txtParagraph}>I have analyzed this website using several tools that measure the carbon footprint of web pages. According to Digital Beacon, this portfolio performs amazingly well in terms of its environmental impact.</p>
        <section className={styles.ctGreen}>
          <img className={styles.imgFootprint} src={digitalBeacon} alt="Digital Beacon rate is that this website is amazing when it comes to its carbon footprint" />
          <img className={styles.imgFootprint} src={pageSpeed} alt="page speed insights result" />
          <img className={styles.imgFootprint} src={greenHost} alt="This website is hosted Green - checked by thegreenwebfoundation.org"/>
          <img className={styles.imgFootprint} src={carbonCalculator} alt="website carbon calculator rate" />
        </section>
      </main>
      <Divisor position="down"/>
    </div>
  )
}

export default Sustainability