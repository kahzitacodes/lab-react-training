import style from "./style.module.css"

export function IdCard(props){

     let data = props.birth;

     let day = data.getDate();
     let year = data.getUTCFullYear();

     const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
     const weekdayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];

     let month = monthNames[data.getMonth()];
     let weekDay = weekdayNames[data.getDay()];

     //let formatDate = (new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: '2-digit'}).format(data)).toString();

     let formatDate = `${weekDay} ${month} ${day} ${year}`;
     
     return (
          <div className={style.IdCard}>
               <img src={props.picture} alt={props.firstName} />
               <div className={style.idCardContent}>
                    <p><strong>First name: </strong>{props.firstName}</p>
                    <p><strong>Last name: </strong>{props.lastName}</p>
                    <p><strong>Gender: </strong>{props.gender}</p>
                    <p><strong>Hight: </strong>{props.height}</p>
                    <p><strong>Birth: </strong>{formatDate}</p>
               </div>
          </div>

     );
}
