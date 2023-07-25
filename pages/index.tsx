import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {





  const [count, setCount] = useState(0);


  const onClick = () => {
    setCount(count + 1);
  };

  const onClicks = () => {
    setCount(count - 1);
  };

  const Number = count.toString()

  const FontColor = {
    color: "black"
  }



  return (
    <>
      <Head>
        <title>Jey do it</title>
      </Head>
      <>


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>

          <h1 style={FontColor}>

            Slow and steady wins the race.

          </h1>

          <h2 style={FontColor} >
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
        <h1 style={FontColor} >
          이렇게 하면<br></br> 어떻게 될까?
          문단분리 안하면 그냥 쓰이는거고?
          <p>
            근데 이렇게 하면 문단 분리라는데 맞나 이거
          </p>
          여기 밑에 또 쓰면?
        </h1>
        <h2>
          <Link href="/posts/test_post2">
            <button>go button</button>
          </Link>
        </h2>

        <div>
          <button
            onClick={onClick}
          >+ 1 button</button>
        </div>
        <div>
          <button
            onClick={onClicks}
          >- 1 button</button>
        </div>
        <div style ={FontColor}>
          {Number}
          {
            Number === "7"
              ? <p>아주 좋아요!</p>
              : (Number === "19"
                ? <p> 조금만 더!</p>
                : <p> ??? </p>
              )
          }
          {
            Number === "20" && <Link href="/posts/test_post2"><button>드디어</button></Link>
          }
        </div>



      </>
    </>
  )
}
