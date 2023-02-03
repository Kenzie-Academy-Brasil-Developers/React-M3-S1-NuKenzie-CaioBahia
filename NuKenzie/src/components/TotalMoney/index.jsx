import React from 'react'
import styles from "./syle.module.css"

export const TotalMoney = ({kenzielist}) => {
  
  const mapIncome = kenzielist.map((income) => {
    
    if(income.category === "entrada"){
      return Number(income.quant)
    }
    return income.quant
  })
  // console.log(mapIncome)

  const reduceIncome = mapIncome.reduce((accumulator, currentValue) => accumulator + currentValue,0)

  // console.log(reduceIncome)




  return (

      <>
        <div className={styles.a_aside}>
          <h2>Valor total:</h2>
          <p>O valor se refere ao saldo</p>
        </div>
        <div> 
          <p className={styles.totalmoney}>R$ {reduceIncome}</p>          
        </div>
      </>
  )
}



