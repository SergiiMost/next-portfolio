import Link from "next/link"
import { useEffect } from "react"
import { useToggleState } from "../../hooks/useToggleState"
import { useGetWindowWidth } from "../../hooks/useGetWindowWidth"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const windowWidth = useGetWindowWidth()
  const [clicked, toggleClicked] = useToggleState(false)

  useEffect(() => {
    if (windowWidth < 550) {
      clicked ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "visible")
    }
  }, [clicked])

  useEffect(() => {
    let overflow = document.body.style.overflowY
    if (windowWidth > 550 && overflow === "hidden") {
      console.log("action")
      document.body.style.overflowY = "visible"
    }
    if (windowWidth < 550 && clicked === true) {
      document.body.style.overflowY = "hidden"
    }
  }, [windowWidth])

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>
          <img src='/logo.png' className={styles.logo}></img>
        </a>
      </Link>
      <div className={`${styles.mobileOverlay} ${clicked ? styles.mobileOverlayActive : ""}`}></div>
      <div className={styles.linksWrapper}>
        <ul className={`${styles.ulWrapper} ${clicked ? styles.ulMobileActive : ""}`}>
          <li className={styles.liWrapper}>
            <Link href='/#about'>
              <a
                className={styles.navLink}
                onClick={() => {
                  toggleClicked()
                }}
              >
                about
              </a>
            </Link>
          </li>

          <li className={styles.liWrapper}>
            <Link href='/#projects'>
              <a
                className={styles.navLink}
                onClick={() => {
                  toggleClicked()
                }}
              >
                projects
              </a>
            </Link>
          </li>
          <li className={styles.liWrapper}>
            <Link href='/#contacts'>
              <a
                className={styles.navLink}
                onClick={() => {
                  toggleClicked()
                }}
              >
                contacts
              </a>
            </Link>
          </li>
          <li className={styles.liWrapper}>
            <Link href='/blog'>
              <a className={styles.navLink}>blog</a>
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.burger} ${clicked ? styles.burgerToggled : ""}`}
          onClick={() => {
            toggleClicked()
          }}
        >
          <div className={` ${styles.burgerLine} ${styles.burgerLine__1}`}></div>
          <div className={` ${styles.burgerLine} ${styles.burgerLine__2}`}></div>
          <div className={` ${styles.burgerLine} ${styles.burgerLine__3}`}></div>
        </div>
      </div>
    </nav>
  )
}
