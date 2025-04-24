import React from 'react';
import styles from "./Ventana.module.css";

const VentanaPlayer = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
        <button className={styles.close_button} onClick={onClose}>X</button>
        <h2>{player.name}</h2>
        <img src={player.playerImg} alt={player.name} />
        <p><strong>Descripción:</strong> {player.descripcion}</p>
      </div>
    </div>
  );
};

export default VentanaPlayer;
