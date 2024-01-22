import Head from 'next/head';
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useState } from 'react';

export default function Login() {
  const initialState = { userName: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { userName, password } = userData;
  const { state = {}, dispatch } = useContext(DataContext);
  const { auth = {} } = state;
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleSubmit = async e => {
    e.preventDefault()

    const res = await postData('auth/login', userData)

    if (res.error) {
      window.location.reload();
      return;
    }

    dispatch({
      type: 'AUTH', payload: {
        token: res.access_token,
        user: res.user
      }
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: '/api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)

    // check if user has admin privileges
    if (res.user.role === 'admin') {
      router.push("/admin");
    } else {
      router.push("/Game");
    }
    if (res.user.role === 'subadmin') {
      router.push("/subadmin")
    }
  }
  return (
    <div className='bg-black w-full flex justify-center  h-screen'>
      <Head>
        <title>Login - Fun Roulette</title>
        <meta name="description" content="Fun Roulette - Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src='/login.png' className='md:w-auto w-full' alt='Fun Roulette GIF' />
      <form
        className=" "
        onSubmit={handleSubmit}
      >
        <input
          className="shadow appearance-none mt-[40%] -ml-[57%]  rounded w-56 text-lg p-2 bg-white text-black absolute  leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="userName"
          value={userName}
          onChange={handleChangeInput}
          type="text"
          placeholder="Username"
        />
        <input
          className="shadow appearance-none mt-[46%] -ml-[57%]  rounded w-56 text-lg p-2 bg-white text-black absolute  leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
          placeholder="******************"
        />
        <button
          className=" hover:bg-[#ae1536]  hover:opacity-35 w-36 h-12 mt-[50%] ml-[-42%] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline absolute"
          type="submit"
        >

        </button>
      </form>
    </div>
  );
}
