import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
//1차 정리 10.AUG.23 test_post3로 이동
/*
do it 만들기 1차 목표
1. 체크박스 만들기
2. 클릭하면 색 변화
3. 상단에 '체크된 박스 수 / 만든 체크 박스 전체 수' 표시
*/
export default function Home() {

  const [count, setCount] = useState(0);

  const Number = count.toString()

  const FontColor = {
    color: "black"
  }

  return (
    <>
      <Head>
        <title>Slow and steady wins the race</title>
      </Head>
      <>


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>

          <h1 style={FontColor}>
            Go Check
          </h1>

        </div>
        <label>
          <input type = "checkbox"></input>
          <input type = "checkbox"></input>
          <input type = "checkbox"></input>
          <input type = "checkbox"></input>
          <input type = "checkbox"></input>
        </label>
      </>
    </>
  )
}
