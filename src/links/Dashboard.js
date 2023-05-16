import {auth} from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";

//mui

import { Button } from '@mui/material';
import { IconBase } from 'react-icons';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const DisplayName = user.displayName.split(' ')[0];
  
    if(!user) navigate("/login");
    if(loading) return <h1>Loading...</h1>
    // if(user) navigate("/")
    
  return (
    <div className="Mainbox ">
      <div className='w-auto flex flex-wrap px-5 py-5 m-7 justify-between' >
        <div className="greetText m-3 p-2 rounded-xl" > 
          <h1>Good Morning, <span>{DisplayName}</span> 👋</h1>
          <h2>Welcome to your Dashboard </h2>

        </div>
        <div className="w-1/3 m-3 p-2 bg-slate-400 rounded-xl">
          <div>
           Talk to you Therapist now
          </div>
          <Button variant="contained">Start</Button>
        </div>
      </div>
      <div className='secondContainer flex flex-wrap w- bg-slate-300 rounded-2xl p-5'>
        <div className='leftHalf w-2/3 gap-y-10'>
          <div className="searchBar w-full flex flex-wrap gap-2">
            <div className="bg-slate-400 w-4/5 rounded-xl">
              Search
            </div>
            <FilterAltIcon className='bg-slate-400 '/>
          </div>
          <div className='compilation justify-start p-5'>
            <h1>Today's compilation for you</h1>
            <div className='container flex flex-wrap gap-4'>
              <div className='card1 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
              <div className='card2 w-1/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
              <div className='card3 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
            </div>
          </div>
          <div className='activities justify-start p-5'>
            <h1>A selection of activities and music for you</h1>
            <div className='container flex flex-wrap gap-4'>
              <div className='card1 w-1/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
              <div className='card2 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
              <div className='card3 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
            </div>
          </div>
        </div>
        <div className='rightHalf h-100% w-1/3 bg-yellow-300 rounded-3xl'>
          <iframe src="https://open.spotify.com/embed/playlist/1FyynjLpkha9r2RSUPoRER?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        </div>
      <br /><br /><br /><br />
      <button onClick={() => auth.signOut() }>signOut</button>
    </div>
  )
}