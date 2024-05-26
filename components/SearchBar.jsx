import style from './SearchBar.module.css';
import {useState} from 'react';

export default function  SearchBar({onsearch}) {
   const [ id, setid] = useState('');
   const handleChange=(evento)=>{
      console.log()
      setid(evento.target.value)
   }
   const handleEnter=(event)=>{
      if(event.key === 'Enter'){
         onsearch.onsearch();
      }
   }
   
   return (
      <div>
         <input type='search'
                placeholser='Search...'
                className={style.input}
                onKeyUp={handleEnter}   
                onChange={handleChange}
                value={id}
                />
      <button onClick={() => onsearch(id)}>Agregar</button>
      </div>
   );
}
