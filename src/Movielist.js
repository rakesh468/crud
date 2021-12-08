import { Movie } from './Movie';
import {useHistory} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState,useEffect } from 'react';

export function Movielist() {
  const[movies,setmovies]=useState([]);
  // get method to reteirve data from mock api//
const getmovies=()=>{
  fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies",{method:"GET"})
  .then((data)=>data.json())
  .then((mvs)=>setmovies(mvs)) 
}
useEffect(getmovies,[])
// to delete the data using DELETEE method //
const deletemovie=(id)=>{
  fetch(`https://6166c4d613aa1d00170a66f1.mockapi.io/newmovies/${id}`,{
    method:"DELETE"
  })
  .then(()=>getmovies())
}
  const history=useHistory()
  return (
    <div className="movie-cover">
      {movies.map(({ name, rating, summary, poster,id }) => (
        <Movie name={name} poster={poster} rating={rating} summary={summary} id={id} key={id}
        deletebutton={<IconButton color="error" 
        onClick={()=>{deletemovie(id)}}
         araia-label="deleted"><DeleteIcon/></IconButton>}
        editbutton={<IconButton color="secondary" 
        onClick={()=>history.push("/movies/edit/"+id)}
         araia-label="edit"><EditIcon/> </IconButton>}/>
      ))}
    </div>
  );
}
