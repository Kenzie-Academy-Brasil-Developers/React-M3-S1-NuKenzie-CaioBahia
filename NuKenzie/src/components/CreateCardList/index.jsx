import React from 'react'
import { NukenzieCard } from '../CreateCard'
import styles from "./syle.module.css"
import NoCard from "../../assets/NoCard.svg"


export const NukenzieList = ({filteredList,removeFromList}) => {
  return (
   <ul className={styles.cardlist_container}>
        {filteredList.length > 0 ? (  
        <>
        {filteredList.map((list,index) =>(
      <NukenzieCard key={index} list={list} removeFromList={removeFromList}/> 
    ))}
        </>
    
    ) : (
        <div className={styles.nukenzieList}>
            <p aria-label='alert'>Você ainda não possui nenhum lançamento!</p>
            <div className={styles.nocard_container}>
                <img src= {NoCard} alt="NoCard" className={styles.NoCard} />
                <img src= {NoCard} alt="NoCard" className={styles.NoCard} />
                <img src= {NoCard} alt="NoCard" className={styles.NoCard} />
               
            </div>

        </div>
    
    )}
   </ul>
  )
}
