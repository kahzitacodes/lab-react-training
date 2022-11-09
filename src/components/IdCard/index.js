import style from "./style.module.css"

export function IdCard(props){
     return (
          <div className={style.IdCard}>
               <img src={props.picture} alt={props.firstName} />
               <div className={style.idCardContent}>
                    <p><strong>First name: </strong>{props.firstName}</p>
                    <p><strong>Last name: </strong>{props.lastName}</p>
                    <p><strong>Gender: </strong>{props.gender}</p>
                    <p><strong>Hight: </strong>{props.height}</p>
                    <p><strong>Birth: </strong>{props.birth}</p>
               </div>
          </div>

     );
}