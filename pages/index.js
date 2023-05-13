import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] });
import Main from '@/components/Main';

export default function Home() {

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const userScrollPosition = window.scrollY / (document.body.offsetHeight - window.innerHeight)
        const projectElement = document.getElementById('projects')
        document.getElementById('about').style.setProperty(
          "--scroll",
          userScrollPosition
        );
        projectElement.style.setProperty(
          "--scroll",
          userScrollPosition
        )
      },
      false
    );
  });

  return (
    <>
        <Head>
        <title>Daniel Fields Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo&display=swap" rel=""></link>
      </Head>
      <Main  />
    </>
  )
};
