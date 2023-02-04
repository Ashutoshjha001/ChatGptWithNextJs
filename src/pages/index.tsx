import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import ChatBot from '../components/chatboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [input, setInput] = useState("")

  return (
    <>
      <Head>
        <title>My Own ChatGpt</title>
      </Head>
      <main className='overflow-hidden bg  '>
        <ChatBot />
      </main>
    </>
  )
}
