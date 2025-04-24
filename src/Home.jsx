import React from 'react';
import Header from './components/Header/Header';
import { useFavoritos } from './Context/Favoritos/FavoritosContext';
import "./App.css"


const Home = ({data}) => {

    const { favorites, toggleFavorite } = useFavoritos();
  
  return (
    <>
    <Header />
    <div className='lista'>
    <ul className={`cards-container ${data.length === 1 ? 'centrar' : ''}`}>
      {data.map(item => (
        <li key={item._id} className="card">
            <div className='primera'>
                <p className='letra'>{item.team}</p>
                <img src={item.teamImg} alt={item.team} />
                <p>{item.position}</p>
            </div>

            <div className='segundo'>
                <img src={item.playerImg} alt={item.name} className='imagen_player'/>
                <p className='letra'>{item.name}</p>
                <p>{item.Age}</p>
            </div>

            <div className='tercera'>
                <p className='letra'>{item.country}</p>
                <img src={item.countryImg} alt={item.country} className='imagen_country'/>
             
             <div className='peso_altura-together'>
                <div className='altura'>
                    <img src={item.heightImg} alt={item.height} className='imagen_altura'/>
                    <p>{item.height}</p>
                </div>

                <div className='peso'>
                    <img src={item.weightImg} alt={item.weight} className='imagen_peso'/>
                    <p>{item.weight}</p>
                </div>
                
            
         
             </div>

                <button className="favorite" onClick={() => toggleFavorite(item._id)}>
                  {favorites.includes(item._id) ? '⭐' : '☆'}
                </button>
            </div>
           
        </li>
      ))}
    </ul>
    </div>
    </>
  )
};

export default Home;


