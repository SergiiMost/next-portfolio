import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'
import Heading from '../components/Heading/Heading'
import Footer from '../components/Footer/Footer'
import Wrapper from '../components/Wrapper/Wrapper'
import { BsBoxArrowLeft } from 'react-icons/bs'
import { MdThumbUp, MdLaunch } from 'react-icons/md'
import { connectToDatabase } from '../utils/mongodb'
import styles from '../styles/page-styles/project-description.module.css'

export default function SoFilter({ likes }) {
  const top = useRef(null)
  useEffect(() => {
    top.current.scrollTo(0, 0)
  })

  const handleLikeClick = () => {
    setNumberLikes(numberLikes + 1)
    fetch('/api/updateLikes?origin=shopify', { method: 'POST' }).catch((e) => {})
  }
  const [numberLikes, setNumberLikes] = useState(likes)

  return (
    <>
      <Head>
        <title>Sergii Mostovyi - Shopify's internship challenge.</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta name='description' content='This page provides details about Shopify front-end internship challenge.' />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>

      <header ref={top}>
        <Wrapper>
          <Navbar />
          <Heading tag='h1'>Shopify's internship challenge</Heading>
        </Wrapper>
      </header>

      <main>
        <Wrapper>
          <section>
            <div className={styles.imageWrapper}>
              <figure>
                <img src='/shopify_large.png' className={styles.image} alt='screenshot of a project'></img>
                <figcaption className={styles.imageDescription}>Screenshot of the UI</figcaption>
              </figure>
            </div>
            <div className={styles.description}>
              <h2 className={styles.topicHeader}>Description.</h2>
              <p className='u-mb-2'>
                I decided to start my 2021 by participating in Shopify's front-end internship challenge. Here is the
                description of the challenge:
                <blockquote className={styles.blockquote}>
                  <h4 className='u-mb-05'>The Shoppies: Movie awards for entrepreneurs</h4>
                  <p className='u-mb-1'>
                    Shopify has branched out into movie award shows and we need your help. Please build us an app to
                    help manage our movie nominations for the upcoming Shoppies.
                  </p>
                  <h4 className='u-mb-05'>The Challenge</h4>
                  <p className='u-mb-1'>
                    We need a webpage that can search{' '}
                    <a href='http://www.omdbapi.com/' target='_blank' rel='noreferrer'>
                      OMDB
                    </a>{' '}
                    for movies, and allow the user to save their favorite films they feel should be up for nomination.
                    When they've selected 5 nominees they should be notified they're finished.
                  </p>
                  <p className='u-mb-05'>We'd like a simple to use interface that makes it easy to:</p>
                  <ol className='u-mb-1'>
                    <li>Search OMDB and display the results (movies only)</li>
                    <li>Add a movie from the search results to our nomination list</li>
                    <li>View the list of films already nominated</li>
                    <li>Remove a nominee from the nomination list</li>
                  </ol>
                  <h4 className='u-mb-05'>Technical requirements</h4>
                  <ol>
                    <li>Search results should come from OMDB's API.</li>
                    <li>
                      Each search result should list at least its title, year of release and a button to nominate that
                      film.
                    </li>
                    <li>Updates to the search terms should update the result list.</li>
                    <li>Movies in search results can be added and removed from the nomination list.</li>
                    <li>If a search result has already been nominated, disable its nominate button.</li>
                    <li>Display a banner when the user has 5 nominations.</li>
                  </ol>
                </blockquote>
              </p>
              <p className='u-mb-05'>
                In addition to technical requirements I decided to implement some additional features:
              </p>
              <ol className='u-ml-2 u-mb-2'>
                <li>
                  In order to prevent unnecessary requests to{' '}
                  <a href='http://www.omdbapi.com/' target='_blank' rel='noreferrer'>
                    OMDB
                  </a>{' '}
                  API, I implemented a <b>debounce functionality</b> that sends a request to fetch data only after the
                  user stopped typing for 800ms.
                </li>
                <li>
                  Used <b>localStorage</b> to save a nomination list if the user leaves the page.
                </li>
                <li>Added animations in order to improve UX design.</li>
              </ol>
              <h2 className={styles.topicHeader}>Conclusion.</h2>
              <p>
                This was an interesting project to work on. I learned how to implement a <b>debounce functionality</b>{' '}
                to prevent unnecessary API requests. Also, I experimented with different layouts and improved my skills
                with <b>Figma</b>.
              </p>
              <div className={styles.linksWrapper}>
                <Link href='/#projects'>
                  <a className={styles.link}>
                    <BsBoxArrowLeft size='2rem' color='#3C61E4' />
                    <span>go back</span>
                  </a>
                </Link>
                <div className={styles.like} onClick={handleLikeClick}>
                  <MdThumbUp size='2rem' color='#3C61E4' /> <span>{numberLikes}</span>{' '}
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
  let { likes } = await db.collection('likes').findOne({ page: 'shopify' })
  return {
    props: {
      likes,
    },
    revalidate: 1,
  }
}
