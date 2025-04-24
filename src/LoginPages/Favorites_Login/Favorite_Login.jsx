import React, { useState } from 'react';
import { useFavoritos } from '../../Context/Favoritos/FavoritosContext';
import styles from "./Favorite_Login.module.css";
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import VentanaPlayer from "../../LoginPages/Ventana/Ventana";
import { useNavigate } from 'react-router-dom';


const Favoritos_Login = ({ data }) => {
    const { favorites, toggleFavorite } = useFavoritos();
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const favoritosFiltrados = data.filter(player => favorites.includes(player._id));
    const navigate=useNavigate()

  return (
    <>
    <HeaderLogin />
    <VentanaPlayer player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    <div className={styles.lista}>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_dos}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_tres}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cuatro}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cinco}></img>

    {favoritosFiltrados.length > 0 ? (
    <ul className={`${styles.cards_container} ${favoritosFiltrados.length === 1 ? styles.centrar : ''}`}>
      {favoritosFiltrados.map(item => (
        <li key={item._id} className={styles.card}>
         
            
            <div className={styles.primera}>
                <p className={styles.letra}>{item.team}</p>
                <img src={item.teamImg} alt={item.team} />
                <p>{item.position}</p>
            </div>

            <div className={styles.segundo}>
                <img src={item.playerImg} alt={item.name} className={styles.imagen_player} onClick={() => setSelectedPlayer(item)}/>
                <p className={styles.letra}>{item.name}</p>
                <p>{item.Age}</p>
            </div>

            <div className={styles.tercera}>
                <p className={styles.letra}>{item.country}</p>
                <img src={item.countryImg} alt={item.country} className={styles.imagen_country}/>
             
             <div className={styles.peso_altura_together}>
                <div className={styles.altura}>
                    <img src={item.heightImg} alt={item.height} className={styles.imagen_altura}/>
                    <p>{item.height}</p>
                </div>

                <div className={styles.peso}>
                    <img src={item.weightImg} alt={item.weight} className={styles.imagen_peso}/>
                    <p>{item.weight}</p>
                </div>
                
            
         
             </div>

             <button  className={styles.favorite} onClick={() => toggleFavorite(item._id)}>
                  {favorites.includes(item._id) ? '⭐' : '☆'}
             </button>
             <button className={styles.boton_editar} onClick={() => navigate(`/editar/${item._id}`)}>Editar</button>
            </div>
           
        </li>
      ))}
    </ul>) 
    : (
        <p className={styles.mensaje}><strong>No hay jugadores favoritos guardados.</strong></p>
      )}
    </div>
    </>
  );
};

export default Favoritos_Login;




