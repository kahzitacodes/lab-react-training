import style from "./style.module.css";

import { Rating } from "../Rating";

export function DriverCard(props){

     const { name, rating, img, car} = props;

     return (
          <div className={style.cardWrapper}>
               <div className={style.cardImg}>
                    <img src={img} alt={name} />
               </div>
               <div className={style.cardContent}>
                    <h4>{name}</h4>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
               </div>
          </div>
     )
}