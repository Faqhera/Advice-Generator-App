import React, { useState, useEffect } from 'react';
import styles from "./Advice.module.css";
import desktopDivider from "../images/pattern-divider-desktop.svg";
import mobileDivider from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

const Advice = () => {
   const [data, setData] = useState({
    id: "",
    advice: "",
});

const [buttonClick, setButtonClick] =useState(0);

useEffect (() => {
fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then((data) => 
setData ({
id: data.slip.id,
advice: data.slip.advice,
}) 
)
.catch( error => console.error("Error", error))
},[buttonClick])

const getAdvice = () => {
setButtonClick(buttonClick + 1)
}
return(
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.card}>

           <div className={styles.id}>
            <p>ADVICE #{data.id}</p>
           </div>

           <div className={styles.advice}>
              <p>"{data.advice}"</p>
           </div>

           <div className={styles.image}>
             <picture>
                <source media="(min-width: 1440px)" srcSet={desktopDivider} />
                <source media="(max-width: 375px)" srcSet={mobileDivider}/>
               <img src={desktopDivider} alt="Divider"/>
              </picture>
           </div>

      </div>
      <div className={styles.dice}>
          <img src={dice} alt="Dice" onClick={getAdvice}/>
      </div>
    </div>
  </div>
    ); 
};
export default Advice;