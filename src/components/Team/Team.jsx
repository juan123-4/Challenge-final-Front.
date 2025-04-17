import React, { useState, useEffect,useRef } from "react";
import "./Team.css"
import Header from "../Header/Header";
import { useFavoritos } from '../Favoritos/FavoritosContext';

const Team = () => {
  const { favorites, toggleFavorite } = useFavoritos();
  const [team, setTeam] = useState("");
  const [Players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef=useRef(null)

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
      const response = await fetch(`http://localhost:3009/player/team/${team}`);
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
    <Header />
    <div className="contenedor_central">
        
      <div className="input">
      <input
        type="text"
        value={team}
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Escribe un Equipo de futbol..."
        style={{ padding: "10px", fontSize: "16px" }}/>
      </div>

      <div>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_dos"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_tres"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_cuatro"></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id="pelota_cinco"></img>

      {loading && <p>Buscando Equipo...</p>}

      {Players.length > 0 ? (
        <ul className="cards-container">
          {Players.map((item) => (
            <li key={item._id} className="card">
              <div className="primera">
                <p className="letra">{item.team}</p>
                <img src={item.teamImg} alt={item.team} />
                <p>{item.position}</p>
              </div>

              <div className="segundo">
                <img src={item.playerImg} alt={item.name} className="imagen_player" />
                <p className="letra">{item.name}</p>
                <p>{item.Age}</p>
              </div>

              <div className="tercera">
                <p className="letra">{item.country}</p>
                <img src={item.countryImg} alt={item.country} className="imagen_country" />

                <div className="peso_altura-together">
                  <div className="altura">
                    <img src={item.heightImg} alt={item.height} className="imagen_altura" />
                    <p>{item.height}</p>
                  </div>

                  <div className="peso">
                    <img src={item.weightImg} alt={item.weight} className="imagen_peso" />
                    <p>{item.weight}</p>
                  </div>
                </div>
                <button onClick={() => toggleFavorite(item._id)}>
                  {favorites.includes(item._id) ? '⭐' : '☆'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : !loading && team !== "" ? (
        <p className='mensaje'><strong>No se encontró jugadores del "{team}"</strong></p> 
      ) : null}
      </div>
    </div>
    </>
  );
};

export default Team;
