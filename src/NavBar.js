import { Link, useMatch, useResolvedPath} from "react-router-dom"
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material"
import { color } from "@mui/system"
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';
import { AltRoute } from "@mui/icons-material";

const CustomButton = styled(Button)({
    color: '#EDF1D6'
});

export default function NavBar() {
    const [user, loading] = useAuthState(auth);

    return(
        <div>
            <nav className="nav">
                <Link to="/" className="site-title" >Better Help</Link>
                <ul>
                    <CustomLink to="/business">Business</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/advice">Advice</CustomLink>
                    <CustomLink to="/faq">FAQ</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/therapistjobs">Therapist Jobs</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    
                </ul>
                <ul>
                    {!user && (
                        <>
                        <CustomButton variant="contained" sx={{margin:1}}  color="success" size="small">
                        <Link to="/login">Login</Link>
                        </CustomButton>
                        <CustomButton>
                        <Link to="/getstarted">Get Started</Link>
                        </CustomButton>
                    </> 
                    )}
                    {user && (
                        <>
                        <Link to="/dashboard">
                            <img src={user.photoURL} alt=""/>
                        </Link>
                        <CustomButton>
                        <Link to="/getstarted">Get Started</Link>
                        </CustomButton>
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