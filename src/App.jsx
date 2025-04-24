import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import Search from "./components/search/Search.jsx";
import Country from "./components/Country/Country.jsx";
import React from 'react';
import Team from "./components/Team/Team.jsx";
import Favoritos from "./Context/Favoritos/Favoritos.jsx";
import { FavoritosProvider } from './Context/Favoritos/FavoritosContext.jsx';


// Login
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import { LogoutProvider } from "./Context/Logout/Logout.jsx";
import Favoritos_Login from "./LoginPages/Favorites_Login/Favorite_Login.jsx";
import EditarJugador from "./LoginPages/UpdatePlayer/UpdatePlayer.jsx";
import CrearJugador from "./LoginPages/CreatePlayer/CreatePlayer.jsx"
import Home_Login from "./LoginPages/Home_Login/Home_Login.jsx"; 
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Country_Login from "./LoginPages/Country_Login/Country_Login.jsx";
import Search_Login from "./LoginPages/Search_Login/Search_Login.jsx";
import Team_Login from "./LoginPages/Team_Login/Team_Login.jsx";








    const App = () => {
    const [data, setData] = useState(null)
    const urlApi = import.meta.env.VITE_API_URL;

    const fetchData = async () => {
    try {
        const response = await fetch(urlApi)
        const resData = await response.json()
        setData(resData)
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(() => {
    fetchData()
    }, [])



    return (
        <LogoutProvider>  
        <FavoritosProvider>
        <Router>
        <div>
            
            {data === null 
            ? (<div>cargando...</div>) 
            : 
            <Routes>
                <Route path="/" element={<Home data={data}  />} />
                <Route path="/search" element={<Search />} />
                <Route path="/country" element={<Country />} />
                <Route path="/team" element={<Team />} />
                <Route path="/favoritos" element={<Favoritos data={data} />} />
                
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home_login" element={ <ProtectedRoute> <Home_Login data={data} /> </ProtectedRoute>}/>
                <Route path="/crear" element={ <ProtectedRoute> <CrearJugador /> </ProtectedRoute>}/>
                <Route path="/favoritos_login" element={ <ProtectedRoute> <Favoritos_Login data={data} /> </ProtectedRoute>}/>
                <Route path="/editar/:id" element={ <ProtectedRoute> <EditarJugador /> </ProtectedRoute>}/>
                <Route path="/country_login" element={ <ProtectedRoute> <Country_Login /> </ProtectedRoute>}/>
                <Route path="/search_login" element={ <ProtectedRoute> <Search_Login /> </ProtectedRoute>}/>
                <Route path="/team_login" element={ <ProtectedRoute> <Team_Login /> </ProtectedRoute>}/>
                

                
            </Routes>
            }
            
        </div>
        </Router>
        </FavoritosProvider>
        </LogoutProvider> 
    )
    };

    export default App;