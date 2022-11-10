export function NumbersTable(props){
     const { limit } = props;
     let numberArr = [];

     for (let i = 1; i <= limit; i++) {
          numberArr.push(i);
     }

     let theme = 'odd';

     console.log(numberArr)

     return (
          <div className="tableWrap">
               {numberArr.map((number, i) => {
                    number % 2 === 0 ? theme = 'even' : theme = 'odd';
                    return (
                         <div key={i} className={`table-number ${theme}`}>
                              <span>{ number }</span>
                         </div>
                    )
               })
               }
               
          </div>
     )
}
