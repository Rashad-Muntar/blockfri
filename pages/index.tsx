import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../src/components/layout/nav'
import SideBar from '../src/components/sideBar/sidebar'
import MainSection from '../src/components/mainSection'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Blockfri, know what the crypto market is offering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <MainSection />
    </div>
  )
}

export default Home
