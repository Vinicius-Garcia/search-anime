import React from 'react';
import './styles.css';

function AnimeItem(props){
    const {anime} = props;
    return(
      <div className="container">
      <header className="card">
        <h1 className="title">
          {anime.title_japanese}
        </h1>
        <div className="center">
        <img className="img"src={anime.image_url}/>
        </div>
        
        <p className="subtitle">{anime.synopsis}</p>
      </header>
    </div>
    );
}

export default AnimeItem;