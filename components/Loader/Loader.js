import styles from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={styles.pulseContainer}>
      <div className={`${styles.pulseBubble} ${styles.pulseBubble1} `}></div>
      <div className={`${styles.pulseBubble} ${styles.pulseBubble2} `}></div>
      <div className={`${styles.pulseBubble} ${styles.pulseBubble3} `}></div>
    </div>
  )
}
