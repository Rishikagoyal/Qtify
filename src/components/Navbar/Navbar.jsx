import React from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import {Link} from 'react-router-dom';

import Homepage from '../Homepage/Homepage';


export default function Navbar({searchData}){

 

  
 
  return(
  <>
         <nav className={styles.navbar}>

           <Link to='/home'> <Logo/></Link>
            <Search></Search>
            <Button>Give Feedback</Button>
          
         </nav>
         <Homepage/>
    
   
     </>
       
       
        
        
    )
}
