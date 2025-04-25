import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./UpdatePlayer.module.css";
import HeaderLogin from "../HeaderLogin/HeaderLogin";


const EditarJugador = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jugador, setJugador] = useState(null);

  // Obtener datos del jugador al montar
  useEffect(() => {
    fetch(`http://localhost:3009/id/${id}`)
      .then((res) => res.json())
      .then((data) => setJugador(data))
      .catch((err) => console.error("Error al cargar jugador", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJugador({ ...jugador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlApi = import.meta.env.VITE_API_URL;
    fetch(`${urlApi}/id/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jugador),
    })
      .then(() => navigate("/home_login"))
      .catch((err) => console.error("Error al actualizar", err));
  };

  if (!jugador) return <p>Cargando jugador...</p>;

  return (
    <>
    <HeaderLogin />
    <div className={styles.Update}>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_dos}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_tres}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cuatro}></img>
      <img src="https://www.tenvinilo.com/vinilos-decorativos/img/preview/vinilo-infantil-pelota-futbol-color-1399.png" width="100" height="100" id={styles.pelota_cinco}></img>
      <h2 className={styles.titulo_editar}>Editar Jugador</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del Jugador"
          value={jugador.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="playerImg"
          placeholder="Imagen del Jugador"
          value={jugador.playerImg}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Posición"
          value={jugador.position}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Age"
          placeholder="Edad"
          value={jugador.Age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="País"
          value={jugador.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="countryImg"
          placeholder="Imagen del País"
          value={jugador.countryImg}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="team"
          placeholder="Equipo"
          value={jugador.team}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="teamImg"
          placeholder="Imagen del Equipo"
          value={jugador.teamImg}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="height"
          placeholder="Altura"
          value={jugador.height}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="heightImg"
          placeholder="Imagen de Altura"
          value={jugador.heightImg}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Peso"
          value={jugador.weight}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="weightImg"
          placeholder="Imagen de Peso"
          value={jugador.weightImg}
          onChange={handleChange} 
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion del Jugador"
          value={jugador.descripcion}
          onChange={handleChange} 
        />

        <button type="submit" className={styles.boton_editar}>Guardar Cambios</button>
      </form>
    </div>
    </>
  );
};

export default EditarJugador;
