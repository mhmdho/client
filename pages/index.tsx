import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <h2>Main</h2>
      <h2>Transaction History</h2>
    </div>
  )
}

export default Home
