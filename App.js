import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About/About';
import Detail from './components/Detail';
import Form from './components/Form/Form'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const email ='jja@gmail.com'
const password='123asd';
function App() {
  
  const location = useLocation();
  const navigate= useNavigate()
  const [characters, setCharacters] = useState([]);
 

  const  [access, setAcccess]=useState(false);

  const login = ({userData}) => {
      if(userData.email === email && userData.password=== password){
        setAcccess(true);
        navigate('/home');
      }
  }
 useEffect(()=>{
 !access && navigate('/')
 },[access])
    const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const onClose = (id) => {
    
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  console.log(characters);

  return (
    <div className='App'>
      { 
        location.pathname!=='/' && <Nav onSearch={onSearch} />
        
      }
      
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}



export default App
