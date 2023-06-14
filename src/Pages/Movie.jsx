import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import axiosApi from "../API/APIMovies";
// import axios from "axios";
import { useContext } from "react"
import { ContextLanguage } from "../Context/Languages"


export default function Movie(){
    const {Lang, setLang} = useContext(ContextLanguage);
    const  [movies , moviesSet]= useState([]);
    useEffect(()=>{
        axiosApi.get(`/popular?&page=1&language=${Lang}`)
        .then((res) => moviesSet (res.data.results))
        .catch((err) => console.log(err))
    },[Lang]);
    return (
    <div className="bg-dark">
        <div className="container">
            <div className="row bg-dark">
            {movies.map((movie)=>{
                return(
                    <div className=" col-md-4 col-sm-6"  key={movie.id}>
                        <MovieList movie={movie}/>
                    </div>
                    )
            })}  
            </div>
        </div>
    </div>
    )
}