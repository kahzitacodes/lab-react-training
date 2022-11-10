import style from './style.module.css';
import { useState } from 'react';

export function LikeButton() {
     const [numLikes, setNum] = useState(0);
     const [indexBg, setBgIndex] = useState(0);
     let bgColors = ['purple','blue','green','yellow','orange','red'];
     
     let bg = bgColors[indexBg];

     function handleButton() {

          setNum(numLikes + 1)
          setBgIndex(indexBg + 1)

          if (indexBg === 5) {
               setBgIndex(indexBg - indexBg)
          }
     }
     return (
          <button style={{backgroundColor: bg}} className={style.likeButton} onClick={handleButton}>{numLikes} Likes</button>
     )
}