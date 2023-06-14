import { useNavigate } from 'react-router-dom';

export default function MovieList ({movie}){
  const navigate = useNavigate()
    return(
        <div className="card m-2 bg-dark" style={{height:'95%'}}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="card-img-top" alt="..."/>
          <div className="card-body text-warning">
            <h5 className="card-title text-center">{movie.title}</h5>
            <p className="card-text text-light">{movie.overview}</p>
            <p className="card-text text-light bg-success text-center">{movie.release_date}</p>
            <div className="d-grid">
              <button type="button" className="btn btn-primary btn-block"  onClick={()=> navigate(`/details/${movie.id}`)}>Details</button>
            </div>
          </div>
        </div>
       

    )
}