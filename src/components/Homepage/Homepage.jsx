import React from 'react';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import {useState,useEffect} from 'react';
import axios from 'axios';
import styles from'./Homepage.module.css';
import Accordion from '../Accordion/Accordion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Homepage=()=>{
  const AccordionItems=[
    {
      "title":"Is Qtify free to use",
      "content":"Yes, Qtify is absolutely free to use"
    },

    {
      "title":"Can I download and listen to songs offline?",
      "content":"Sorry, unfortunately we don't provide services to download songs."
    }
  ]
    const[arr,setArr]=useState([]);
    const[collapse,setCollapse]=useState(true);
    const [arr1,setArr1]=useState([]);
    const[songs,setSongs]=useState([]);
    const[collapseSec,setCollapseSec]=useState(true)


  useEffect(()=>{const fetchData=async()=>{

    try{
    const response=await axios.get('http://qtify-backend-labs.crio.do/albums/top');
    const response1=await axios.get('http://qtify-backend-labs.crio.do/albums/new');
    const response2=await axios.get('http://qtify-backend-labs.crio.do/songs');
    
    console.log(response.data);
    setArr(response.data);
    setArr1(response1.data);
    setSongs(response2.data);
   
    console.log(arr);
    console.log(arr1);
  

 
     }
    catch(e){console.log("Error ",e);}

  }
  fetchData()},[arr]);
  
  const handleChange=()=>{
    if(collapse==false)
        {
            setCollapse(true);
        }
        else{
            setCollapse(false);
        }
  }

  const handleChange1=()=>{
    if(collapseSec==false)
        {
            setCollapseSec(true);
        }
        else{
            setCollapseSec(false);
        }
  }
 
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
    return(
        <>
        
        <Hero/>
        <button onClick={handleChange}>Collapse All</button>
      {collapse?(<> <div className={styles.card}>
        { arr.map((item,index)=>{
    return(

      <Card data={item} key={index}/>
    )
   
   })}</div></>):(<> <div>
    <Slider {...settings}>
      {arr.map((item, index) => (
        <Card key={index} data={item} className={styles.carouselslide}/>
          
        
      ))}
    </Slider>
  </div></>)}

  

   <button onClick={handleChange1}>Collapse All</button>
   {collapseSec?(<> <div className={styles.card}>
        { arr1.map((item,index)=>{
    return(

      <Card data={item} key={index}/>
    )
   
   })}</div></>):(<><div>
    <Slider {...settings}>
      {arr1.map((item, index) => (
        <Card key={index} data={item} className={styles.carouselslide}/>
          
        
      ))}
    </Slider>
  </div></>)}
   <hr></hr>

  <div className={styles.card}>
  {
    <div>
    <Slider {...settings}>
      {songs.map((item, index) => (
        <Card key={index} data={item} className={styles.carouselslide}/>
          
        
      ))}
    </Slider>
  </div>
  }
  </div>
  <hr></hr>

  <h2 className={styles.faq}>FAQs</h2>
  <Accordion items={AccordionItems}></Accordion>


</>
  
    )
}
const NextArrow = ({ onClick }) => {
  return (
    <div className={styles.arrownext} onClick={onClick}>
      &#10095;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className={styles.arrowprev} onClick={onClick}>
      &#10094;
    </div>
  );
};
export default Homepage;