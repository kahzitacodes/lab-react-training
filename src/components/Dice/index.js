import style from "./style.module.css";
import dice0 from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"

import { useState } from "react";

export function Dice(){

     const [state, setState] = useState(dice3);
     const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

     function changeDice(){
          
          setState(dice0)

          setTimeout(getRightDice, 1000);
     }

     function getRightDice() {
          let random = Math.floor(Math.random() * (5  + 1)); 
          setState(dices[random])
     }

     

     return (
          <div className={style.diceContent}>
               <img src={state} alt="Dice" onClick={changeDice}/>
          </div>
     )
}