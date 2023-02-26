import { Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar() {
    return(
        <div>
            <nav className="nav-">
                <link to="/" className="site-title" >Better Help</link>
                <ul>
                    <CustomLink to="/business">Business</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/advice">Advice</CustomLink>
                    <CustomLink to="/faq">FAQ</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/therapistjobs">Therapist Jobs</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/getstarted">Get Started</CustomLink>
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