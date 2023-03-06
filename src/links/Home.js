import React from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useEffect, useState } from "react";


import { Button, CardActionArea, CardActions } from '@mui/material';
import { borderRadius } from "@mui/system";
import { convertLength } from "@mui/material/styles/cssUtils";



export default function Home(){

    const [Quote1, setQuote1] = useState([]);

    useEffect(() => {
        const requestQuote = async() =>{
            const getQuote = await axios.get('https://type.fit/api/quotes');
            setQuote1(getQuote.data);
        };
        requestQuote();
    },[]);  

    return(
        <>
        <div className="mainText">  
            <h1>You deserve to be happy.</h1>
            <h2>What type of therapy are you looking for?</h2>
        </div>
        <div className='Cards'>
                <div>
            <Card sx={{ maxWidth: 400, maxHeight: 500, borderRadius: 8, fontFamily: 'Caveat' }} >
            <CardActionArea>
                    <CardMedia 
                    component="img"
                    height="235px"
                    width= "266px"
                    image= "/images/individual2.jpg"
                    alt="Individial_img"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Individual <PlayCircleFilledIcon/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    For myself
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 400,maxHeight: 500, borderRadius: 8 }} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/couples.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Couple <PlayCircleFilledIcon/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   For me and my partner
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 400,maxHeight:500, borderRadius: 8 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/teenager4.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Teenager <PlayCircleFilledIcon/>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    For my child
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
      </div>

      
      </>
    )
}