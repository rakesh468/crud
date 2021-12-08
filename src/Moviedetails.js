import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState,useEffect } from 'react';

// getting movie details by id using fetch//
export function Moviedetails() {
  const history = useHistory();
  const { id } = useParams();
//   const movie = movies[id];
  const [movie,setmovie]=useState({});
  useEffect(()=>{
    fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setmovie(mvs))
  },[id])
console.log(movie);  
 
  const styles = { color: movie.rating < 8 ? "crimson" : "green" };

  return (
    <div className="detail-container">
      <div className="container">
        <img src={movie.poster} alt={movie.name} className="poster" />
        <div className="details">
          <p className="movie-name">{movie.name}</p>
          <p className="movie-rating" style={styles}>⭐{movie.rating}</p>
        </div>
        <p className="movie-summary"> <b>Summary:</b> {movie.summary}</p>
        <Button variant="outlined" onClick={() => history.goBack("/movies")}>
          <ArrowBackIcon /> Back</Button>

      </div>
    </div>
  );
}
