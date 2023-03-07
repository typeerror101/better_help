import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";


export default function Login() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(user){
      navigate("/");
    }else{
      console.log('login');
    }
  }, [user,navigate]);

  //sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async() =>{
      try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result.user);
        navigate("/"); 
      } catch (error) {
        console.log(error);
      }
    }
   //sign in with facebook
   const fbProvider = new FacebookAuthProvider();
   const FacebookLogin = async () =>{
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credential =  await FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      let photoUrl = result.user.photoURL + '?height=500&access_token=' + token;
      await updateProfile(auth.currentUser, {photoURL: photoUrl});

      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }  
   };
  
  return (
    <div className="mx-auto shadow-xl mt-32 p-10 w-4/6 bg-zinc-50 text-gray-700 rounded-lg">
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
        <button onClick={FacebookLogin} className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-8'>
        <AiFillFacebook className='text-3xl text-blue-400'/>Sign in with Facebook
        </button>
      </div> 
    </div>
  )
}
