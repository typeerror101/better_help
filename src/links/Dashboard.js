import React from 'react'
import {auth} from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";

//mui

import { Button } from '@mui/material';
import { IconBase } from 'react-icons';


export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if(loading) return <h1>Loading...</h1>
    // if(user) navigate("/")
    if(!user) navigate("/login");
  return (
    <div className="container m-5 p-3 bg-slate-200 rounded-3xl">
      <div className='w-auto flex flex-wrap px-5 py-5 m-7 justify-between' >
        <div className=" m-3 p-2 rounded-xl" > 
          <h1 className>Good Morning, {user.displayName}!</h1>
          <h2>Welcome to your Dashboard {user.displayName}</h2>
        </div>
        <div className="w-1/3 m-3 p-2 bg-slate-400 rounded-xl">
          <div>
           Talk to you Therapist now
          </div>
          <Button variant="contained">Contained</Button>
        </div>
      </div>
      <div className='container  bg-slate-300 rounded-2xl p-5'>
        <div class="w-2/3">
          <div className="bg-slate-400 rounded-xl">
            Search
          </div>
          <IconBase></IconBase>
        </div>
      </div>
      <br /><br /><br /><br />
      <button onClick={() => auth.signOut() }>signOut</button>
    </div>
  )
}
