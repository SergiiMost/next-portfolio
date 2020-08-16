import styles from "./Heading.module.css"

export default function Heading(props) {
  const Tag = props.tag
  return (
    <div className={styles.headingWrapper}>
      <Tag className={`${styles.headingGradient} ${styles.headingPadding}`}>
        <span>{props.children}</span>
      </Tag>
    </div>
  )
}
