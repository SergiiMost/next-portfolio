import Wrapper from "../Wrapper/Wrapper"
import { MdCopyright, MdEmail } from "react-icons/md"
import { FcLike } from "react-icons/fc"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerLeft}>
            <div className='u-alignCenter u-mb-05 '>
              <MdCopyright size='2rem' />
              <span>Sergii Mostovyi, 2021</span>
            </div>
            <div className='u-alignCenter'>
              <MdEmail size='2rem' />
              <span>s.v.mostovoyi@gmail.com</span>
            </div>
          </div>
          <div className={styles.footerRight}>
            <p>
              Built with <FcLike /> using{" "}
              <a href='https://nextjs.org/' target='_blank' className={styles.footerLink} rel='noreferrer'>
                Next.js
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
