import styles from "./Wrapper.module.css"

export default function Wrapper({ children }) {
  return <div className={styles.pageContainer}>{children}</div>
}
