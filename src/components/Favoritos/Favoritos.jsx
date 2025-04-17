import React from 'react';
import Header from '../Header/Header';
import { useFavoritos } from './FavoritosContext';
import "./Favoritos.css"



const Favoritos = ({ data }) => {
    const { favorites, toggleFavorite } = useFavoritos();
    const favoritosFiltrados = data.filter(player => favorites.includes(player._id));

  return (
    <>
    <Header />
    <div className='lista'>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_dos"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_tres"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_cuatro"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_cinco"></img>

    {favoritosFiltrados.length > 0 ? (
    <ul className="cards-container">
      {favoritosFiltrados.map(item => (
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

             <button onClick={() => toggleFavorite(item._id)}>
                  {favorites.includes(item._id) ? '⭐' : '☆'}
                </button>
            </div>
           
        </li>
      ))}
    </ul>) 
    : (
        <p className='mensaje'><strong>No hay jugadores favoritos guardados.</strong></p>
      )}
    </div>
    </>
  );
};

export default Favoritos;



// const [favorites, setFavorites] = useState([]);

// useEffect(() => {
//   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   const filtered = data.filter(player => storedFavorites.includes(player._id));
//   setFavorites(filtered);
// }, [data]);
