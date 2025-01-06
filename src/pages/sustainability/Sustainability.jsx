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
      <div className={styles.ctNavbar}>
        <Navbar/>
      </div>
      <div className={styles.ctContent}>
        <p className={styles.txtTitle}>Green Software</p>
        <p className={styles.txtParagraph}>For me it&apos;s important to be on this planet and take care of it, with all the complexity it has, seeing my life as a whole and being in harmony with everything that surrounds us. We know that reaching this level in the system in which we live is very difficult but not impossible, steps can be taken and change the way we relate to our environment. Technologies and internet are very polluting and I want to prove to myself that it&apos;s possible to generate a minimum impact with the software we develop.</p>
        <p className={styles.txtParagraph}>I have calculated this page with different tools that measure the carbon footprint of web pages and the results of my portfolio are the following:</p>
        <div className={styles.ctGreen}>
          <img className={styles.imgFootprint} src={digitalBeacon} alt="Digital Beacon rate is that this website is amazing when it comes to its carbon footprint" />
          <img className={styles.imgFootprint} src={pageSpeed} alt="page speed insights result" />
          <img className={styles.imgFootprint} src={greenHost} alt="This website is hosted Green - checked by thegreenwebfoundation.org"/>
          <img className={styles.imgFootprint} src={carbonCalculator} alt="website carbon calculator rate" />
        </div>
      </div>
      <Divisor position="down"/>
    </div>
  )
}

export default Sustainability