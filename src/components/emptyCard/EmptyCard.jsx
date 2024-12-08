import styles from './EmptyCard.module.css'

function EmptyCard() {
  return (
    <div className={styles.ctEmptyCard}>
        <h3 className={styles.txtTitle}>SOON...</h3>
        <p className={styles.txtSubtitle}>happy to find my next project...</p>
    </div>
    
  )
}

export default EmptyCard