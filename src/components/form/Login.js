import { useState } from "react";
//Styles
import styles from "./Login.module.css";

//images
import Vector from "../../img/Vector.svg";
import Cadastro from "../../img/Cadastro.svg";

const Login = () => {
  const [login, setLogin] = useState();
  const [senha, setsenha] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(`Login do usuário:${login}`);
    console.log(`Senha do usuário:${senha}`);
    console.log("")
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLogin(e.target.value);
  };

  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <form onSubmit={submit} className={styles.form}>
        <div>
          <label htmlFor="name">
            Usuario:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu usuário"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Usuario:
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => {
                e.preventDefault();
                setsenha(e.target.value);
              }}
            />
          </label>
        </div>

        <button type="submit">
          <img src={Vector} alt="" />
        </button>
      </form>

      <div className={styles.cadastro}>
        <h3>Não tem conta? Cadastre-se</h3>
        <img src={Cadastro} alt="" />
      </div>
    </div>
  );
};

export default Login;
