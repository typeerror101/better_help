import React from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {shadows, borders } from '@mui/system';
import { useEffect, useState } from "react";
import { Button, CardActionArea, CardActions } from '@mui/material';
import { borderRadius } from "@mui/system";
import { convertLength } from "@mui/material/styles/cssUtils";
import SimpleSlider from "../Components/carousel";



export default function Home(){
    // Quotes api code

    // const [Quote1, setQuote1] = useState([]);
    
    // useEffect(() => {
    //     const requestQuote = async() =>{
    //         const getQuote = await axios.get("https://type.fit/api/quotes");
    //         setQuote1(getQuote.data);
    //     };
        
    //     requestQuote();
    // },[]);  


    return(
        <>
        <div className="mainText">  
            <h1>You deserve to be happy.</h1>
            <h2>What type of therapy are you looking for?</h2>
        </div>
        <div className='Cards'>
                <div>
            <Card sx={{ maxWidth: 400, maxHeight: 500, borderRadius: 8, fontFamily: 'Caveat', boxShadow: 3, border: 5, borderColor: '#fff' }} >
            <CardActionArea>
                    <CardMedia 
                    component="img"
                    height="235px"
                    width= "266px"
                    image= "/images/individual2.jpg"
                    alt="Individial_img"
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 3, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Individual 
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                    For myself
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 400,maxHeight: 500, borderRadius: 8, boxShadow: 3, border: 5, borderColor: '#fff' }} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/couples.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 3, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Couple 
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                   For me and my partner
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 400,maxHeight:500, borderRadius: 8, boxShadow: 3, border: 5, borderColor: '#fff' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/teenager4.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 3, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Teenager 
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                    For my child
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
      </div>
      <div className="bg-slate-400 p-5 mt-7 justify-center">
            <SimpleSlider/>
      </div>
      
      </>
    )
}