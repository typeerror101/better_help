import Blog from './links/Blog';
import Home from './links/Home';
import Login from './links/Login';
import Dashboard from './links/Dashboard';
import NavBar from './NavBar';
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import SimpleSlider from './Components/carousel';

function App() {

  
  // if(user) navigate("/");

  return (
    <>
      <NavBar/>
      <SimpleSlider/>
      <div className='components'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/about'/>
              <Route path='/advice'/>
              <Route path='/faq'/>
              <Route path='/reviews'/>
              <Route path='/therapistjobs'/>
              <Route path='/contact'/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/getstarted'/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
      </div>
      
    </>
  );
}

export default App;
