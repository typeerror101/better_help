import Blog from './links/Blog';
import Blog1 from './links/Blog1';
import Blog2 from './links/Blog2';
import Blog3 from './links/Blog3';
import Blog4 from './links/Blog4';
import Home from './links/Home';
import Login from './links/Login';
import Dashboard from './links/Dashboard';
import Parent from './links/Parent';
import AnxietyTest from './links/AnxietyTest';
import DepressionTest from './links/DepressionTest';
import Music from './links/Music';
import NavBar from './NavBar';
import HealthBot from './links/HealthBot';
import { Route, Routes } from "react-router-dom";

function App() {


  // if(user) navigate("/");

  return (
    <>
      <NavBar />
      <div className='components'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2/>}></Route>
          <Route path='/blog3' element={<Blog3/>}></Route>
          <Route path='/blog4' element={<Blog4/>}></Route>
          <Route path='/anxietyTest' element={<AnxietyTest/>}/>
          <Route path='/depressionTest' element={<DepressionTest />} />
          <Route path='/healthbot' element={<HealthBot/>}/>
          <Route path='/faq' />
          <Route path='/parent' element={<Parent />} />
          <Route path='/therapistjobs' />
          <Route path='/support' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getstarted' />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
