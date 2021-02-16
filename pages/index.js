import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Wrapper from '../components/Wrapper/Wrapper'
import Heading from '../components/Heading/Heading'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import Footer from '../components/Footer/Footer'
import { FaChevronRight, FaReact, FaNodeJs, FaTrello } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiVisualstudio } from 'react-icons/di'
import { MdLaunch, MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsBoxArrowRight } from 'react-icons/bs'
import styles from '../styles/page-styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergii Mostovyi - personal website</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta
          name='description'
          content="Sergii Mostovyi's personal website that displays his interests, skills, projects, and contact info."
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>

      <header className={styles.header}>
        <Wrapper>
          <Navbar></Navbar>
          <div className={styles.lightBackground}></div>
          <div className={styles.headerContent}>
            <div className={styles.headerTextWrapper}>
              <h1 className={styles.headerHeading}>
                <span className='u-displayBlock'>Hi, I'm Sergii Mostovyi,</span>
                <span className='u-displayBlock'>a Web Developer</span>
                <span className='u-displayBlock'>based in Toronto</span>
                <Link href='#about'>
                  <a className={styles.headerButton}>Learn more</a>
                </Link>
              </h1>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src='/undraw.svg'
                className={styles.headerImage}
                alt='image showing a person looking at some code'
              ></img>
            </div>
          </div>
          <div className={styles.arrowWrapper}>
            <img src='/arrow.svg' className={styles.arrow} alt='an arrow pointing down'></img>
          </div>
        </Wrapper>
      </header>

      <main>
        <section className={styles.about} id='about'>
          <Wrapper>
            <Heading tag='h2'>about.</Heading>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.aboutTextWrapper}>
                <div className={styles.aboutIconWraper}>
                  <FaChevronRight color='FF7020' size='2.2rem' />
                </div>
                <p className={styles.aboutText}>
                  I’m a developer who also designs, with a keen interest in web technology and video games.
                </p>
              </div>
              <div className={styles.aboutTextWrapper}>
                <div className={styles.aboutIconWraper}>
                  <FaChevronRight color='FF7020' size='2.2rem' />
                </div>
                <p className={styles.aboutText}>I’m able to quickly learn new tools and technologies when needed.</p>
              </div>
              <div className={styles.aboutTextWrapper}>
                <div className={styles.aboutIconWraper}>
                  <FaChevronRight color='FF7020' size='2.2rem' />
                </div>
                <p className={styles.aboutText}>
                  I’m always motivated by a challenge and like to be well-organized to deliver consistent results.
                </p>
              </div>
              <div className={styles.technologiesAndToolsWrapper}>
                <div className={styles.technologies}>
                  <div className={styles.aboutTextWrapper}>
                    <div className={styles.aboutIconWraper}>
                      <FaChevronRight color='FF7020' size='2.2rem' />
                    </div>
                    <p className={styles.aboutText}>Preferred web stack:</p>
                  </div>
                  <div className={styles.aboutListWrapper}>
                    <div className={styles.technologieWrapper}>
                      <FaReact size='2.4rem' color='#61dafb' />
                      <span>
                        <u>React</u>- UI library
                      </span>
                    </div>
                    <div className={styles.technologieWrapper}>
                      <img src='/next.svg' alt='next logo'></img>
                      <span>
                        <u>Next.js</u> - React Framework{' '}
                      </span>
                    </div>
                    <div className={styles.technologieWrapper}>
                      <FaNodeJs size='2.4rem' color='#689f63' />
                      <span>
                        <u>Node.js</u> - JavaScript Runtime
                      </span>
                    </div>
                    <div className={styles.technologieWrapper}>
                      <DiMongodb size='2.4rem' color='#116149' />
                      <span>
                        <u>MongoDB</u> - NoSQL Database
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.tools}>
                  <div className={styles.aboutTextWrapper}>
                    <FaChevronRight color='FF7020' size='2.2rem' />
                    <p className={styles.aboutText}>Tools:</p>
                  </div>
                  <div className={styles.aboutListWrapper}>
                    <div className={styles.toolWrapper}>
                      <DiVisualstudio size='2.6rem' color='#0082cf' />
                      <span>
                        <u>VS Code</u> - Code Editor
                      </span>
                    </div>
                    <div className={styles.toolWrapper}>
                      <img src='/figma.svg' alt='figma logo'></img>
                      <span>
                        <u>Figma</u> - Interface Design
                      </span>
                    </div>
                    <div className={styles.toolWrapper}>
                      <FaTrello size='2.4rem' color='#0278bf' />
                      <span>
                        <u>Trello</u> - Todo / Managment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>

        <section className={styles.projects} id='projects'>
          <Wrapper>
            <Heading tag='h2'>projects.</Heading>
            <div className={styles.projectWrapper}>
              <div className={styles.projectImageWrapper}>
                <img src='/shopify_small.png' alt='a screenshot of a project' className={styles.projectImage}></img>
              </div>
              <div className={styles.projectDescriptionWrapper}>
                <h3 className={styles.projectHeading}>
                  <u>Shopify's internship challenge (2021)</u>
                </h3>
                <p className={styles.projectText}>
                  a webpage that can search OMDB for movies, and allow the user to save their favorite films they feel
                  should be up for nomination.
                </p>
                <span>technologies: React, CSS </span>
                <div className={styles.projectLinks}>
                  <a
                    href='https://sergiimost.github.io/shoppies/'
                    className={styles.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <MdLaunch color='#3C61E4' size='2rem' />
                    <span className={styles.linkText}>visit</span>
                  </a>
                  <a
                    href='https://github.com/SergiiMost/shoppies'
                    className={styles.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub color='#3C61E4' size='2rem' />
                    <span className={styles.linkText}>code</span>
                  </a>
                  <Link href='/shopify-internship-challenge'>
                    <a className={styles.projectLink}>
                      <BsBoxArrowRight color='#3C61E4' size='2rem' />
                      <span className={styles.linkText}>read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.projectWrapper}>
              <div className={styles.projectImageWrapper}>
                <img src='/so_small.png' alt='a screenshot of a project' className={styles.projectImage}></img>
              </div>
              <div className={styles.projectDescriptionWrapper}>
                <h3 className={styles.projectHeading}>
                  <u>stackoverflow filter</u>
                </h3>
                <p className={styles.projectText}>
                  a web app that makes it easy to filter out good questions ( typically 3 upvotes or more ) within
                  selected period of time on Stack Overflow
                </p>
                <span>technologies: React, SCSS </span>
                <div className={styles.projectLinks}>
                  <a
                    href='https://sergiimost.github.io/so-filter/'
                    className={styles.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <MdLaunch color='#3C61E4' size='2rem' />
                    <span className={styles.linkText}>visit</span>
                  </a>
                  <a
                    href='https://github.com/SergiiMost/so-filter'
                    className={styles.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub color='#3C61E4' size='2rem' />
                    <span className={styles.linkText}>code</span>
                  </a>
                  <Link href='/stackoverflow-filter'>
                    <a className={styles.projectLink}>
                      <BsBoxArrowRight color='#3C61E4' size='2rem' />
                      <span className={styles.linkText}>read more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <ComingSoon height='large' /> */}
          </Wrapper>
        </section>

        <section className={styles.contacts} id='contacts'>
          <Wrapper>
            <Heading tag='h2'>contacts.</Heading>
            <div className={styles.contactLinksWrapper}>
              <a
                href='https://www.linkedin.com/in/sergii-mostovyi/'
                target='_blank'
                className={styles.contactLink}
                rel='noreferrer'
              >
                <FaLinkedin color='3C61E4' size='3.8rem' />
              </a>
              <a href='mailto:s.v.mostovoyi@gmail.com' target='_blank' className={styles.contactLink} rel='noreferrer'>
                <MdEmail color='3C61E4' size='3.8rem' />
              </a>
              <a href='https://github.com/SergiiMost' target='_blank' className={styles.contactLink} rel='noreferrer'>
                <FaGithub color='3C61E4' size='3.8rem' />
              </a>
            </div>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
