import Link from "next/link"
import { BsBoxArrowRight } from "react-icons/bs"
import styles from "./BlogCard.module.css"

export default function BlogCard({ title, timeUpdated, url }) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardHeading}>{title}</h2>
      <div className={styles.secondaryContentWrapper}>
        <span className={styles.greySpan}>last updated: {timeUpdated}</span>
        <Link href={url}>
          <a className={styles.link}>
            <span>read more</span>
            <BsBoxArrowRight size='2.2rem' color='#3c61e4' />
          </a>
        </Link>
      </div>
    </div>
  )
}
