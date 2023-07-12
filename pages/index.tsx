import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

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
          <h2>
            <Link href="/posts/test_post">
              click this!
              <Image
              src="/spk.png"
              alt="Picture of the author"
              width={100}
              height={100}
              />
            </Link>
          </h2>
        </div>

      </>
    </>
  )
}
