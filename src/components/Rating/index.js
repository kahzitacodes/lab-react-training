import style from "./style.module.css";

export function Rating(props) {
     let { children } = props;

     children = Number(children);

     let stars = "";

     if (children === 5 || children >= 4.6) {
          stars = "★ ★ ★ ★ ★";

     } else if (children < 5 && children >= 4){
          stars = "★ ★ ★ ★ ☆";

     } else if (children < 4 && children >= 3){
          stars = "★ ★ ★ ☆ ☆";

     } else if (children < 3 && children >= 2){
          stars = "★ ★ ☆ ☆ ☆";

     } else if (children < 2 && children >= 1){
          stars = "★ ★ ☆ ☆ ☆";

     } else {
          stars = "☆ ☆ ☆ ☆ ☆";
     } 

     return (
          <div className="wrapRating">     
               <span>{stars}</span>
          </div>
     )
}