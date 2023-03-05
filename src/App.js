import Buisness from './links/Buisness';
import Home from './links/Home';
import Login from './links/Login';
import Dashboard from './links/Dashboard';
import NavBar from './NavBar';
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <>
      <NavBar/>
      <div className='components'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/business' element={<Buisness/>}/>
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
