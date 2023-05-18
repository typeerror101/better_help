import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/blog.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import { Minimize } from '@mui/icons-material';



export default function ImgMediaCard() {
  return (
    <>
      <div className='heading'>
        <h1>Mental Health Blog</h1>
      </div>

      <div className='header'>
        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: '' }} className="select-container">
          <InputLabel htmlFor="grouped-native-select">Categories</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
            {/* <option aria-label="None" value="" /> */}
            <optgroup>
              <option value={1}>Active Duty</option>
              <option value={2}>Anxiety Disorders</option>
              <option value={2}>Personality Disorders</option>
              <option value={2}>Treatment Resistant Depression</option>
            </optgroup>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} className="select-container">
          <InputLabel htmlFor="grouped-select">Archives</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>January</MenuItem>
            <MenuItem value={2}>February</MenuItem>
            <MenuItem value={2}>March</MenuItem>
            <MenuItem value={2}>April</MenuItem>
            <MenuItem value={2}>May</MenuItem>
            <MenuItem value={2}>June</MenuItem>
            <MenuItem value={2}>July</MenuItem>
            <MenuItem value={2}>August</MenuItem>
            <MenuItem value={2}>September</MenuItem>
            <MenuItem value={2}>October</MenuItem>
            <MenuItem value={2}>November</MenuItem>
            <MenuItem value={2}>December</MenuItem>
          </Select>
        </FormControl>

        <div className="search-input-container">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            style={{ backgroundColor: 'white' }}
          />
        </div>
      </div>



      <div className='Cards'>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia 
            component="img"
            alt="green iguana"
            height="140"
            width="400"
            image="/images/img1.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Comforting and Frustrating Realization that You Are Not Alone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              However frustrating it was to hear that others struggle with similar challenges, I now know that frustration points to a more important truth.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Blog1">
              <Button className="learnmore"  size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 , maxHeight: 565 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/img2.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Early Psychosis Intervention
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The early identification and treatment of psychosis is possible.
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/Blog2">
              <Button className="learnmore"  size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 , maxHeight: 613 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/img3.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              I Wish They’d Seen It Sooner: Growing Up Undiagnosed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Healthy Coping Mechanisms
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Improved Self-Concept
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Emotional Stability
            </Typography>
          </CardContent>
          <CardActions>
          <Link to="/Blog3">
              <Button className="learnmore"  size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, maxHeight: 550 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/images/img4.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Navigating Early Recovery from Schizophrenia
            </Typography>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>
          <CardActions>
          <Link to="/Blog4">
              <Button className="learnmore" size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>

      </div>
    </>
  );
}