import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const FontColor = {
    color: "black"
  }

  const BackSytle = {
    backgroundColor : 'white'
  }


  return (
    <>
      <main>
        <title>Slow and steady wins the race</title>


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh'}}>

          <h1 className='text-center underline'>
            Go Check
          </h1>
          <button className='btn'>click me</button>
        </div>
      </main>
    </>
  )
}
