import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
  
    return (
        <>
        <div className={styles.navList}>
            <nav>
                <Link to='/' className={styles.Home}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906667/png-transparent-black-house-illustration-house-computer-icons-symbol-home-adress-angle-building-text-removebg-preview_gl5gzm.png" alt="" /></Link>
                <Link to="/country" className={styles.country}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906333/png-transparent-earth-symbol-globe-world-world-map-hindi-language-learning-geography-removebg-preview_zf8rpj.png" alt="Countris" /></Link>
                <Link to="/team" className={styles.team}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/t_siuuuu/v1744826300/images-removebg-preview_1_hlcvdl.png" alt="Team" /></Link>
                <Link to="/favoritos" className={styles.favoritos}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744906444/png-transparent-favorite-star-favorites-favourite-multimedia-multimedia-icon-thumbnail-removebg-preview_q7wits.png" alt="Favoritos" /></Link>
                <Link to="/search" className={styles.buscar}><img src="https://img.icons8.com/ios7/512/search.png" alt="Buscar"  /></Link>
                <Link to="/register" className={styles.register}><img src="https://cdn-icons-png.flaticon.com/512/6469/6469169.png"  alt='Register'/></Link>
                <Link to="/login" className={styles.login}><img src="https://res.cloudinary.com/dsdkjnsrn/image/upload/v1744905485/images-removebg-preview_2_kxawdk.png" alt="Login"  /></Link>
                
            </nav>
        </div>
        </>

    );
}

export default Header;