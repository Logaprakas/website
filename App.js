import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from'./pages/About';
import Destination from'./pages/Destination';
import Car from './index/Car';
import Employer from './employer/Employer';
import Detail from './employer/Detail';
import Sathish from './employer/Sathish';
import Company from './employer/Company';
import Form from './Fill/Form';
import Card from './Fill/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About />}/>
         <Route path='/Destination' element={<Destination />}/>
         <Route path='/props' element={<Car />}/>
        <Route path='/Employerlist' element={<Employer />}/>
        <Route path='/Details' element={<Detail/>}/>
         <Route path='/Sathish' element={<Sathish/>}/>
         <Route path='/Company' element={<Company/>}/>
         <Route path='/Fill' element={<Form/>}/>
         <Route path='/Card' element={<Card/>}/>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;

