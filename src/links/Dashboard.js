import React from 'react'
import {auth} from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if(loading) return <h1>Loading...</h1>
    if(!user) navigate("/login");
  return (
    <div>
      <h1>Welcome to your Dashboard {user.displayName}</h1>
      <button onClick={() => auth.signOut() }>signOut</button>
    </div>
  )
}
