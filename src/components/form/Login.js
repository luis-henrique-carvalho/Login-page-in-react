import React from "react";
import styles from "./Login.module.css";
import Vector from "../../img/Vector.svg";
import Cadastro from "../../img/Cadastro.svg";

const login = () => {
  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <form action="" className={styles.form}>
        <div>
          <label htmlFor="text">Usuario:</label>
          <input type="text" placeholder="Digite seu usuário" />
        </div>

        <div>
          <label htmlFor="text">Usuario:</label>
          <input type="text" placeholder="Digite sua senha" />
        </div>

        <button type="submit">
          <img src={Vector} alt="" />
        </button>

        <div className={styles.cadastro}>
          <h3>Não tem conta? Cadastre-se</h3>
          <img src={Cadastro} alt="" />
        </div>
        
      </form>
    </div>
  );
};

export default login;
