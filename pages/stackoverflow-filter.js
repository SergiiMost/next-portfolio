import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import Navbar from "../components/Navbar/Navbar"
import Heading from "../components/Heading/Heading"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import { BsBoxArrowLeft } from "react-icons/bs"
import { MdThumbUp, MdLaunch } from "react-icons/md"
import { connectToDatabase } from "../utils/mongodb"
import styles from "../styles/page-styles/so-filter.module.css"

export default function SoFilter({ likes }) {
  const top = useRef(null)
  useEffect(() => {
    top.current.scrollTo(0, 0)
  })

  const handleLikeClick = () => {
    setNumberLikes(numberLikes + 1)
    fetch("/api/updateLikes?origin=so-filter", { method: "POST" }).catch((e) => {})
  }
  const [numberLikes, setNumberLikes] = useState(likes)

  return (
    <>
      <Head>
        <title>Sergii Mostovyi - stackoverflow's filter project.</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta name='description' content="This page provides a detailed overview of the 'so-filter' project." />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>

      <header ref={top}>
        <Wrapper>
          <Navbar />
          <Heading tag='h1'>stackoverflow's filter.</Heading>
        </Wrapper>
      </header>

      <main>
        <Wrapper>
          <section>
            <div className={styles.imageWrapper}>
              <figure>
                <img src='/so1.png' className={styles.image} alt='screenshot of a project'></img>
                <figcaption className={styles.imageDescription}>Screenshot of the UI</figcaption>
              </figure>
            </div>
            <div className={styles.description}>
              <h2 className={styles.topicHeader}>Introduction</h2>
              <p className='u-mb-2'>It’s a well-known fact that <b>Stack Overflow (SO)</b> is one of the most valuable practical resources
                used by programmers. It has an amazing community of people who help one another by answering questions.
                Over the years SO accumulated lots of questions and answers that help even experienced programmers to
                fix code bugs or find a correct solution to a problem.
              </p>
              <h2 className={styles.topicHeader}>Project's goal.</h2>
              <p>I’m a huge fan of SO. I’ve noticed that by reading good questions and answers I could learn a lot. SO is
                an amazingly well-engineered project, however, I was missing an ability to filter out good questions
                within a selected time frame. Let me explain in a greater detail.
              </p>
              <p className='u-mb-2'>
                My <b>goal</b> was to be able to read <b>good questions</b> asked within a{" "}
                <b>selected period of time </b>
                (let’s say last 24 - 48 hours). I was particularly interested in <b>new JavaScript questions</b> because
                they had a lot of useful information related to <b>React</b>. I also figured out that good questions
                were typically questions that got <b>3 upvotes</b> or more. Unfortunately, SO’s user interface doesn’t
                have an option (as far as I know) to filter out questions based on{" "}
                <b>upvotes within requested period of time</b>. However, <b>Stack Overflow’s API</b> provides an
                endpoint where required data can be fetched.
              </p>
              <h2 className={styles.topicHeader}>Conclusion.</h2>
              <p className='u-mb-2'>I can’t say that it was a challenging project to implement but it was not only a good opportunity to
                practically use <b>React Hooks</b> and <b>Context API</b> but also to improve my <b>UI/UX skills</b>. It
                was a very fun project to work on, and I use this small web app quite often.
              </p>
              <div className={styles.linksWrapper}>
                <Link href='/#projects'>
                  <a className={styles.link}>
                    <BsBoxArrowLeft size='2rem' color='#3C61E4' />
                    <span>go back</span>
                  </a>
                </Link>
                <div className={styles.like} onClick={handleLikeClick}><MdThumbUp size='2rem' color='#3C61E4' /> <span>{numberLikes}</span>{" "}
                </div>
                <a
                  href='https://sergiimost.github.io/so-filter/'
                  target='_blank'
                  className={styles.link}
                  rel='noreferrer'
                >
                  <MdLaunch size='2rem' color='#3C61E4' />
                  <span>visit</span>
                </a>
              </div>
            </div>
          </section>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()
  let { likes } = await db.collection("likes").findOne({ page: "so-filter" })
  return {
    props: {
      likes,
    },
    revalidate: 1,
  }
}
