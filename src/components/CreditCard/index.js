import style from "./style.module.css";
import visaImg from "../../assets/images/visa.png"

import masterImg from "../../assets/images/mc_symbol.svg";

export function CreditCard(props) {
     const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
     
     
     let numbers = number.split('').map((element, index) => {
          return index <= 11 ? element = '•' :  element;
     })

     let contador = 3;

     for (let i = 0; i < numbers.length; i++){
          if(i === contador) {
               numbers.splice(i + 1, 0, " ") 
               contador += 5
          }
     }
     numbers.pop();
     numbers.join('');
               
     let year = String(expirationYear).split('').filter((element, index) => index >= 2).join('');
     
     let cardTypeImg = '';
     switch(type){
          case 'Visa':
               cardTypeImg = visaImg;
               break;
          default:
               cardTypeImg = masterImg;
     }

     return (
          <div data-type={type} style={{backgroundColor: bgColor, color: color}} className={style.cardWrapper}>
               <div className={style.cardLogo}>
                    <img src={cardTypeImg} alt={`logo da ${type}`}/>
               </div>
               <h3 className={style.cardNumber}>{numbers}</h3>
               <div className={style.infos}>
                    <div className={style.cardInfos}>
                         <p className={style.cardText}>Expires {expirationMonth}/{year}</p>
                         <p className={style.cardText}>{bank}</p>
                    </div>
                    <p className={style.cardText}>{owner}</p>
               </div>
          </div>
     )
}