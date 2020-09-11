import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import Wrapper from "../components/Wrapper/Wrapper"
import Heading from "../components/Heading/Heading"
import BlogCard from "../components/BlogCard/BlogCard"
import Footer from "../components/Footer/Footer"
import ComingSoon from "../components/ComingSoon/ComingSoon"
import styles from "../styles/page-styles/blog.module.css"

export default function Blog() {
  return (
    <>
      <Head>
        <title>Sergii Mostovyi - blog</title>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1'></meta>
        <meta name='description' content="Sergii Mostovyi's personal blog page." />
        <meta name='author' content='Sergii Mostovyi'></meta>
      </Head>
      <div className={styles.pageWrapper}>
        <header>
          <Wrapper>
            <Navbar></Navbar>
            <Heading tag='h1'>blog.</Heading>
          </Wrapper>
        </header>

        <main className={styles.main}>
          <section>
            <Wrapper>

              <ComingSoon />
            </Wrapper>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
