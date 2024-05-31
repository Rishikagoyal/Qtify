import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Home from '../src/components/Home';
import Hero from '../src/components/Hero/Hero';
import {Route, Routes,BrowserRouter as Router,Outlet} from 'react-router-dom';
import {StyledEngineProvider} from '@mui/material/styles';


function App() {
 
  return(
   
  
   <div> <Navbar/>
   
   
   <Routes>
    
     <Route exact path='/home' component={Home}/>
   </Routes>
   </div>
  
  
 
  );

}

export default App;
