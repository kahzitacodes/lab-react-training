import style from "./style.module.css"
import classnames from 'classnames';
import { useState } from "react";

export function Carousel(props){
     
     const { images } = props;
     const imagesArr = [...images];
     const [state, setState] = useState(0)
     
     function changeImage(e) {
          
          let value = e.target.value;

          if (value === 'next') {

               state === 3 ? setState(3) : setState(state + 1)
                         
          }
          if (value === 'prev') {

               state === 0 ? setState(0) : setState(state - 1)
               
          }
          
     }

     return (
          <div className={style.carouselWrapper}>

               <div className={style.displayImage}>
                    <img src={imagesArr[state]} key={imagesArr[state]} alt="I'm sorry I don't have it" />
                    {/*{imagesArr.map((image) =>  {
                         return <img src={image} key={image} alt="I'm sorry I don't have it" />
                    })}*/}
                    
               </div>

               <div className={style.navigation}>
                    <button className={classnames(style.btn, style.btnLeft)} type="button" value='prev' onClick={changeImage}>❮</button>
                    <button className={classnames(style.btn, style.btnRight)} type="button" value='next' onClick={changeImage}>❯</button>
               </div>

          </div>
     )
}