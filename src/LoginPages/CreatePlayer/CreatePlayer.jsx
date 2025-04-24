import React, { useState } from "react";
import styles from "./CreatePlayer.module.css";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

const CrearJugador = () => {
  const [name, setName] = useState("");
  const [playerImg, setPlayerImg] = useState("");
  const [position, setPosition] = useState("");
  const [Age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [countryImg, setCountryImg] = useState("");
  const [team, setTeam] = useState("");
  const [teamImg, setTeamImg] = useState("");
  const [height, setHeight] = useState("");
  const [heightImg, setHeightImg] = useState("");
  const [weight, setWeight] = useState("");
  const [WeightImg, setWeightImg] = useState("");
  const [descripcion,setDescripcion]=useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoJugador = { name,playerImg,position,Age,country,countryImg,team,teamImg,height,heightImg,weight,WeightImg,descripcion };

    try {
      const res = await fetch("http://localhost:3009/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoJugador),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Jugador creado exitosamente!");
        setName("");
        setPlayerImg("");
        setPosition("");
        setAge("");
        setCountry("");
        setCountryImg("");
        setTeam("");
        setTeamImg("");
        setHeight("");
        setHeightImg("");
        setWeight("");
        setWeightImg("");
        setDescripcion("")
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error al crear jugador:", error);
      alert("Ocurrió un error al crear el jugador.");
    }
  };

  return (
    <>
    <HeaderLogin/>
    <div className={styles.create}>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_dos}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_tres}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cuatro}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cinco}></img>
      
      <h2 className={styles.titulo_crear}>Crear Nuevo Jugador</h2>
      <form onSubmit={handleSubmit}  className={styles.form}>
        <input
          type="text"
          placeholder="Nombre del Jugador"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Url de la imagen del Jugador"
          value={playerImg}
          onChange={(e) => setPlayerImg(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Posicion del Jugador"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Edad del Jugador"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        
        <input
          type="text"
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Url de la imagen del pais del Jugador"
          value={countryImg}
          onChange={(e) => setCountryImg(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Equipo del Jugador"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Url de la imagen del equipo del Jugador"
          value={teamImg}
          onChange={(e) => setTeamImg(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Url de la imagen de altura"
          value={heightImg}
          onChange={(e) => setHeightImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
         <input
          type="text"
          placeholder="Url de la imagen de peso"
          value={WeightImg}
          onChange={(e) => setWeightImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion del Jugador"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />


        <button type="submit" className={styles.BotonCreate}>Crear Jugador</button>
      </form>
    </div>
    </>
  );
};

export default CrearJugador;
