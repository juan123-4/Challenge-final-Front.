import React,{ useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      const urlApi = import.meta.env.VITE_API_URL; //Tampoco funciono en el login
      await fetch("http://localhost:3009/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Es importante para enviar cookies
        body: JSON.stringify({ idToken }),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log("Respuesta del backend:", data); 
          if (data.success) {
            console.log("voy a redirigir"); 
            navigate("/home_login");
          } else {
            console.error("Error en el login:", data.error);
          }
        })
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

    return (
        <>
        <Header />
        <div className={styles.login}>
        <h2 className={styles.titulo_Login}>Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className={styles.boton_Login}>Ingresar</button>
        </form>
        </div>
        </>
      );
    };

    export default Login;
