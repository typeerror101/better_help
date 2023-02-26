import './App.css';
import NavBar from './NavBar';
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <div className='components'>
          <Routes>
              <Route path='/business' element={}/>
              <Route path='/about'/>
              <Route path='/advice'/>
              <Route path='/faq'/>
              <Route path='/reviews'/>
              <Route path='/therapistjobs'/>
              <Route path='/contact'/>
              <Route path='/login'/>
              <Route path='/getstarted'/>
          </Routes>
      </div>
    </>
  );
}

export default App;
