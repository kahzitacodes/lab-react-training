export function Random(props) {
     const {min, max} = props;

     let result = Math.floor(Math.random() * (max - min) + min);

     return (
          <div className="wrap-span">
               <span>Random value betwen {min} and {max} =&gt; {result} </span>
          </div>
     )
}