import React from 'react';
import Header from '../../components/Header/Header';
import { useFavoritos } from './FavoritosContext';
import styles from "./Favoritos.module.css";



const Favoritos = ({ data }) => {
    const { favorites, toggleFavorite } = useFavoritos();
    const favoritosFiltrados = data.filter(player => favorites.includes(player._id));

  return (
    <>
    <Header />
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
                <img src={item.playerImg} alt={item.name} className={styles.imagen_player}/>
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

export default Favoritos;




