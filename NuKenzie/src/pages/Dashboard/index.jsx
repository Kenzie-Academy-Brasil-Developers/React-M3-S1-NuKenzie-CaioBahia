import React, { useState } from 'react';
import styles from "./syle.module.css";
import { v4 as uuidv4 } from 'uuid';
import { FormCreate } from '../../components/FormCreate';
import { NukenzieList } from '../../components/CreateCardList';
import { TotalMoney } from '../../components/TotalMoney';
import Logo from "../../assets/Logo/Nu Kenzie-Black.svg"

export const Dashboard = ({setCurrentPage}) => {
  

  const [kenzielist,setkenzielist] = useState([])
  const [filter,setFilter] = useState("")
 

  const filteredList = kenzielist.filter(list => {
  return filter === "" ? true : list.category === filter
  })

  const addToList = (list) => {
    const newList = {...list, id:uuidv4()};
    setkenzielist([...kenzielist, newList]);
  }

  const removeFromList = (listID) => {

    const newKenzieList = kenzielist.filter(list => list.id !== listID)
    if(confirm("Você deseja excluir esta entrada?"))
    setkenzielist(newKenzieList)
  }

  return (
    <div className={styles.htmldiv}>
    <header className={styles.header_container}>
      <img src={Logo} alt="" />
      <button onClick={() => setCurrentPage("")}>Inicio</button>
    </header>
    <main className={styles.main_container}>
        {/* Formulario */}
      <div className={styles.utile_container}>
      <section className={styles.form_container}>
        <FormCreate addToList={addToList} />
      </section>

        {/* TotalMoney */}
      <section>
        <TotalMoney kenzielist={kenzielist}/>
      </section>

      </div>

        {/* List Label + Filter Buttons */}
      <section>
        <div className={styles.list_container}>
          <h2>Resumo Financeiro</h2>
          <div className={styles.filter_buttons_container}>
            <button onClick={()=>setFilter("")} className={styles.all_button}>Todos</button>
            <button onClick={()=>setFilter("entrada")} className={styles.filter_button}>Entradas</button>
            <button onClick={()=>setFilter("despesa")} className={styles.filter_button}>Despesas</button>
          </div>
        </div>
        <NukenzieList filteredList={filteredList} removeFromList={removeFromList}/>
      </section>
    </main>
    </div>
  )
}








{/* <p>Dash</p>
<button onClick={() => setCurrentPage("")}>Inicio</button> */}