import Head from 'next/head';
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from 'react';

export default function Login() {

  const { state = {}, dispatch } = useContext(DataContext);
  const router = useRouter();


  const handleSubmit = () => {

    router.push("/Game");
  }
  return (
    <div className='bg-black w-full flex justify-center  h-screen'>
      <Head>
        <title>Login - Fun Roulette</title>
        <meta name="description" content="Fun Roulette - Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src='/login.png' className='md:w-auto w-full' alt='Fun Roulette GIF' />
      <div
        className=" "
      >
        <input
          className="shadow appearance-none mt-[40%] -ml-[57%]  rounded w-56 text-lg p-2 bg-white text-black absolute  leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="userName"
          type="text"
          placeholder="Username"
        />
        <input
          className="shadow appearance-none mt-[46%] -ml-[57%]  rounded w-56 text-lg p-2 bg-white text-black absolute  leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
        />
        <button
        onClick={handleSubmit}
          className=" hover:bg-[#ae1536]  hover:opacity-35 w-36 h-12 mt-[50%] ml-[-42%] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline absolute"
          type="submit"
        >

        </button>
      </div>
    </div>
  );
}
