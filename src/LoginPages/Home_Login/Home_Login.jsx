import React,{useState}from 'react';
import { useFavoritos } from '../../Context/Favoritos/FavoritosContext';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import styles from "./Home_Login.module.css";
import VentanaPlayer from '../Ventana/Ventana';
import { useNavigate } from 'react-router-dom';


const Home_Login = ({data}) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const { favorites, toggleFavorite } = useFavoritos();
  const navigate=useNavigate()
  
  return (
    <>
    <HeaderLogin />
    <VentanaPlayer player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    <div className={styles.lista}>
    <ul className={`${styles.cards_container} ${data.length === 1 ? styles.centrar : ''}`}>
      {data.map(item => (
        <li key={item._id} className={styles.card}>
             
            <div className={styles.primera} >
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

                <button className={styles.favorite} onClick={() => toggleFavorite(item._id)}>
                  {favorites.includes(item._id) ? '⭐' : '☆'}
                </button>
                <button className={styles.boton_editar} onClick={() => navigate(`/editar/${item._id}`)}>Editar</button>
            </div>
           
        </li>
      ))}
    </ul>
    </div>
    </>
  )
};

export default Home_Login;


