import {auth} from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue } from 'firebase/database';

//mui

import { Button } from '@mui/material';
import { IconBase } from 'react-icons';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';




export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const DisplayName = user.displayName.split(' ')[0];
    const userId= user.displayName.split(' ')[0];
    
  
    if(!user) navigate("/login");
    if(loading) return <h1>Loading...</h1>
    // if(user) navigate("/")

    function readScores(userId) {
      const db = getDatabase();
      const scoreCardRef = ref(db, 'Score-card/' + userId);
      
      onValue(scoreCardRef, (snapshot) => {
        const scoreCardData = snapshot.val();
        
        if (scoreCardData) {
          const anxietyScore = scoreCardData.anxietyScore;
          const depressionScore = scoreCardData.depressionScore;
          
          console.log('Anxiety Score:', anxietyScore);
          console.log('Depression Score:', depressionScore);
        } else {
          console.log('User not found or scores not available');
        }
      }, (error) => {
        console.log("Error retrieving data: " + error.message);
      });
    }
    
    // Call the readScores function with the appropriate userId
  
    readScores(userId);
    
  return (
    <div className="Mainbox ">
      <div className='w-auto flex flex-wrap px-5 py-5 m-7 justify-between' >
        <div className="greetText m-3 p-2 rounded-xl" > 
          <h1 >Good Afternoon, <span>{DisplayName}</span> 👋</h1>
          <h2 className="text-slate-100 ">Welcome to your Dashboard </h2>

        </div>
        <div className="Ai w-1/3 m-3 p-2 bg-slate-300 rounded-xl">
          <div className="mb-3">
           Talk to your (🤖) AI Therapist now!
          </div>
          <Button variant="contained" onClick={ () => {
            navigate('/HealthBot');
          }}>Start</Button>
        </div>
      </div>
      <div className='secondContainer flex flex-wrap w- bg-slate-300 rounded-2xl p-5'>
        <div className='leftHalf w-2/3 gap-y-10'>
       <div className="searchBar w-full flex flex-wrap gap-2">
            <div className="search-input-container bg-slate-100 w-4/5 rounded-xl">
            <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ backgroundColor: 'white' }}
          />
            </div>
          </div>
          <div className='compilation justify-start p-5'>
            <h1 className="mb-6 text-slate-600 ">Today's compilation for you</h1>
            <div className='container flex flex-wrap gap-4'>
              <div className='card1 w-2/6 h-40 bg-amber-50 rounded-3xl'>
                <iframe className='rounded-3xl' src="https://embed.ted.com/talks/sherwin_nuland_how_electroshock_therapy_changed_me" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
              <div className='card2 w-1/6 h-40 bg-amber-50 rounded-3xl'>
                <iframe className='rounded-3xl' src="https://embed.ted.com/talks/krishna_sudhir_what_yoga_does_to_your_body_and_brain" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
              <div className='card3 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              <iframe className='rounded-3xl' src="https://embed.ted.com/talks/sangu_delle_there_s_no_shame_in_taking_care_of_your_mental_health" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
            </div>
          </div>
          <div className='activities justify-start p-5'>
            <h1 className="mb-6 text-slate-600 " >A selection of activities and music for you</h1>
            <div className='container flex flex-wrap gap-4'>
              <div className='card1 w-1/6 h-40 bg-amber-50 rounded-3xl'>
              <iframe className='rounded-3xl' src="https://live.staticflickr.com/4205/35071348993_39e6733199_b.jpg" width="100%" height="100%"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              </div>
              <div className='card2 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
              <div className='card3 w-2/6 h-40 bg-amber-50 rounded-3xl'>
              </div>
            </div>
          </div>
        </div>
        <div className='rightHalf h-100% w-1/3  rounded-3xl'>
          <iframe src="https://open.spotify.com/embed/playlist/4Fh0313D3PitYzICKHhZ7r?utm_source=oembed" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

        </div>
        </div>
      <br /><br /><br /><br />
      <button className="signoutBtn " onClick={() => auth.signOut() }>Signout</button>
      <h3 id="console"> </h3>
    </div>
  )
}