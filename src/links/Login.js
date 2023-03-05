import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../utils/firebase';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Login() {
    //sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async() =>{
      try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user);
      } catch (error) {
        console.log(error);
      }
    }
  
  return (
    <>

    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
  
    <Paper elevation={0} />
    <div className="mx-auto shadow-xl mt-32 p-10 w-3/6 mx-7 bg-zinc-50 text-gray-700 rounded-lg">
      <h2 className='text-3xl font-medium'>Join Today!</h2>
      <div className='py-4'>
        <h3 className='py-4'>Sign in with one of the providers</h3>
      </div>
      <div className='flex flex-col gap-4'>
        <button 
        onClick={GoogleLogin}
        className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-8'
        >
        <FcGoogle className='text-3xl'/>Sign in with Google
        </button>
        <button className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-8'>
        <AiFillFacebook className='text-3xl text-blue-400'/>Sign in with Facebook
        </button>
      </div> 
    </div>
  </Box>












   
    </>
  )
}
