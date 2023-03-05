import Buisness from './links/Buisness';
import './styles/global.css'
import "./styles/styles.css";
import Home from './links/Home';
import Login from './links/Login';
import NavBar from './NavBar';
import { Route, Routes } from "react-router-dom";

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
          </Routes>
      </div>
      
    </>
  );
}

export default App;
