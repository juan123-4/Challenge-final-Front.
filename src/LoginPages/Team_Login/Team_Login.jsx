import React, { useState, useEffect,useRef } from "react";
import styles from "./Team_Login.module.css";
import { useFavoritos } from '../../Context/Favoritos/FavoritosContext';
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import VentanaPlayer from '../Ventana/Ventana';
import { useNavigate } from "react-router-dom";



const Team_Login = () => {
  const { favorites, toggleFavorite } = useFavoritos();
  const [team, setTeam] = useState("");
  const [Players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef=useRef(null)
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
        inputRef.current?.focus();
      }, []); 

  useEffect(() => {
    if (team.trim() === "") {
      setPlayers([]);
      return;
    }

    const delay = setTimeout(() => {
      buscarJugadores();
    }, 500);

    return () => clearTimeout(delay);
  }, [team]);

  const buscarJugadores = async () => {
    setLoading(true);
    try {
      const urlApi = import.meta.env.VITE_API_URL;
      const response = await fetch(`${urlApi}/player/team/${team}`);
      if (!response.ok) {
        setPlayers([]);
        setLoading(false);
        return;
      }
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error("Error buscando Equipo:", error);
      setPlayers([]);
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setTeam(e.target.value);
  };

  return (
    <>
    <HeaderLogin />
    <VentanaPlayer player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
    <div className={styles.contenedor_central}>
        
      <div className={styles.input}>
      <input
        type="text"
        value={team}
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Escribe un Equipo de futbol..."
        style={{ padding: "10px", fontSize: "16px" }}/>
      </div>

      <div>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_dos}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_tres}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cuatro}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cinco}></img>

      {loading && <p>Buscando Equipo...</p>}

      {Players.length > 0 ? (
        <ul className={`${styles.cards_container} ${Players.length === 1 ? styles.centrar : ''}`}>
          {Players.map((item) => (
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
                <img src={item.countryImg} alt={item.country} className={styles.imagen_country} />

                <div className={styles.peso_altura_together}>
                  <div className={styles.altura}>
                    <img src={item.heightImg} alt={item.height} className={styles.imagen_altura} />
                    <p>{item.height}</p>
                  </div>

                  <div className={styles.peso}>
                    <img src={item.weightImg} alt={item.weight} className={styles.imagen_peso} />
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
      ) : !loading && team !== "" ? (
        <p className={styles.mensaje}><strong>No se encontró jugadores del "{team}"</strong></p> 
      ) : null}
      </div>
    </div>
    </>
  );
};

export default Team_Login;
