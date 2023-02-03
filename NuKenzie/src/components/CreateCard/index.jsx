import React from 'react'
import styles from "./syle.module.css"
import trash from "../../assets/trash/trash.png"

export const NukenzieCard = ({list, removeFromList}) => {
  
  
  return (    
    <>
    {list.category === "entrada"? (    
    <li className={styles.card_income}>
       <div className={styles.div_top}>
          <h3>{list.title}</h3>
          <span>{list.category}</span>
       </div>
       <div className={styles.div_botton}>
        <p>R$ {list.quant}</p>
        <button onClick={()=>removeFromList(list.id)}>
          <img src={trash} className={styles.trash} alt="Botao de Excluir" />
        </button>
       </div>
    </li>
    
    ) : (
    <li className={styles.card_expenses}>
        <div className={styles.div_top}>
          <h3>{list.title}</h3>
          <span>{list.category}</span>
       </div>
       <div className={styles.div_botton}>
        <p>R$ {list.quant}</p>
        <button onClick={()=>removeFromList(list.id)}>
          <img src={trash} className={styles.trash} alt="Botao de Excluir" />
        </button>
       </div>
    </li>
    )}
    </>
  )
}
