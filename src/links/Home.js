import React from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SimpleSlider from "../Components/carousel";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from "../Components/footer";
import { Navigate, useNavigate } from "react-router-dom";



export default function Home(){
    const navigate = useNavigate();

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
                    image= "/images/depression.jpg"
                    alt="Individial_img"
                    onClick={ () => {navigate("/DepressionTest") }}
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 1, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Are you feeling down?
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                    Take a Quiz now!
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
                image="/images/anxiety.jpg"
                alt="green iguana"
                onClick={ () => {navigate("/AnxietyTest") }}
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 1, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Feeling Anxious?
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                   Take a Quiz now!
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
                image="/images/parent.jpg"
                alt="green iguana"
                onClick={ () => {navigate("/Parent") }}
                />
                <CardContent>
                <Typography sx={{ fontFamily: 'Caveat', letterSpacing: 1, fontSize: 30, mb:'0' }} gutterBottom variant="h5" component="div">
                    Is your child mentally unhappy?
                </Typography>
                <Typography sx={{fontFamily: 'Arial'}} variant="body2" color="text.secondary">
                    Take a Quiz for your child now!
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>    
      </div>
      <KeyboardArrowDownIcon sx={{color: "white"}}/>
      <div className="div-quote m-16 p-20 px-80 mx-4 justify-center rounded-3xl">
            <SimpleSlider/>
      </div>

        {/* footer */}

        <div>
            <Footer/>
        </div>
      </>
    )
}