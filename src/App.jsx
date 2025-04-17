import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import Search from "./components/search/Search.jsx";
import Country from "./components/Country/Country.jsx";
import "./App.css"
import React from 'react';
import Team from "./components/Team/Team.jsx";
import Favoritos from "./components/Favoritos/Favoritos.jsx";
import { FavoritosProvider } from './components/Favoritos/FavoritosContext.jsx';



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
        <FavoritosProvider>
        <Router>
        <div>
            
            {data === null 
            ? (<div>cargando...</div>) 
            : 
            <Routes>
                <Route path="/" element={<Home data={data}  />} />
                <Route path="/player" element={<Search />} />
                <Route path="/country" element={<Country />} />
                <Route path="/team" element={<Team />} />
                <Route path="/favoritos" element={<Favoritos data={data} />} />
                
            </Routes>
            }
            
        </div>
        </Router>
        </FavoritosProvider>
    )
    };

    export default App;