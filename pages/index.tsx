import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <>


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

          <h1 className={styles.title}>

            Slow and steady wins the race.

          </h1>

        </div>

      </>
    </>
  )
}
