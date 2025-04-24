import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Header from "../../components/Header/Header";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Se registra el usuario con Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Redirige a la página de login después de registrarse
      navigate("/login");
    } catch (error) {
      alert("Error al registrarse: " + error.message);
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.login}>
    <h2 className={styles.titulo_Login}>Registro</h2>
    <form onSubmit={handleRegister} className={styles.form}>
      <input
        type="email"
        placeholder="Crea un Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Crea una Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className={styles.boton_Login}>Registrarse</button>
    </form>
    </div>
    </>
  );
};

export default Register;
