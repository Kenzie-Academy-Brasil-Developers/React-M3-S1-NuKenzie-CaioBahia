import React, { useState } from 'react'
import styles from "./syle.module.css"

export const FormCreate = ({addToList}) => {
  
  const [formData, setFormData] = useState({
    title : "",
    quant : "",
    category : "entrada",
  })
  const listSubmit = (event) => {
    event.preventDefault()
    if(formData.title !== ""&& formData.quant !==""){
        addToList(formData)
    }else{
        alert("Por Favor preencha todos os campos!")
    }

    setFormData({
        title : "",
        quant : "",
        category : "entrada",
    })
}
  return (
    <form onSubmit={listSubmit} noValidate className={styles.form}>
        <fieldset>
            <label htmlFor="FormInputDescription">Descrição</label>
            <input type="text" placeholder='Digite sua descrição...' className={styles.FormInputDescription} id='FormInputDescription' value={formData.title} onChange={(event) => setFormData({...formData, title: event.target.value})} />
            <small>Ex: Compra de roupas</small>
        </fieldset>
        <div className={styles.middle_form_container}>
            <fieldset>
                <label htmlFor="">Valor</label>
                <input type="number" placeholder='1' value={formData.quant} onChange={(event) => setFormData({...formData, quant: event.target.value})}/>
            </fieldset>
            <fieldset>
                <label htmlFor="">Tipo do Valor</label>
                <select value={formData.category} onChange={(event) => setFormData({...formData, category: event.target.value})}>
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                </select>
            </fieldset>
        </div>
        
        <button type="submit">Inserir valor</button>
    </form>
  )
}

