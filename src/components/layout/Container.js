//Imagens
import Circle from "../../img/ArrowCircle.svg";
import Egressos from "../../img/egressosDefault.svg";
import Vector from "../../img/Vector.svg";

//Styles
import styles from "./Container.module.css";

//Components
import Login from "../form/Login.js";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          Faça o login <br />
          em Nossa plataforma
        </h1>
        <div className={styles.imgs}>
          <div className={styles.circulo}>
            <img src={Circle} alt="" />
            <img src={Egressos} alt="" />
          </div>
        </div>
      </div>

      <Login/>

    

      
    </div>
  );
};

export default Container;
