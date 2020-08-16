import Loader from "../Loader/Loader"
import styles from "../ComingSoon/ComingSoon.module.css"

export default function ComingSoon({ height }) {
  return (
    <div className={`${styles.wrapper} ${height === "large" && styles.large}`}>
      <div className={styles.loaderWrapper}>
        <span>Coming soon</span>
        <Loader />
      </div>
    </div>
  )
}
