import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HeaderLogin.module.css";
import { useLogout } from "../../Context/Logout/Logout";

function HeaderLogin() {
     const { logout } = useLogout();
  
    return (
        <>
        <div className={styles.navList}>
            <nav>
                <Link to='/home_login' className={styles.Home}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906667/png-transparent-black-house-illustration-house-computer-icons-symbol-home-adress-angle-building-text-removebg-preview_gl5gzm.png" alt="" /></Link>
                <Link to="/country_login" className={styles.country}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906333/png-transparent-earth-symbol-globe-world-world-map-hindi-language-learning-geography-removebg-preview_zf8rpj.png" alt="Countris" /></Link>
                <Link to="/team_login" className={styles.team}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/t_siuuuu/v1744826300/images-removebg-preview_1_hlcvdl.png" alt="Team" /></Link>
                <Link to="/favoritos_login" className={styles.favoritos}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906444/png-transparent-favorite-star-favorites-favourite-multimedia-multimedia-icon-thumbnail-removebg-preview_q7wits.png" alt="Favoritos" /></Link>
                
                <Link to="/search_login" className={styles.buscar}><img src="https://img.icons8.com/ios7/512/search.png" alt="Buscar"  /></Link>
                <Link to="/crear" className={styles.crear}><img src="https://images.vexels.com/media/users/3/141231/isolated/preview/c59b6035d104844f7006c5d74f200be6-jugador-de-futbol-golpear-1.png"  alt='Register'/></Link>
                <Link to="/login"  className={styles.logout}><button onClick={logout}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1745348675/png-clipart-computer-icons-exit-angle-text-removebg-preview_g64s99.png" alt="Logout"  /></button></Link>
            </nav>
        </div>
        </>

    );
}

export default HeaderLogin;