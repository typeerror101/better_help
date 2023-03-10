import * as React from 'react';
import { Link, useMatch, useResolvedPath} from "react-router-dom"
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material"
import { Avatar } from '@mui/material';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';
import { AltRoute } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const CustomButton = styled(Button)({
    color: '#EDF1D6'
});

export default function NavBar() {
    const [user, loading] = useAuthState(auth);

    return(
        <div>
            <nav className="nav">
                <Link to="/" className="site-title" >Better Health</Link>
                <ul>
                    <CustomLink className="middle-nav-elements" to="/blog">Blog</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/about">About</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/advice">Advice</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/faq">FAQ</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/reviews">Reviews</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/therapistjobs">Therapist Jobs</CustomLink>
                    <CustomLink className="middle-nav-elements" to="/support">Support</CustomLink>
                    
                </ul>
                <ul>
                    {!user && (
                        <>
                        <CustomButton sx={{margin:1, color: '#fff'}} color="secondary" variant="contained"  size="small">
                        <Link to="/login">Login</Link>
                        </CustomButton>
                        <CustomButton>
                        <Link style={{color: '#fff'}} className="right-nav-elements"  to="">Get Started</Link>
                        </CustomButton>
                    </> 
                    )}
                    {user && (
                        <>
                        <Link>
                            {user.displayName}
                        </Link>

                        <Link to="/dashboard">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src={user.photoURL} />
                        </StyledBadge>
                        </Link>
                        </>
                    )}
                   
                </ul>
            </nav>
      
      </div>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end : true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}