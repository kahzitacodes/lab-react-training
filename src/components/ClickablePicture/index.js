import style from "./style.module.css";
import { useState } from "react";

export function ClickablePicture(props) {

     let { img, imgClicked} = props;

     const [image, setImage] = useState(img)

     function changeImage(e) {

          let srcAtual = e.target.attributes.src.nodeValue;

          if(srcAtual === img) {
               setImage(imgClicked)
          }    
          if (srcAtual === imgClicked) {
               setImage(img)
          }
     }

     return (
          <div className={style.imageWrap}>
               <img src={image} alt="It changes when you click it" onClick={changeImage}/>
          </div>
     )
}