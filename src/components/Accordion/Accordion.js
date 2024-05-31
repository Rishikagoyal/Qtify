import React,{useState} from 'react';
import styles from './Accordion.module.css';

const AccordionItem=({title,content})=>{

    const[isOpen,setOpen]=useState(false);
    const toggleAccordion=()=>{
        setOpen(!isOpen);
    }
    return(

        <>
        <div className={styles.accordionItem}>
            <div className={styles.accordionTitle} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen?'-':'+'}</span>

            </div>
         {isOpen && <div className={styles.accordionContent}>{content}</div>}
        </div>
        </>
    )
}

const Accordion=({items})=>{
    return(
        <>
        <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
        </>

    )
}

export default Accordion;