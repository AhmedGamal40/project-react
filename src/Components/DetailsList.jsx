import { useEffect, useState } from 'react';
import axiosApi from '../API/APIMovies';
import { useParams } from 'react-router-dom';
import { useContext } from "react"
import { ContextLanguage } from "../Context/Languages"

export default function Details (){
  const {Lang, setLang} = useContext(ContextLanguage);
    const [movies , setMovie ]  = useState({});
    const params = useParams() ;

    useEffect (()=> {
      axiosApi.get(`/${params.id}?&page=1&language=${Lang}`)

        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    },[Lang , params.id]);
  
    return(
    <div className="bg-dark" >
      <div className="container">
        <div className="row bg-dark d-flex justify-content-center align-items-center">
          <div className="card bg-dark"style={{width:'60%'}}>
            <img src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} className="card-img-top m-2" alt="..." />
            <div className="card-body text-warning">
              <h5 className="card-title text-center">{movies.title}</h5>
              <p className="card-text text-light">{movies.overview}</p>
              <p className="card-text text-light bg-success text-center">{movies.release_date}</p>
              <div className="d-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}