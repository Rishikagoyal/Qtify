import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../assets/Searchicon.png';

const Search =()=>{
    return(

        <>
       <form className={styles.form}>

       <div>

        <input name="album" className={styles.search}/>
       </div>

       <div>
        <button type='submit' className={styles.submit}>
           <img src={searchIcon} alt='search' className={styles.searchIcon}/>
        </button>
       </div>

       </form>
        
        </>

    )
}
export default Search;