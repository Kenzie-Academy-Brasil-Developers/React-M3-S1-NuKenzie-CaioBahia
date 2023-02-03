import React from 'react'
import styles from "./syle.module.css"
import logo from "../../assets/Logo/Nu Kenzie-White.svg"
import ImgLP from "../../assets/LandingPGIMG/Group 262.svg"

export const LandingPG = ({setCurrentPage}) => {
  return (
    <main>
      <div className={styles.main_subistitute}>

      <div className={styles.main_Container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo NuKenzie" />
        </div>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <fieldset>
        <button className={styles.goto_dash} onClick={() => setCurrentPage("dashboard")}>Começar</button>
        </fieldset>
      </div>
      <div className={styles.imgLP}>
        <img src={ImgLP} alt="Landing page image" />
      </div>
      </div>
    </main>
  )
}
