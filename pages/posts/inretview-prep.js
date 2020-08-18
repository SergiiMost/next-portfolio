import styles from "../../styles/page-styles/interview-prep.module.css"
import Head from "next/head"
import ReactHtmlParser from "react-html-parser"
import Link from "next/link"
import Wrapper from "../../components/Wrapper/Wrapper"
import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"
import Footer from "../../components/Footer/Footer"
import { BsBoxArrowLeft } from "react-icons/bs"
import { MdThumbUp } from "react-icons/md"
import { prepData } from "../../utils/prepData"
import { connectToDatabase } from "../../utils/mongodb"
import { useState, useEffect } from "react"

export default function Prepartion({ likes }) {
  const [numberLikes, setNumberLikes] = useState(likes)
  const handleLikeClick = () => {
    setNumberLikes(numberLikes + 1)
    fetch("/api/updateLikes?origin=interview-prep", {
      method: "POST",
    }).catch((e) => {})
  }

  return (
    <>
      <Head>
        <title>Sergii Mostovyi - interview preparation</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta
          name='description'
          content="Sergii Mostovyi's blog post about his interview preparation. It provides a chronological overview of the process."
        />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>
      <header>
        <Wrapper>
          <Navbar></Navbar>
          <Heading tag='h1'>An interview preparation and beyond.</Heading>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <div className={styles.contentWrapper}>
            <section className={styles.description}>
              <span>I decided to create this post for a couple of reasons.</span>
              <p className='u-mLetter-2'>
                <b>First</b>, it will keep me motivated to not miss a<b> single day of studying 📚</b>. I don’t have
                much time to study at the moment because I have a full time job that is not related to the programming
                field and some other commitments. I can only allocate <b>3-3.5 hours a day</b>; therefore, I have to be
                very disciplined in order to move forward.
              </p>
              <p className='u-mb-1 u-mLetter-2'>
                <b>Second</b>, it will help me keep track of what I worked on and provide some sort of{" "}
                <b>documentation 📃</b>.
              </p>
              <p>
                These are the <b>areas of my interest</b> for now :
              </p>
              <ol className={`${styles.ol} u-mb-2`}>
                <li>
                  <u>JavaScript</u>
                </li>
                <li>
                  <u>Node.js</u>
                </li>
                <li>
                  <u>React</u>
                </li>
                <li>
                  <u>Next.js</u>
                </li>
                <li>
                  <u>Algorithms and data structures (+ LeetCode)</u>
                </li>
                <li>
                  <u>System design</u>
                </li>
              </ol>
              <p className='u-mb-1 '>
                I’m not sure how I’m going to <b>structure</b> my preparation yet, but I think that I will start with
                spending at least 1-1.5 hour a day working on
                <b> algorithms and data structures</b>. I will also solve at least one <b>Leetcode problem</b> a day
                (even if it’s an easy one 😜). The rest 1.5-2 hours will be dedicated either to other topics or to work
                on a project. I’ll see if this preparation tactic works for me and make adjustments as needed.
              </p>
              <p>Ok , let’s get started 👨‍💻 !</p>
            </section>

            <section className={styles.chronology}>
              <span className={styles.chronologyDays}>Total days: {prepData.length}</span>
              {prepData.map((day) => {
                return (
                  <div key={day.date} className={styles.dayWrapper}>
                    <span>
                      <u>
                        <b>{day.date}</b>
                      </u>
                    </span>
                    <ol className={styles.ol}>
                      {Object.keys(day.tasks).map((key) => ReactHtmlParser(`<li>${day.tasks[key]}</li>`))}
                    </ol>
                  </div>
                )
              })}
            </section>

            <div className={styles.linksWrapper}>
              <Link href='/blog'>
                <a className={styles.link}>
                  <BsBoxArrowLeft size='2rem' color='#3C61E4' />
                  <span>go back</span>
                </a>
              </Link>
              <div className={styles.like} onClick={handleLikeClick}>
                <MdThumbUp size='2rem' color='#3C61E4' />
                <span>{numberLikes}</span>
              </div>
              <div></div>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDatabase()
  let { likes } = await db.collection("likes").findOne({ page: "interview-prep" })
  return {
    props: {
      likes,
    },
    revalidate: 1,
  }
}
