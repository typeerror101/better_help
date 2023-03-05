import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import HeroCarousel from "../Components/HeroCarousel.Component"
import { Button, CardActionArea, CardActions } from '@mui/material';
import { borderRadius } from "@mui/system";

export default function Home(){
    return(
        <>
        <div className="mainText">
            <h1>You deserve to be happy.</h1>
            <h2>What type of therapy are you looking for?</h2>
        </div>
        <div className='Cards'>
            <div>
            <Card sx={{ maxWidth: 345, borderRadius: 3 }} >
            <CardActionArea>
                <CardMedia 
                component="img"
                height="410"
                width= "345"
                image= "/images/individual.jpg"
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
            <Card sx={{ maxWidth: 345, borderRadius: 3 }} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/couple.jpg"
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
            <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="410"
                image="/images/teenager.jpg"
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