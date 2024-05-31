import React from 'react';
import styles from './Card.module.css';
import Tooltip  from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import {Link} from 'react-router-dom';







const Card=({data,type})=>{

    const getCard=(type)=>{
        switch(type){
            case "album":{
                const{image, follows,title, slug,songs}=data;
                return(
                    <Tooltip  placement='top' enterDelay={500} leaveDelay={100}>
                        <Link to={`/albums/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy"/>
                                    <div className={styles.banner}>

                                        <Chip labels={`${follows} Follows`} size="small" className={styles.chip}/>
                                        <div className={styles.follows}>{follows}</div>
                                        <div className={styles.title}>{title}</div>

                                      
                                    </div>

                                </div>


                            </div>
                        </Link>

                    </Tooltip>

                )
            }

            case "songs":{
                const{image,likes,title,artists}=data;
                return(
                   
                        
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading="lazy"/>
                                    <div className={styles.banner}>

                                        <Chip labels={`${likes} Likes`} size="small" className={styles.chip}/>
                                        
                                        <div className={styles.title}>{title}</div>

                                      
                                    </div>

                                </div>


                            </div>
                     


                )

            }

          
        }

    }

    return(
        <>
        
        {getCard("album")}
      
       
        </>
    )

}

export default Card;