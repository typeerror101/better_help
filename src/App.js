import Blog from './links/Blog';
import Home from './links/Home';
import Login from './links/Login';
import Dashboard from './links/Dashboard';
import Parent from './links/Parent';
import DepressionTest from './links/DepressionTest';
import NavBar from './NavBar';
import { Route, Routes } from "react-router-dom";

function App() {

  
  // if(user) navigate("/");

  return (
    <>
      <NavBar/>
      <div className='components'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/about'/>
              <Route path='/depressionTest' element={<DepressionTest/>}/>
              <Route path='/faq'/>
              <Route path='/parent' element={<Parent/>}/>
              <Route path='/therapistjobs'/>
              <Route path='/support' element={<Dashboard/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/getstarted'/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
      </div>
      
    </>
  );
}

export default App;
