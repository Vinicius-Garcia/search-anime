import React, {useEffect, useState} from 'react';
import './App.css';
import api from './services/api'
import './Sidebar.css';
import './global.css'
import './Main.css'
import SelectAnime from './components/index'
import CardAnime from './components/card'
function App() {
  const [anime,setAnime] = useState([])
  Array.from(anime)
  
  
  useEffect(()=>{
    async function loadAnimes(){
      const response = await api.get('/anime');
      

      setAnime(response.data);
      console.log(response.data)
    }

    loadAnimes();
  },[]); 
  async function handleAddDev(data){
    
    var id = data.id;
    
    const response = await api.get('/anime/'+id)

    setAnime([...anime,response.data])

   
  }


  return (
    
    <div id="app">
    <aside>
      <strong>Buscar Anime</strong>
      <SelectAnime onSubmit={handleAddDev}/>
    </aside>
    <main>
        <ul>
          {anime.map(animes =>(
            <CardAnime  key={animes._id} anime={animes}/>
          ))}
          

        </ul>

      </main>
    
    </div>
  );
}

export default App;
