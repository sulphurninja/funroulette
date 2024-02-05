import Head from 'next/head';
import React, { useContext } from 'react'
import Cookie from 'js-cookie';
import { DataContext } from '@/store/GlobalState';
import { useRouter } from 'next/router';

export default function Game() {

    
      const router = useRouter();
  return (
    <div className='bg-black w-full flex justify-center  h-screen'>
      <Head>
        <title>Fun Roulette</title>
        <meta name="description" content="Fun Roulette - Casino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src='/full.gif' className='md:w-auto w-full' alt='Fun Roulette GIF' />
      <h1  className='absolute cursor-pointer text-green-600 lg:mt-[53%] mt-[43%] text-sm  lg:text-2xl'>Fun Roulette Ahmad</h1>
    </div>
  );
}
