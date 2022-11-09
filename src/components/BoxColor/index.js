import style from "./style.module.css";

export function BoxColor(props) {
     const {r, g, b} = props;

     const rgbToHex = (rgb) => {
          let hex = rgb.toString(16);
          return hex.length === 1 ? '0' + hex : hex; 
     }

     const fullHex = (r, g, b) => {
          return '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
     }

     let textColor = (g) => {
          return g < 180 ? 'white' : 'black'
     }


     return (
          <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: textColor(g)}} className={style.wrapBox}>
               <p>rgb({r}, {g}, {b})</p>
               <p>{fullHex(r, g, b)}</p>
          </div>
     )
}

