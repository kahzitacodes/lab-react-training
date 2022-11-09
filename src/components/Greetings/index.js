export function Greetings(props) {
     const {lang, name} = props;
     let greeting = "";

     switch(lang) {
          case 'de':
               greeting = 'Hallo ';
               break;
          case 'fr':
               greeting = 'Bonjour ';
               break;
          case 'it':
               greeting = 'Buongiorno ';
               break;
          case 'pt':
               greeting = 'Bom dia ';
               break;
          default:
               greeting = 'Good morning ';
               break;
     }
     return (
          <div data-lang={lang} className="wrap-span">
               <span>{greeting} {name}</span>
          </div>
     )
     
}